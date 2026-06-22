const activites = [
  {
    mois: "Juin 2026",
    icon: "👥",
    title: "Conférence nationale sur la parité",
    description: "Réunion des acteurs politiques et de la société civile pour évaluer l'application de la parité constitutionnelle.",
    bg: "#1a3a5c",
  },
  {
    mois: "Juillet 2026",
    icon: "💵",
    title: "Forum sur l'inclusion financière",
    description: "Rencontre avec les institutions bancaires pour faciliter l'accès au crédit des femmes.",
    bg: "#1e6b3a",
  },
  {
    mois: "Septembre 2026",
    icon: "📖",
    title: "Lancement bibliothèque numérique",
    description: "Mise en ligne de ressources documentaires sur les droits des femmes.",
    bg: "#922b21",
  },
];

export default function ActivitesSection() {
  return (
    <section style={{ padding: "80px 40px", background: "#f9fafb" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{ color: "#e67e22", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
          À VENIR
        </div>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: "#1a1a1a", marginBottom: 12 }}>
          Activités prévues
        </h2>
        <p style={{ color: "#6b7280", fontSize: 16 }}>
          Prochaines initiatives du Conseil Consultatif de la Femme
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 1100, margin: "0 auto" }}>
        {activites.map((a, i) => (
          <div key={i} style={{
            background: a.bg, borderRadius: 12,
            padding: "32px 28px", color: "white", position: "relative"
          }}>
            <div style={{
              position: "absolute", top: 20, right: 20,
              background: "#e67e22", borderRadius: 20,
              padding: "4px 14px", fontSize: 12, fontWeight: 600
            }}>{a.mois}</div>
            <div style={{ fontSize: 28, marginBottom: 20 }}>{a.icon}</div>
            <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>{a.title}</h3>
            <p style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.6 }}>{a.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
