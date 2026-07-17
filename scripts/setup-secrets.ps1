# Reads .env.local + optional .cloudflare.local and configures Cloudflare Worker secrets.
# Auth: wrangler login OR CLOUDFLARE_API_TOKEN + CLOUDFLARE_ACCOUNT_ID in .cloudflare.local

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$EnvFile = Join-Path $Root ".env.local"
$CloudflareFile = Join-Path $Root ".cloudflare.local"
$DevVars = Join-Path $Root ".dev.vars"

if (-not (Test-Path $EnvFile)) {
    Write-Error ".env.local not found at $EnvFile"
}

function Parse-DotEnv {
    param([string]$Path)
    $vars = @{}
    Get-Content $Path | ForEach-Object {
        $line = $_.Trim()
        if ($line -eq "" -or $line.StartsWith("#")) { return }
        if ($line -match '^([A-Za-z_][A-Za-z0-9_]*)=(.*)$') {
            $name = $Matches[1]
            $value = $Matches[2].Trim().Trim('"').Trim("'")
            $vars[$name] = $value
        }
    }
    return $vars
}

if (Test-Path $CloudflareFile) {
    $cf = Parse-DotEnv -Path $CloudflareFile
    if ($cf.ContainsKey("CLOUDFLARE_API_TOKEN")) {
        $env:CLOUDFLARE_API_TOKEN = $cf["CLOUDFLARE_API_TOKEN"]
    }
    if ($cf.ContainsKey("CLOUDFLARE_ACCOUNT_ID")) {
        $env:CLOUDFLARE_ACCOUNT_ID = $cf["CLOUDFLARE_ACCOUNT_ID"]
    }
}

$vars = Parse-DotEnv -Path $EnvFile
$required = @(
    "NEXT_EMAILJS_SERVICEID",
    "NEXT_EMAILJS_TEMPLATEID",
    "NEXT_EMAILJS_OPTIONS",
    "NEXT_EMAILJS_PRIVATEKEY"
)

foreach ($key in $required) {
    if (-not $vars.ContainsKey($key) -or [string]::IsNullOrWhiteSpace($vars[$key])) {
        Write-Error "Missing $key in .env.local"
    }
}

$content = ($required | ForEach-Object { "$_=$($vars[$_])" }) -join "`n"
Set-Content -Path $DevVars -Value $content -NoNewline -Encoding utf8
Write-Host "Created .dev.vars for local preview."

Push-Location $Root
$PreviousErrorAction = $ErrorActionPreference
$ErrorActionPreference = "Continue"
try {
    $whoamiOutput = & pnpm exec wrangler whoami 2>&1 | Out-String
    if ($LASTEXITCODE -ne 0 -or $whoamiOutput -match "not authenticated") {
        Write-Error "Wrangler auth failed. Check .cloudflare.local or run: pnpm exec wrangler login"
    }
    Write-Host "Wrangler authenticated."

    foreach ($key in $required) {
        Write-Host "Setting Worker secret: $key"
        $secretOutput = $vars[$key] | & pnpm exec wrangler secret put $key 2>&1 | Out-String
        if ($LASTEXITCODE -ne 0) {
            Write-Host $secretOutput
            Write-Error "Failed to set $key"
        }
    }

    Write-Host "Cloudflare EmailJS secrets configured on Worker portfolio-3d." -ForegroundColor Green
}
finally {
    $ErrorActionPreference = $PreviousErrorAction
    Pop-Location
}

Write-Host ""
Write-Host "GitHub Secrets: https://github.com/kaiquesimao/portfolio_3d/settings/secrets/actions"
Write-Host "Add CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID, and the 4 NEXT_EMAILJS_* vars."
