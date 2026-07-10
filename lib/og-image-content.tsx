import { siteConfig } from "@/lib/site";

export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 45%, #ECFEFF 100%)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -140,
          left: -100,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.28) 0%, rgba(37,99,235,0) 70%)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -160,
          right: -120,
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, rgba(6,182,212,0) 70%)",
          display: "flex",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            display: "flex",
            width: 84,
            height: 84,
            borderRadius: 24,
            background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 55%, #06B6D4 100%)",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 50px rgba(37,99,235,0.35)",
          }}
        >
          <div style={{ width: 34, height: 34, position: "relative", display: "flex" }}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: "100%",
                height: 8,
                marginTop: -4,
                borderRadius: 4,
                background: "white",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                height: "100%",
                width: 8,
                marginLeft: -4,
                borderRadius: 4,
                background: "white",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 800,
            color: "#0F172A",
            letterSpacing: -1.5,
          }}
        >
          Pharma Plus
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 28,
          fontSize: 30,
          color: "#475569",
          textAlign: "center",
          maxWidth: 820,
        }}
      >
        {siteConfig.tagline}
      </div>
    </div>
  );
}
