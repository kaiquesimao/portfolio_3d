import type { MouseEvent, ReactNode } from "react";

const TRAILING_PUNCTUATION = /[.,;:!?)\]}'"]+$/;

const BARE_HOST_HREFS: Record<string, string> = {
  "pokedata.kaique.site": "https://pokedata.kaique.site",
  "portfolio.kaique.site": "https://portfolio.kaique.site",
};

const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/gi;
const BARE_LINK_PATTERN =
  /https?:\/\/[^\s<>"'()[\]]+|pokedata\.kaique\.site|portfolio\.kaique\.site/gi;

const DEFAULT_LINK_CLASS =
  "font-medium text-[#915EFF] underline decoration-[#915EFF]/40 underline-offset-2 transition-colors hover:text-white hover:decoration-white/50";

function shortLabelForUrl(href: string): string {
  try {
    const { hostname, pathname } = new URL(href);
    const host = hostname.replace(/^www\./, "").toLowerCase();

    if (host === "play.google.com") {
      return "Play Store";
    }
    if (host === "github.com") {
      return "GitHub";
    }
    if (host.endsWith(".kaique.site")) {
      return host;
    }
    if (pathname && pathname !== "/") {
      return `${host}${pathname.length > 24 ? `${pathname.slice(0, 24)}…` : pathname}`;
    }
    return host;
  } catch {
    return href;
  }
}

function normalizeBareMatch(
  raw: string,
): { href: string; label: string; consumed: number } | null {
  const trailing = raw.match(TRAILING_PUNCTUATION)?.[0] ?? "";
  const token = trailing ? raw.slice(0, -trailing.length) : raw;
  if (!token) {
    return null;
  }

  const lower = token.toLowerCase();
  const bareHref = BARE_HOST_HREFS[lower];
  if (bareHref) {
    return { href: bareHref, label: token, consumed: token.length };
  }

  if (/^https?:\/\//i.test(token)) {
    return {
      href: token,
      label: shortLabelForUrl(token),
      consumed: token.length,
    };
  }

  return null;
}

type LinkPart = {
  start: number;
  end: number;
  href: string;
  label: string;
};

function collectLinkParts(text: string): LinkPart[] {
  const parts: LinkPart[] = [];
  const occupied: Array<[number, number]> = [];

  const overlaps = (start: number, end: number) =>
    occupied.some(([from, to]) => start < to && end > from);

  MARKDOWN_LINK_PATTERN.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = MARKDOWN_LINK_PATTERN.exec(text)) !== null) {
    const start = match.index;
    const end = start + match[0].length;
    parts.push({
      start,
      end,
      label: match[1],
      href: match[2],
    });
    occupied.push([start, end]);
  }

  BARE_LINK_PATTERN.lastIndex = 0;
  while ((match = BARE_LINK_PATTERN.exec(text)) !== null) {
    const start = match.index;
    const normalized = normalizeBareMatch(match[0]);
    if (!normalized) {
      continue;
    }
    const end = start + normalized.consumed;
    if (overlaps(start, end)) {
      continue;
    }
    parts.push({
      start,
      end,
      href: normalized.href,
      label: normalized.label,
    });
    occupied.push([start, end]);
  }

  return parts.sort((a, b) => a.start - b.start);
}

type LinkifyOptions = {
  className?: string;
  stopPropagation?: boolean;
};

export function linkifyText(
  text: string,
  options: LinkifyOptions | string = {},
): ReactNode[] {
  const resolved =
    typeof options === "string" ? { className: options } : options;
  const className = resolved.className ?? DEFAULT_LINK_CLASS;
  const stopPropagation = resolved.stopPropagation ?? false;

  const handleClick = stopPropagation
    ? (event: MouseEvent<HTMLAnchorElement>) => {
        event.stopPropagation();
      }
    : undefined;

  const parts = collectLinkParts(text);
  if (parts.length === 0) {
    return [text];
  }

  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const part of parts) {
    if (part.start > lastIndex) {
      nodes.push(text.slice(lastIndex, part.start));
    }
    nodes.push(
      <a
        key={`link-${key}`}
        href={part.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={handleClick}
      >
        {part.label}
      </a>,
    );
    key += 1;
    lastIndex = part.end;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export function stripMarkdownLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/gi, "$1");
}

type LinkifiedTextProps = {
  text: string;
  className?: string;
  linkClassName?: string;
  stopPropagation?: boolean;
};

export function LinkifiedText({
  text,
  className,
  linkClassName = DEFAULT_LINK_CLASS,
  stopPropagation = false,
}: LinkifiedTextProps) {
  const content = linkifyText(text, {
    className: linkClassName,
    stopPropagation,
  });
  if (!className) {
    return <>{content}</>;
  }
  return <span className={className}>{content}</span>;
}
