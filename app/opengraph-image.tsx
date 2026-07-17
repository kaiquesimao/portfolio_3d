import { ImageResponse } from "next/og";

export const alt = "Kaique Simão | Software Engineer";export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #050816 0%, #100d25 45%, #151030 100%)",
          color: "#f3f3f3",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "999px",
              background: "#915EFF",
            }}
          />
          <div
            style={{
              fontSize: "28px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#aaa6c3",
            }}
          >
            Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Kaique Simão
          </div>
          <div
            style={{
              fontSize: "36px",
              fontWeight: 500,
              color: "#915EFF",
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              maxWidth: "820px",
              fontSize: "26px",
              lineHeight: 1.4,
              color: "#aaa6c3",
            }}
          >
            Full-stack · sistemas críticos · SaaS · cloud · experiências web
            modernas
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "22px",
            color: "#aaa6c3",
          }}
        >
          <span>portfolio.kaique.site</span>
          <div
            style={{
              width: "160px",
              height: "4px",
              borderRadius: "999px",
              background: "linear-gradient(90deg, #915EFF 0%, transparent 100%)",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
