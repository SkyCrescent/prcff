const textes = [
  { icon: "⚖️", title: "Loi n° 4-2010", subtitle: "Loi Mouebara - Lutte contre les VBG", size: "PDF 2.4 MB" },
  { icon: "🏛️", title: "Constitution du Congo", subtitle: "Article 8 sur la parité", size: "PDF 1.8 MB" },
  { icon: "💼", title: "Code du travail", subtitle: "Égalité professionnelle", size: "PDF 3.1 MB" },
  { icon: "❤️", title: "Stratégie nationale VBG", subtitle: "Plan d'action 2024-2028", size: "PDF 4.2 MB" },
];

export default function TextesSection() {
  return (
    <section style={{ padding: "80px 40px", background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
          <div>
            <div style={{ color: "#c0392b", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              CADRE LÉGAL
            </div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1a1a1a" }}>
              Recueil des textes officiels
            </h2>
          </div>
          <a href="#" style={{ color: "#c0392b", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            Tous les textes →
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {textes.map((t, i) => (
            <div key={i} style={{
              background: "#f9fafb", borderRadius: 12, padding: "24px 20px",
              cursor: "pointer", transition: "box-shadow 0.2s",
            }}>
              <div style={{ fontSize: 28, marginBottom: 14, color: "#c0392b" }}>{t.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: 15, color: "#1a1a1a", marginBottom: 6 }}>{t.title}</h3>
              <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 12 }}>{t.subtitle}</p>
              <span style={{ color: "#e67e22", fontWeight: 600, fontSize: 12 }}>{t.size}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
