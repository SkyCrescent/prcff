const articles = [
  {
    date: "15 mai 2026",
    tag: "Égalité",
    tagColor: "#1a5276",
    title: "la participation politique et administrative de la femme au congo",
    description: "Analyse des défis liés à la participation politique et administrative de la femme en République du Congo",
    img: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=400&h=220&fit=crop",
  },
  {
    date: "8 mai 2026",
    tag: "Économie",
    tagColor: "#1e6b3a",
    title: "Autonomisation économique des femmes rurales",
    description: "Retour sur les initiatives réussies et les perspectives dans le département du Pool.",
    img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=220&fit=crop",
  },
  {
    date: "2 mai 2026",
    tag: "VBG",
    tagColor: "#7b241c",
    title: "Application de la Loi Mouebara : défis et succès",
    description: "Évaluation de la loi anti-VBG 3 ans après son renforcement.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=220&fit=crop",
  },
];

export default function ArticlesSection() {
  return (
    <section style={{ padding: "80px 40px", background: "#f9fafb" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
          <div>
            <div style={{ color: "#c0392b", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              EXPERTISE
            </div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1a1a1a" }}>
              Articles et analyses thématiques
            </h2>
          </div>
          <a href="#" style={{ color: "#c0392b", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            Voir tous les articles →
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {articles.map((a, i) => (
            <div key={i} style={{
              background: "white", borderRadius: 12,
              overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
            }}>
              <img src={a.img} alt={a.title} style={{ width: "100%", height: 190, objectFit: "cover" }} />
              <div style={{ padding: "20px 20px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, fontSize: 13, color: "#6b7280" }}>
                  <span>📅 {a.date}</span>
                  <span style={{
                    background: a.tagColor + "18",
                    color: a.tagColor,
                    borderRadius: 6, padding: "2px 10px",
                    fontWeight: 600, fontSize: 12
                  }}>🏷 {a.tag}</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "#1a1a1a", marginBottom: 10, lineHeight: 1.4 }}>{a.title}</h3>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, marginBottom: 16 }}>{a.description}</p>
                <a href="#" style={{ color: "#c0392b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
                  Lire l'analyse →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
