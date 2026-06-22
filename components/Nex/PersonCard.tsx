type PersonCardProps = {
  icon: string;
  name: string;
  role: string;
  roleColor?: string;
  roleBg?: string;
  description: string;
  topBarColor: string;
  placeholder?: boolean;
};

export default function PersonCard({
  icon, name, role, roleColor = "#92400e", roleBg = "#fef3c7",
  description, topBarColor, placeholder = false
}: PersonCardProps) {
  return (
    <div style={{
      background: "white", borderRadius: 12,
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      overflow: "hidden", opacity: placeholder ? 0.6 : 1
    }}>
      <div style={{ height: 4, background: topBarColor }} />
      <div style={{ padding: "24px 22px" }}>
        <div style={{
          width: 52, height: 52, borderRadius: "50%",
          background: "#f1f2f4", display: "flex",
          alignItems: "center", justifyContent: "center",
          fontSize: 22, marginBottom: 16, color: "#c0392b"
        }}>{icon}</div>
        <h3 style={{ fontWeight: 700, fontSize: 16, color: placeholder ? "#9ca3af" : "#1a2e3d", marginBottom: 8, lineHeight: 1.3 }}>
          {name}
        </h3>
        <span style={{
          display: "inline-block", background: roleBg, color: roleColor,
          borderRadius: 6, padding: "3px 10px", fontSize: 12,
          fontWeight: 600, marginBottom: 12
        }}>{role}</span>
        <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{description}</p>
      </div>
    </div>
  );
}
