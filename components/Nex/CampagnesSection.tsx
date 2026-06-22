const campaigns = [
  {
    icon: "🩺",
    title: "Atelier d'écoute avec les femmes du district de Mouyondzi",
    description: "Le CCF a sensibilisé les femmes du district de Mouyondzi sur ses missions ainsi que récolté les doléances de ces femmes en vue de nourrir sa base de données pour faire des rapports au Président de la République fondés sur des réalités vécues par la femme congolaise.",
    stat: "2 350 femmes consultées",
  },
  {
    icon: "⚖️",
    title: "Ateliers sur la Loi Mouebara",
    description: "Sessions de sensibilisation sur les droits des femmes et la lutte contre les VBG.",
    stat: "8 départements couverts",
  },
  {
    icon: "💻",
    title: "Formation numérique femmes",
    description: "Initiation aux outils numériques et au e-commerce pour les entrepreneures.",
    stat: "450 femmes formées",
  },
];

export default function CampagnesSection() {
  return (
    <section style={{ padding: "80px 40px", background: "white" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{ color: "#e67e22", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
          NOS ACTIONS
        </div>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: "#1a1a1a", marginBottom: 12 }}>
          Campagnes de santé maternelle
        </h2>
        <p style={{ color: "#6b7280", fontSize: 16 }}>
          Les initiatives déjà menées sur le terrain pour les femmes congolaises
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 1100, margin: "0 auto" }}>
        {campaigns.map((c, i) => (
          <div key={i} style={{
            background: "white", borderRadius: 12,
            padding: "32px 28px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
            borderLeft: "4px solid #e67e22", position: "relative"
          }}>
            <div style={{
              width: 48, height: 48, background: "#fef3e2",
              borderRadius: 12, display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 22, marginBottom: 20
            }}>{c.icon}</div>
            <h3 style={{ fontWeight: 700, fontSize: 17, color: "#1a1a1a", marginBottom: 12 }}>{c.title}</h3>
            <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, marginBottom: 20 }}>{c.description}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#e67e22", fontWeight: 600, fontSize: 13 }}>
              <span>📅</span> {c.stat}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
