import PersonCard from "./PersonCard";
import SectionHeader from "./SectionHeader";

const team = [
  {
    icon: "👑", topBarColor: "#c0392b",
    name: "GAMOKOUBA Sarah Rolande Emmanuela",
    role: "Deuxième secrétaire", roleBg: "#fef3c7", roleColor: "#92400e",
    description: "Deuxième secrétaire du Conseil consultatif de la femme — Supervision des processus consultatifs et de l'observation des politiques publiques.",
  },
  {
    icon: "👤", topBarColor: "#1a3a5c",
    name: "Eric Armel MASSAMBA BAYELISSA",
    role: "Chef de Cabinet", roleBg: "#e5e7eb", roleColor: "#374151",
    description: "Chef de Cabinet de la Deuxième Secrétaire du Conseil consultatif de la femme.",
  },
  {
    icon: "", topBarColor: "#1e8449",
    name: "MBAMA Chrisma Rolande",
    role: "Assistante organisation & observation", roleBg: "#e5e7eb", roleColor: "#374151",
    description: "Assistante à l'organisation des sessions de désignation des membres du Conseil consultatif de la femme et à l'observation de la vie politique et administrative nationale de la femme.",
    placeholder: true,
  },
  {
    icon: "💼", topBarColor: "#e67e22",
    name: "BONGHO-NOUARRA Frédérique Angela",
    role: "Secrétaire particulière", roleBg: "#e5e7eb", roleColor: "#374151",
    description: "Secrétaire particulière de la Deuxième Secrétaire du Conseil consultatif de la femme — Gestion administrative et appui rapproché.",
  },
  {
    icon: "🤝", topBarColor: "#1a3a5c",
    name: "NGUEKOU MEYA Hursain",
    role: "Agent du protocole", roleBg: "#e5e7eb", roleColor: "#374151",
    description: "Agent du protocole de la Deuxième Secrétaire du Conseil consultatif de la femme — Coordination des cérémonies officielles et accueil des personnalités.",
  },
];

const missions = [
  { icon: "🤝", title: "Relations internationales & juridique", description: "Le CCF collabore avec l'UNFPA, l'Union Européenne et les organes consultatifs des pays étrangers." },
  { icon: "🖥️", title: "Assistance aux programmes", description: "Amélioration continue des performances à travers des enquêtes nationales et des ateliers terrain." },
  { icon: "🔨", title: "Observation politique & administrative", description: "Suivi de la vie politique et administrative nationale sous l'angle du genre et de la participation féminine." },
];

export default function CabinetDeuxiemeSection() {
  return (
    <>
      <section className="bg-white py-20 px-8">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-14">

                        <span className="text-[#c63b28] uppercase font-semibold tracking-widest text-sm">
                            Appui & observation
                        </span>

            <h2 className="text-5xl font-bold text-[#17354d] mt-3">
              Cabinet de la Deuxième Secrétaire
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl">
              Équipe dédiée à l'organisation des sessions et à l'observation de la vie politique.
            </p>

          </div>

          {/* TEAM GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {team.map((p, i) => (
                <div
                    key={i}
                    className="bg-white rounded-2xl shadow-lg hover:-translate-y-2 transition p-6 border-t-4"
                    style={{borderTopColor: p.topBarColor}}
                >

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

      {/* MISSIONS */}
      <section className="bg-gray-50 py-20 px-8">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {missions.map((m, i) => (
                <div
                    key={i}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-8 text-center"
                >

                  <div className="text-3xl text-[#c63b28] mb-4">
                    {m.icon}
                  </div>

                  <h3 className="text-[#17354d] font-bold text-lg">
                    {m.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {m.description}
                  </p>

                </div>
            ))}

          </div>

        </div>

      </section>


    </>
  );
}
