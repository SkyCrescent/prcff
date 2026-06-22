type PersonCardHorizontalProps = {
  icon: string;
  name: string;
  role: string;
  description: string;
  bgColor: string;
  roleBg?: string;
  roleColor?: string;
};

export default function PersonCardHorizontal({
  icon, name, role, description, bgColor,
  roleBg = "#fde2e2", roleColor = "#a93226"
}: PersonCardHorizontalProps) {
  return (
    <div style={{
      display: "flex", borderRadius: 12, overflow: "hidden",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)", background: "white"
    }}>
      <div style={{
        background: bgColor, width: 110, minWidth: 110,
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          background: "rgba(255,255,255,0.2)", display: "flex",
          alignItems: "center", justifyContent: "center", fontSize: 20, color: "white"
        }}>{icon}</div>
      </div>
      <div style={{ padding: "24px 24px", flex: 1 }}>
        <h3 style={{ fontWeight: 700, fontSize: 17, color: "#1a2e3d", marginBottom: 10 }}>{name}</h3>
        <span style={{
          display: "inline-block", background: roleBg, color: roleColor,
          borderRadius: 6, padding: "4px 12px", fontSize: 12,
          fontWeight: 600, marginBottom: 12, borderBottom: "2px solid " + roleColor
        }}>{role}</span>
        <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{description}</p>
      </div>
    </div>
  );
}
