import PersonCard from "./PersonCard";
import SectionHeader from "./SectionHeader";

const team = [
  {
    icon: "👤", topBarColor: "#c0392b",
    name: "OSSETE née MBERI MOUKIETOU Yennie Clara Mathurine",
    role: "Secrétaire exécutive", roleBg: "#fef3c7", roleColor: "#92400e",
    description: "Secrétaire exécutive du Conseil consultatif de la femme, en charge de l'orientation générale et de la mise en œuvre des politiques d'égalité des genres.",
  },
  {
    icon: "🔨", topBarColor: "#1a3a5c",
    name: "WOURA Reneldon",
    role: "Directeur du Cabinet p.i.", roleBg: "#e5e7eb", roleColor: "#374151",
    description: "Directeur du Cabinet par intérim, Assistant juridique, Chargé des relations avec les organismes internationaux et les organes consultatifs des pays étrangers.",
  },
  {
    icon: "📈", topBarColor: "#1e8449",
    name: "NDEDI BERIANDI Drussil Jauresson",
    role: "Assistant au programme", roleBg: "#e5e7eb", roleColor: "#374151",
    description: "Assistant au programme et à l'amélioration des performances — Suivi et évaluation des programmes, optimisation des processus institutionnels.",
  },
  {
    icon: "🪪", topBarColor: "#e67e22",
    name: "MOUANDZA Marianne Lys",
    role: "Cheffe du secrétariat central", roleBg: "#e5e7eb", roleColor: "#374151",
    description: "Cheffe du service du secrétariat central, chargée de l'administration et du personnel.",
  },
  {
    icon: "📢", topBarColor: "#1a3a5c",
    name: "BAKALA MILOLO Demosthen Roddy",
    role: "Chef Relations publiques & protocole", roleBg: "#e5e7eb", roleColor: "#374151",
    description: "Chef du service des relations publiques et du protocole — Gestion des événements officiels et des relations extérieures.",
  },
  {
    icon: "📅", topBarColor: "#c0392b",
    name: "Winner ...",
    role: "Cheffe de bureau du protocole", roleBg: "#e5e7eb", roleColor: "#374151",
    description: "Cheffe de bureau du protocole de Madame la Secrétaire exécutive — Gestion des agendas et des déplacements officiels.",
    placeholder: true,
  },
  {
    icon: "🪙", topBarColor: "#1e8449",
    name: "LOUELA Aymard Franck",
    role: "Chef du suivi des crédits", roleBg: "#e5e7eb", roleColor: "#374151",
    description: "Chef du bureau du suivi des crédits — Contrôle budgétaire et allocation des ressources financières.",
  },
  {
    icon: "🎙️", topBarColor: "#9ca3af",
    name: "Agent de communication",
    role: "Porte-parole (poste à pourvoir)", roleBg: "#e5e7eb", roleColor: "#6b7280",
    description: "Agent de la communication, porte-parole — Stratégie de communication et relations médias.",
    placeholder: true,
  },
];

export default function CabinetSecretaireSection() {
  return (
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-14">

                    <span className="text-[#c63b28] uppercase font-semibold tracking-widest text-sm">
                        Leadership exécutif
                    </span>

            <h2 className="text-5xl font-bold text-[#17354d] mt-3">
              Cabinet de la Secrétaire Exécutive
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl">
              L'équipe chargée de l'orientation stratégique, des relations internationales
              et de la coordination globale du CCF.
            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {team.map((p, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg hover:-translate-y-2 transition p-6 border-t-4"
                     style={{borderTopColor: p.topBarColor}}>

                  <div className="text-2xl mb-4">{p.icon}</div>

                  <h3 className="text-[#17354d] font-bold text-lg">
                    {p.name}
                  </h3>

                  <span
                      className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: p.roleBg,
                        color: p.roleColor
                      }}
                  >
                                {p.role}
                            </span>

                  <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                    {p.description}
                  </p>

                </div>
            ))}

          </div>

        </div>
      </section>
  );
}
