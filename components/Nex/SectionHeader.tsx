type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 10 }}>
        <span style={{ color: "#c0392b", fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase" }}>
          {eyebrow}
        </span>
        <h2 style={{
          fontSize: 26, fontWeight: 700, color: "#1a2e3d",
          borderBottom: "3px solid #c0392b", paddingBottom: 6, display: "inline-block"
        }}>
          {title}
        </h2>
      </div>
      {description && (
        <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, maxWidth: 720 }}>{description}</p>
      )}
    </div>
  );
}
