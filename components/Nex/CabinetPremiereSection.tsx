import PersonCardHorizontal from "./PersonCardHorizontal";

export default function CabinetPremiereSection() {
  return (
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-14">

                    <span className="text-[#c63b28] uppercase font-semibold tracking-widest text-sm">
                        Conseil consultatif
                    </span>

            <h2 className="text-5xl font-bold text-[#17354d] mt-3">
              Cabinet de la Première Secrétaire
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl">
              Instance chargée de l'animation du conseil et de la coordination des travaux consultatifs.
            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <PersonCardHorizontal
                icon="👩"
                bgColor="#1a3a5c"
                name="MITATA Audrey ZITA"
                role="Première secrétaire du Conseil consultatif"
                description="Préside les sessions consultatives et coordonne les travaux du conseil."
            />

            <PersonCardHorizontal
                icon="💼"
                bgColor="#c0392b"
                name="MANANGA Christian Alain"
                role="Chef de Cabinet"
                description="Coordination des actions du cabinet et liaison avec les partenaires."
            />

          </div>

        </div>
      </section>
  );
}