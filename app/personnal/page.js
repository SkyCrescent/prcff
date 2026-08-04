'use client'
import axios from "axios";

import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PersonnelHero from "../../components/Nex/PersonnelHero";
import CabinetSecretaireSection from "../../components/Nex/CabinetSecretaireSection";
import CabinetPremiereSection from "../../components/Nex/CabinetPremiereSection";
import CabinetDeuxiemeSection from "../../components/Nex/CabinetDeuxiemeSection";
import PersonCardHorizontal from "../../components/Nex/PersonCardHorizontal";





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


const team2 = [
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





export default function PersonnelCCF() {

    const [personnel, setPersonnel] = useState([]);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const uploadUrl = process.env.NEXT_PUBLIC_UPLOAD ;

    const getImageSrc = (photo) => {
        if (!photo) return "/picture.png"; // fallback
        // Si déjà une URL complète
        if (photo.startsWith("http://") || photo.startsWith("https://")) {
            return photo;
        }
        // Sinon chemin relatif
        return `${uploadUrl}/${photo}`;
    };




    const loadPersonnel=async()=>{
        try {
            const res = await axios.get(

                `${apiUrl}/Personnel/getallPersonnal.php`
            );

              console.log(res.data.data)

            if (res.data.data  && res.data.data.length > 0){
                setPersonnel(
                    res.data.data);

            }   else {
                console.log("La réponse de l'API est incorrecte ou ne contient pas de données.",res);
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
        }


    };


    useEffect(() => {
        loadPersonnel();
    }, []);


    const cabinetSecretaire = personnel.filter(
        (p) => p.type === "Cabinet de la Secrétaire Exécutive"
    );

    const cabinetPremiere = personnel.filter(
        (p) => p.type === "Cabinet de la Première Secrétaire"
    );

    const cabinetDeuxieme = personnel.filter(
        (p) => p.type === "Cabinet de la Deuxième Secrétaire"
    );

    return (
        <main>
            <Navbar/>
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

                        {cabinetSecretaire.map((p, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-lg hover:-translate-y-2 transition p-6 border-t-4"
                                style={{borderTopColor: "#c0392b"}}
                            >

                                <div className="flex justify-center mb-5">

                                    <img
                                        src={getImageSrc(p.photo)}
                                        alt={p.nom}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                                    />

                                </div>

                                <h3 className="text-[#17354d] font-bold text-lg text-center">
                                    {p.nom}
                                </h3>

                                <span
                                    className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800"
                                >
        {p.type}
    </span>

                                <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                                    {p.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>
            </section>
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
                        {cabinetPremiere.map((p, i) => (

                            <PersonCardHorizontal
                                key={i}
                                image={getImageSrc(p.photo)}
                                name={p.nom}
                                role={p.type}
                                description={p.description}
                                bgColor="#1a3a5c"
                             icon={getImageSrc(p.photo)}/>

                        ))}

                        {/*<PersonCardHorizontal*/}
                        {/*    icon="👩"*/}
                        {/*    bgColor="#1a3a5c"*/}
                        {/*    name="MITATA Audrey ZITA"*/}
                        {/*    role="Première secrétaire du Conseil consultatif"*/}
                        {/*    description="Préside les sessions consultatives et coordonne les travaux du conseil."*/}
                        {/*/>cabinetPremiere*/}

                        {/*<PersonCardHorizontal*/}
                        {/*    icon="💼"*/}
                        {/*    bgColor="#c0392b"*/}
                        {/*    name="MANANGA Christian Alain"*/}
                        {/*    role="Chef de Cabinet"*/}
                        {/*    description="Coordination des actions du cabinet et liaison avec les partenaires."*/}
                        {/*/>*/}

                    </div>

                </div>
            </section>

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

                        {cabinetDeuxieme.map((p, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-lg hover:-translate-y-2 transition p-6 border-t-4"
                                style={{borderTopColor: "#1e8449"}}
                            >

                                <div className="flex justify-center mb-5">

                                    <img
                                        src={getImageSrc(p.photo)}
                                        alt={p.nom}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                                    />

                                </div>

                                <h3 className="text-[#17354d] font-bold text-lg text-center">
                                    {p.nom}
                                </h3>

                                <span
                                    className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
        {p.type}
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

            {/*<PersonnelHero />*/}
            {/*<CabinetSecretaireSection/>*/}
            {/*<CabinetPremiereSection/>*/}
            {/*<CabinetDeuxiemeSection/>*/}
            <Footer/>
        </main>
    );
}
