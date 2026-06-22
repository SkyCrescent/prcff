export default function PersonnelHero() {
  return (
      <section className="relative px-1 py-12 flex items-center overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-[#17354d] via-[#17354d] to-transparent z-0"/>

          {/* IMAGE DROITE AVEC FADE (IMPORTANT) */}
          <div className="absolute right-0 top-0 h-full w-[55%] z-0">
              <img
                  src="/images/img444.png"
                  alt=""
                  className="h-full w-full object-cover"
              />

              {/* MASK pour cacher la gauche de l’image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#17354d] via-[#17354d]/80 to-transparent"/>
          </div>


          <div className="relative z-10 py-6 mx-auto px-8 w-full flex items-center justify-between">

              {/* LEFT CONTENT */}
              <div className="max-w-3xl">

                  <div
                      className="inline-flex text-sm items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20">
                      <span className="w-2 h-2 rounded-full bg-[#f4a311] animate-pulse"></span>
                      👥 Notre équipe dirigeante
                  </div>


                  <h1 className="text-white text-4xl font-bold mt-6 leading-tight">
                      Personnel du Secrétariat Exécutif Permanent du Conseil Consultatif de la femme
                  </h1>

                  <p className="text-[14px] text-white mt-6 leading-relaxed max-w-xl">
                      Découvrez l'équipe qui œuvre quotidiennement pour que la voix des femmes congolaises soit
                      entendue
                  </p>
              </div>
          </div>


          {/*<div style={{maxWidth: 1100, margin: "0 auto"}}>*/}
          {/*    /!*<div style={{*!/*/}
          {/*    /!*    display: "inline-flex", alignItems: "center", gap: 8,*!/*/}
          {/*    /!*    background: "rgba(255,255,255,0.12)", borderRadius: 20,*!/*/}
          {/*            /!*    padding: "7px 16px", fontSize: 13, fontWeight: 600, marginBottom: 24*!/*/}
          {/*            /!*}}>*!/*/}
          {/*            /!*    👥 Notre équipe dirigeante*!/*/}
          {/*            /!*</div>*!/*/}
          {/*            <h1 style={{fontSize: 38, fontWeight: 700, lineHeight: 1.25, marginBottom: 20, maxWidth: 760}}>*/}
          {/*                Personnel du Secrétariat Exécutif Permanent du Conseil Consultatif de la femme*/}
          {/*            </h1>*/}
          {/*            <p style={{fontSize: 16, opacity: 0.85, lineHeight: 1.6, maxWidth: 640}}>*/}
          {/*                découvrez l'équipe qui œuvre quotidiennement pour que la voix des femmes congolaises soit*/}
          {/*                entendue*/}
          {/*            </p>*/}
          {/*        </div>*/}
      </section>
);
}
