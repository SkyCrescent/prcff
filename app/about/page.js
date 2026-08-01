"use client";
import {AnimatePresence, motion} from "framer-motion";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function pag(){


    const missions = [
        {
            icon: "🤝",
            title: "Dialogue institutionnel",
            description:
                "Assurer le lien permanent entre les institutions de la République et les réalités vécues par les femmes et les jeunes filles congolaises."
        },
        {
            icon: "⚖️",
            title: "Promotion des droits",
            description:
                "Œuvrer pour la promotion des droits de la femme, l'égalité des chances et la lutte contre toutes les formes de discrimination."
        },
        {
            icon: "🌍",
            title: "Actions de terrain",
            description:
                "Développer des initiatives de proximité afin d'écouter, sensibiliser et accompagner les femmes dans les différents départements."
        }
    ];


    const actions = [
        {
            icon: "📢",
            title: "Vulgarisation du Pacte social",
            text:
                "Madame Yennie Clara Mathurine OSSETE MBERI conduit la campagne nationale de vulgarisation du Pacte social pour l'émancipation des femmes et l'égalité des genres."
        },
        {
            icon: "👩‍👩‍👧",
            title: "Accompagnement des femmes",
            text:
                "Elle œuvre pour renforcer la participation des femmes congolaises dans les domaines social, économique et politique."
        },
        {
            icon: "🏛️",
            title: "Représentation institutionnelle",
            text:
                "Dans ses fonctions de Secrétaire Exécutive Permanente du Conseil Consultatif de la Femme, elle contribue à porter la voix des femmes auprès des institutions."
        }
    ];


    const valeurs = [
        "Égalité des chances",
        "Leadership féminin",
        "Dignité humaine",
        "Cohésion sociale",
        "Responsabilité familiale",
        "Développement inclusif"
    ];



    return(
        <div className="bg-white">

            <NavBar/>


            {/* HERO */}

            <section
                className=" relative overflow-hidden bg-[#17354d] px-8 py-20 ">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#17354d] via-[#17354d] to-transparent "/>
                <div
                    className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 ">
                    {/* PHOTO */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.8
                        }}
                        className="relative">

                        <img
                            src="/personnal/WhatsApp%20Image%202026-07-31%20at%2016.22.48.jpeg"
                            alt="Madame Yennie Clara Mathurine OSSETE MBERI"
                            className=" w-72 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/20 "
                        />
                        <div
                            className=" absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#f4a311] text-black px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap  ">
                            Conseil Consultatif de la Femme
                        </div>

                    </motion.div>


                    {/* TEXTE */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2
                        }}
                        className="text-white max-w-3xl ">
                        <span className="uppercase tracking-widest text-[#f4a311] font-semibold text-sm ">
                            Présentation
                        </span>

                        <h1 className=" text-4xl md:text-5xl font-bold mt-4 leading-tight ">
                            Madame Yennie Clara Mathurine
                            <br/>
                            OSSETE MBERI
                        </h1>
                        <h2
                            className="text-xl mt-5 text-white/90 font-semibold">
                            Secrétaire Exécutive Permanente du Conseil Consultatif de la Femme
                        </h2>
                        <p
                            className=" mt-6 text-white/80 leading-relaxed ">
                            Mariée et mère de famille, membre du Parti Congolais du Travail
                            et de l'Organisation des Femmes du Congo, Madame Yennie Clara
                            Mathurine OSSETE MBERI est une actrice engagée dans la promotion
                            de la femme congolaise et dans le développement social national.
                        </p>


                    </motion.div>


                </div>
            </section>


            {/* BIOGRAPHIE */}

            <section className="py-20 px-8 bg-white">

                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-12">

                        <span className=" text-[#c63b28] uppercase font-semibold tracking-widest text-sm ">Parcours</span>
                        <h2 className=" text-4xl md:text-5xl font-bold text-[#17354d] mt-3 ">Une femme engagée au service de la nation</h2>
                    </div>

                    <div className=" bg-gray-50 rounded-3xl shadow-lg p-8 md:p-12 ">
                        <p className=" text-gray-700 leading-8 text-lg ">
                            Madame Yennie Clara Mathurine OSSETE MBERI, mariée et mère de
                            famille, est membre du Parti Congolais du Travail (PCT) et de
                            l'Organisation des Femmes du Congo (OFC).
                        </p>


                        <p className=" mt-5 text-gray-700 leading-8 text-lg ">
                            Elle exerce les fonctions de Secrétaire Exécutive Permanente
                            du Conseil Consultatif de la Femme, institution qui constitue
                            un cadre de réflexion, de dialogue et de proposition sur les
                            questions liées à la condition féminine en République du Congo.
                        </p>


                        <p className=" mt-5 text-gray-700 leading-8 text-lg">
                            À travers son engagement, elle contribue à promouvoir la
                            participation des femmes dans la vie nationale, l'égalité des
                            chances ainsi que l'autonomisation économique et sociale des
                            femmes congolaises.
                        </p>
                    </div>
                </div>

            </section>


            {/* NOMINATION */}
            <section className=" bg-gray-50 py-20 px-8 ">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -40
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            className="">

                            <span className="text-[#c63b28] uppercase font-semibold tracking-widest text-sm">Nomination</span>
                            <h2 className=" text-4xl font-bold text-[#17354d] mt-3 ">Une nouvelle responsabilité institutionnelle</h2>

                            <p className=" mt-6 text-gray-600 leading-8 ">
                                Madame Yennie Clara Mathurine OSSETE MBERI a été nommée
                                Secrétaire Exécutive Permanente du Conseil Consultatif
                                de la Femme par décret présidentiel.
                            </p>


                            <p className=" mt-4 text-gray-600 leading-8 ">
                                Cette nomination traduit la volonté de renforcer la
                                représentation des femmes et de consolider les actions
                                en faveur de leur participation au développement de la
                                République du Congo.
                            </p>


                        </motion.div>


                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.9
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1
                            }}
                            viewport={{
                                once: true
                            }}
                            className=" bg-white rounded-3xl shadow-xl p-10 border-t-4 border-[#f4a311] ">

                            <div className=" text-5xl mb-5 ">📜</div>


                            <h3 className=" text-2xl font-bold text-[#17354d] ">Fonction actuelle</h3>

                            <p className=" mt-4 text-gray-600 leading-7 ">Secrétaire Exécutive Permanente du Conseil Consultatif de la Femme.</p>

                            <div className="mt-6 w-full h-[2px] bg-[#f4a311]"/>

                            <p className=" mt-5 text-[#c63b28] font-semibold ">République du Congo</p>

                        </motion.div>
                    </div>
                </div>
            </section>


            {/* MISSIONS */}


            <section className=" bg-white py-20 px-8 ">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">

                        <span className=" text-[#c63b28] uppercase font-semibold tracking-widest text-sm ">Missions</span>

                        <h2 className=" text-4xl md:text-5xl font-bold text-[#17354d] mt-3 ">Les grands axes de son engagement</h2>

                    </div>


                    <div
                        className=" grid md:grid-cols-3 gap-8  cursor-pointer">

                        {missions.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    y: -10
                                }}
                                className=" bg-white rounded-2xl shadow-lg p-8 border border-gray-100 ">

                                <div className=" text-4xl ">{item.icon}</div>

                                <h3 className=" text-xl font-bold text-[#17354d] mt-5  cursor-pointer ">{item.title}</h3>

                                <p className=" text-gray-600 mt-4 leading-7  ">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className=" bg-gray-50 py-20 px-8 ">

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className=" text-[#c63b28] uppercase tracking-widest font-semibold text-sm ">Engagement</span>
                        <h2 className="text-4xl md:text-5xl font-bold  text-[#17354d]  mt-3 ">Actions et réalisations majeures</h2>
                    </div>


                    <div className=" grid md:grid-cols-3 gap-8 ">
                        {actions.map((item, index) => (

                            <motion.div
                                key={index}

                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    delay: index * 0.15
                                }}
                                className=" bg-white rounded-2xl shadow-lg p-8 ">

                                <div className="text-4xl">{item.icon}</div>

                                    <h3 className=" mt-5 text-xl font-bold text-[#17354d] ">{item.title}</h3>
                                    <p className=" mt-4 text-gray-600 leading-7 ">
                                        {item.text}
                                    </p>
                            </motion.div>

                        ))}
                    </div>
                </div>
            </section>


            {/* VISION */}

            <section className=" bg-[#17354d] py-20 px-8 text-white ">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <span className=" text-[#f4a311] uppercase tracking-widest font-semibold ">Vision</span>
                        <h2 className=" text-4xl md:text-5xl font-bold mt-4 ">Construire une société plus inclusive </h2>

                        <p className=" mt-8 text-white/80 leading-8 max-w-4xl mx-auto text-lg ">
                            La vision portée par Madame Yennie Clara Mathurine
                            OSSETE MBERI est celle d'une République où la femme
                            congolaise participe pleinement aux décisions,
                            au développement économique, social et politique
                            du pays.
                        </p>

                    </div>

                    <div className=" grid grid-cols-2 md:grid-cols-3 gap-6 mt-14  cursor-default">
                        {valeurs.map((v, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    scale: 1.05
                                }}
                                className=" bg-white/10 backdrop-blur rounded-xl p-6 text-center ">

                                <span className=" text-white font-semibold ">
                                    {v}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CITATION */}


            <section className=" bg-[#fdf8f3] py-20 px-8 ">
                <div className=" max-w-5xl mx-auto text-center">
                    <div className=" text-5xl text-[#f4a311] ">❝</div>
                    <p className=" mt-6 text-2xl md:text-3xl italic font-semibold text-[#17354d] leading-relaxed ">
                        Le développement durable de notre pays passe par
                        une implication réelle des femmes dans tous les secteurs
                        de la vie nationale.
                    </p>

                    <p className=" mt-8 text-[#c63b28] font-bold ">
                        Madame Yennie Clara Mathurine OSSETE MBERI
                    </p>
                </div>
            </section>


            {/* GALERIE */}


            <section className=" bg-white py-20 px-8 ">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <span className=" text-[#c63b28] uppercase font-semibold tracking-widest ">Galerie</span>
                        <h2 className=" text-4xl font-bold text-[#17354d] mt-3 ">Activités et rencontres</h2>

                    </div>

                    <div className=" grid md:grid-cols-3 gap-6 ">

                        {[
                                "/images/yennie1.jpg",
                                "/images/yennie2.jpg",
                                "/images/yennie3.jpg"
                            ]
                                .map((img, index) => (

                                    <motion.div
                                        key={index}
                                        whileHover={{
                                            scale: 1.04
                                        }}
                                        className=" overflow-hidden rounded-2xl shadow-lg ">
                                        <img
                                            src={img}
                                            alt=""
                                            className=" w-full h-72 object-cover "/>
                                    </motion.div>

                                ))
                        }


                    </div>


                </div>


            </section>


            <Footer/>

</div>
)
    ;
}