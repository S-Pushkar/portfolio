import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — Portfolio`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #131a24 0%, #1a2230 50%, #0f172a 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 12,
              height: 48,
              borderRadius: 8,
              background: "#3b82f6",
            }}
          />
          <span
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#60a5fa",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </span>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#e8edf5",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#94a3b8",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
