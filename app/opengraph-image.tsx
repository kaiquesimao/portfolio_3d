import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Kaique Simão | Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const screenshotBuffer = await readFile(
    join(process.cwd(), "public/assets/projects/portfolio3d.png"),
  );
  const screenshotSrc = `data:image/png;base64,${screenshotBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #050816 0%, #100d25 50%, #151030 100%)",
          color: "#f3f3f3",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "58%",
            padding: "56px 56px 56px 64px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "48px",
                height: "54px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                background: "linear-gradient(160deg, #6936f5 0%, #915EFF 100%)",
                color: "#ffffff",
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              KS
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#f3f3f3",
                }}
              >
                Kaique Simão
              </div>
              <div
                style={{
                  fontSize: "16px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#aaa6c3",
                }}
              >
                Portfolio 3D
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                fontSize: "58px",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Software Engineer
            </div>
            <div
              style={{
                fontSize: "26px",
                lineHeight: 1.35,
                color: "#aaa6c3",
                maxWidth: "520px",
              }}
            >
              Full-stack · sistemas críticos · SaaS multi-tenant · cloud
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "8px",
              }}
            >
              {["Next.js", "Three.js", "Spring", "Flutter"].map((label) => (
                <div
                  key={label}
                  style={{
                    fontSize: "16px",
                    color: "#c4b5fd",
                    border: "1px solid rgba(145, 94, 255, 0.45)",
                    borderRadius: "999px",
                    padding: "6px 14px",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "20px",
              color: "#aaa6c3",
            }}
          >
            <span>portfolio.kaique.site</span>
            <div
              style={{
                width: "120px",
                height: "4px",
                borderRadius: "999px",
                background: "linear-gradient(90deg, #915EFF 0%, transparent 100%)",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "42%",
            padding: "48px 48px 48px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(145, 94, 255, 0.35)",
              boxShadow: "0 24px 80px rgba(0, 0, 0, 0.45)",
            }}
          >
            {/* Brand preview — local PNG encoded for ImageResponse */}
            <img
              src={screenshotSrc}
              alt=""
              width={480}
              height={534}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
