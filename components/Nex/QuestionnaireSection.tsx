export default function QuestionnaireSection() {
  return (
    <section style={{ padding: "60px 40px", background: "#fdf8f3" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
        <div style={{ flex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#e67e22", color: "white", borderRadius: 20,
            padding: "6px 16px", fontSize: 13, fontWeight: 600, marginBottom: 20
          }}>
            📋 Donnez votre avis
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#1a1a1a", marginBottom: 16 }}>
            15 minutes chrono
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 28, maxWidth: 520 }}>
            Votre voix compte. Participez à notre enquête pour mieux comprendre les réalités des femmes congolaises et orienter nos actions futures.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <button style={{
              background: "#c0392b", color: "white", border: "none",
              borderRadius: 8, padding: "14px 24px", fontSize: 15,
              fontWeight: 600, cursor: "pointer", display: "flex",
              alignItems: "center", gap: 8
            }}>
              ✏️ Remplir le questionnaire
            </button>
            <button style={{
              background: "white", color: "#1a1a1a",
              border: "2px solid #e5e7eb", borderRadius: 8,
              padding: "14px 24px", fontSize: 15, fontWeight: 600,
              cursor: "pointer", display: "flex", alignItems: "center", gap: 8
            }}>
              ⬇️ Télécharger le PDF
            </button>
          </div>
        </div>

        <div style={{
          background: "white", borderRadius: 16, padding: "32px 36px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)", minWidth: 240,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 16
        }}>
          <div style={{ fontSize: 48 }}>🙍</div>
          {[
            "Anonymat garanti",
            "15 minutes chrono",
            "Contribuez à la base nationale"
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#374151" }}>
              <span style={{ color: "#16a34a", fontSize: 18 }}>✅</span> {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
