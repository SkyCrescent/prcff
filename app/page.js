'use client'
import {
    UserCircleIcon,
    DocumentTextIcon,
    ChartBarIcon,
} from "@heroicons/react/24/solid";
import {useEffect, useState} from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import NavBar from  "../components/NavBar"

const activites = [
    {
        mois: "Juin 2026",
        icon: "👥",
        title: "Conférence nationale sur la parité",
        description:
            "Réunion des acteurs politiques et de la société civile pour évaluer l'application de la parité constitutionnelle.",
        bg: "#1a3a5c",
        image: "/images/images.jfif",
    },
    {
        mois: "Juillet 2026",
        icon: "💵",
        title: "Forum sur l'inclusion financière",
        description:
            "Rencontre avec les institutions bancaires pour faciliter l'accès au crédit des femmes.",
        bg: "#1e6b3a",
        image: "/images/image.jfif",
    },
    {
        mois: "Septembre 2026",
        icon: "📖",
        title: "Lancement bibliothèque numérique",
        description:
            "Mise en ligne de ressources documentaires sur les droits des femmes.",
        bg: "#922b21",
        image: "/images/71HGjx+6NcL._AC_UF1000,1000_QL80_.jpg",
    },
];
const articles = [
    {
        date: "15 mai 2026",
        tag: "Égalité",
        tagColor: "#1a5276",
        title: "la participation politique et administrative de la femme au congo",
        description: "Analyse des défis liés à la participation politique et administrative de la femme en République du Congo",
        img:  "/article/fileminimizer_img_20220611_120154_300.jpg",
    },
    {
        date: "8 mai 2026",
        tag: "Économie",
        tagColor: "#1e6b3a",
        title: "Autonomisation économique des femmes rurales",
        description: "Retour sur les initiatives réussies et les perspectives dans le département du Pool.",
        img:  "/article/Promoting-women-economic-empowerment-in-West-and-Central-Africa.jpg",
    },
    {
        date: "2 mai 2026",
        tag: "VBG",
        tagColor: "#7b241c",
        title: "Application de la Loi Mouebara : défis et succès",
        description: "Évaluation de la loi anti-VBG 3 ans après son renforcement.",
        img:  "/article/images.jfif",
    },
];


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


const textes = [
    { icon: "⚖️", title: "Loi n° 4-2010", subtitle: "Loi Mouebara - Lutte contre les VBG", size: "PDF 2.4 MB" },
    { icon: "🏛️", title: "Constitution du Congo", subtitle: "Article 8 sur la parité", size: "PDF 1.8 MB" },
    { icon: "💼", title: "Code du travail", subtitle: "Égalité professionnelle", size: "PDF 3.1 MB" },
    { icon: "❤️", title: "Stratégie nationale VBG", subtitle: "Plan d'action 2024-2028", size: "PDF 4.2 MB" },
];



const stats = [
    { value: "12", label: "Départements couverts" },
    { value: "5000+", label: "Femmes consultées" },
    { value: "26", label: "Membres du Conseil" },
    { value: "2026", label: "Programme en cours" },
];



export default function Home() {
    const [visibleStats, setVisibleStats] = useState(0);
    const [selected, setSelected] = useState(null);
    const [selectedArticle, setSelectedArticle] = useState(null);


    useEffect(() => {
        if (visibleStats < stats.length) {
            const timer = setTimeout(() => {
                setVisibleStats((prev) => prev + 1);
            }, 500); // 1 par 1
            return () => clearTimeout(timer);
        }
    }, [visibleStats]);

    return (
        <div>
            {/* NAVBAR */}
            <NavBar/>

            <section className="relative px-1 py-12 flex items-center overflow-hidden">

                {/* BACKGROUND GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#17354d] via-[#17354d] to-transparent z-0"/>

                {/* IMAGE DROITE AVEC FADE (IMPORTANT) */}
                <div className="absolute right-0 top-0 h-full w-[55%] z-0">
                    <img
                        src="/images/000_34XM4VJ.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                    />

                    {/* MASK pour cacher la gauche de l’image */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#17354d] via-[#17354d]/80 to-transparent"/>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 py-6 mx-auto px-8 w-full flex items-center justify-between">

                    {/* LEFT CONTENT */}
                    <div className="max-w-3xl">

                        {/*<div*/}
                        {/*    className="inline-flex text-sm items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20">*/}
                        {/*    <span className="w-2 h-2 rounded-full bg-[#f4a311] animate-pulse"></span>*/}
                        {/*    Programme 2026 — UNFPA*/}
                        {/*</div>*/}

                        <h1 className="text-white text-4xl font-bold mt-2 leading-tight">
                            Conseil Consultatif de la Femme
                            <br/>
                            République du Congo
                        </h1>

                        <p className="text-[14px] text-white mt-6 leading-relaxed max-w-xl">
                            Le pont entre le Président de la République et les réalités
                            vécues par les femmes et les jeunes filles congolaises
                        </p>

                        {/*<div className="flex flex-wrap gap-6 mt-10">*/}

                        {/*    <button*/}
                        {/*        className="bg-[#f4a311] text-black text-sm font-semibold px-9 py-4 rounded-full shadow-lg hover:-translate-y-1 transition">*/}
                        {/*        ✍️ Questionnaire citoyen*/}
                        {/*    </button>*/}

                        {/*    <button*/}
                        {/*        className="bg-white/10 text-white text-sm font-semibold px-9 py-4 rounded-full border border-white/20 hover:bg-white/20 transition">*/}
                        {/*        📄 Textes officiels*/}
                        {/*    </button>*/}

                        {/*</div>*/}

                    </div>

                </div>
            </section>

            {/* STATS SECTION (EN BAS DU HERO) */}
            <div className="relative bg-white px-8 py-16">

                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 -mt-20">

                    {stats.map((item, index) =>
                        index < visibleStats ? (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 40, scale: 0.9}}
                                whileInView={{opacity: 1, y: 0, scale: 1}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                viewport={{once: true}}
                                whileHover={{scale: 1.05}}
                                className="
                        relative
                        px-6 py-6
                        rounded-2xl
                        text-center
                        bg-white
                        border border-gray-100
                        shadow-lg
                        overflow-hidden
                    "
                            >
                                {/* accent glow */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-60"></div>

                                <h3 className="text-2xl font-extrabold text-[#17354d] relative z-10">
                                    {item.value}
                                </h3>

                                <p className="text-gray-600 text-base mt-2 relative z-10">
                                    {item.label}
                                </p>

                                <div className="w-25 h-[2px] bg-[#f4a311] mx-auto mt-3 rounded-full"></div>
                            </motion.div>
                        ) : null
                    )}

                </div>

            </div>


            {/* ACTUALITES */}
            <section className="bg-gray-50 py-16 font-sans">

                <div className="px-8 mx-auto py-4">

                    {/* HEADER */}
                    <div className="flex justify-between items-start mb-12">

                        <div>
                <span className="text-[#c63b28] uppercase font-semibold">
                    À la Une
                </span>

                            <h2 className="text-5xl font-bold text-[#17354d] mt-2">
                                Lancement des enquêtes en milieu carcéral
                            </h2>

                            <p className="text-small text-black mt-3 max-w-auto">
                                Le CCF en partenariat avec la DGAP lancent la phase terrain des enquêtes pour l'étude
                                sur l'implication des jeunes filles dans le phénomène de délinquance juvénile dans 12
                                départements.
                            </p>
                        </div>


                    </div>

                    {/* CARDS */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {activites.map((a, i) => (
                            <div
                                key={i}
                                onClick={() => setSelected(a)}
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >

                                {/* IMAGE */}
                                <div className="relative overflow-hidden">

                                    <img
                                        src={a.image}
                                        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        alt=""
                                    />

                                    {/* overlay hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"/>

                                    {/* TAG */}
                                    <span
                                        className="absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold bg-[#f4a311] text-black group-hover:scale-105 transition">
                    {a.mois}
                </span>

                                    {/* ICON */}
                                    <span
                                        className="absolute bottom-4 left-4 text-2xl bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                    {a.icon}
                </span>

                                </div>

                                {/* CONTENT */}
                                <div className="p-6">

                                    <h3 className="text-2xl font-bold mb-3 text-[#17354d] group-hover:text-[#c63b28] transition">
                                        {a.title}
                                    </h3>

                                    <p className="text-gray-600 mb-5 line-clamp-3">
                                        {a.description}
                                    </p>

                                    <span className="text-[#c63b28] font-medium hover:underline">
                    Lire la suite →
                </span>

                                </div>

                            </div>
                        ))}

                    </div>


                    {/* BOUTON VOIR PLUS */}
                    <div className="flex justify-center mt-12">

                        <button className="
                px-8 py-4
                rounded-full
                bg-white
                border border-gray-300
                text-[#17354d]
                font-semibold
                shadow-sm
                hover:shadow-md
                hover:-translate-y-1
                transition-all duration-300
            ">
                            Voir plus d’actualités
                        </button>

                    </div>

                </div>

            </section>

            {/*<section className="bg-gray-50 -mt-12 font-sans">*/}


            {/*    <div className="px-8 mx-auto">*/}

            {/*        <div className="flex justify-between items-start mb-12">*/}


            {/*            <div>*/}
            {/*    <span className="text-[#c63b28] uppercase font-semibold">*/}
            {/*        À VENIR*/}
            {/*    </span>*/}

            {/*                <h2 className="text-5xl font-bold text-[#17354d] mt-2">*/}
            {/*                    Activités prévues*/}
            {/*                </h2>*/}

            {/*                <p className="text-small text-black mt-3 max-w-5xl">*/}
            {/*                    Prochaines initiatives du Conseil Consultatif de la Femme.*/}
            {/*                </p>*/}
            {/*            </div>*/}


            {/*        </div>*/}


            {/*        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">*/}

            {/*            {activites.map((a, i) => (*/}
            {/*                <div*/}
            {/*                    key={i}*/}
            {/*                    className="group relative rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition h-[420px] flex flex-col"*/}
            {/*                    style={{background: a.bg}}*/}
            {/*                >*/}

            {/*                    /!* IMAGE FIXE *!/*/}
            {/*                    <div className="h-[200px] overflow-hidden relative flex-shrink-0">*/}

            {/*                        <img*/}
            {/*                            src={a.image}*/}
            {/*                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"*/}
            {/*                        />*/}

            {/*                        <div className="absolute inset-0 bg-black/30"/>*/}

            {/*                        <div*/}
            {/*                            className="absolute top-3 right-3 bg-[#f4a311] text-black px-3 py-1 text-xs font-bold rounded-full">*/}
            {/*                            {a.mois}*/}
            {/*                        </div>*/}

            {/*                        <div*/}
            {/*                            className="absolute bottom-3 left-3 text-2xl bg-white/20 backdrop-blur px-3 py-1 rounded-full">*/}
            {/*                            {a.icon}*/}
            {/*                        </div>*/}

            {/*                    </div>*/}

            {/*                    /!* CONTENT FIXE *!/*/}
            {/*                    <div className="p-6 text-white flex flex-col flex-1">*/}

            {/*                        <h3 className="font-bold text-lg group-hover:text-[#f4a311] transition">*/}
            {/*                            {a.title}*/}
            {/*                        </h3>*/}

            {/*                        <p className="text-white/80 text-sm mt-2 line-clamp-3">*/}
            {/*                            {a.description}*/}
            {/*                        </p>*/}

            {/*                        <div*/}
            {/*                            className="mt-auto w-12 h-[2px] bg-[#f4a311] group-hover:w-20 transition-all duration-300"/>*/}

            {/*                    </div>*/}

            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}


            <section className="bg-gray-50 py-20 px-8">
                <div className="max-w-7xl mx-auto">

                    {/* HEADER */}
                    <div className="flex justify-between items-start mb-12">

                        <div>
                <span className="text-[#c63b28] uppercase font-semibold">
                    EXPERTISE
                </span>

                            <h2 className="text-5xl font-bold text-[#17354d] mt-2">
                                Articles et analyses thématiques
                            </h2>

                            <p className=" text-small mt-3 max-w-auto">
                                Publications, études et réflexions du Conseil Consultatif de la Femme
                                sur les enjeux liés aux droits, à l'autonomisation et à la participation
                                des femmes congolaises.
                            </p>
                        </div>

                        <a
                            href="#"
                            className="text-[#c63b28] font-semibold hover:underline"
                        >
                            Voir tous les articles →
                        </a>

                    </div>

                    {/* ARTICLES */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {articles.map((a, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedArticle(a)}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col"
                            >

                                {/* IMAGE */}
                                <div className="h-[220px] overflow-hidden relative">

                                    <img
                                        src={a.img}
                                        alt={a.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />

                                    <div className="absolute inset-0 bg-black/20"/>

                                    <div
                                        className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-semibold">
                                        📅 {a.date}
                                    </div>

                                </div>

                                {/* CONTENT */}
                                <div className="p-6 flex flex-col flex-1">

                                    <div className="mb-4">
                            <span
                                className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                                style={{
                                    backgroundColor: `${a.tagColor}20`,
                                    color: a.tagColor,
                                }}
                            >
                                🏷 {a.tag}
                            </span>
                                    </div>

                                    <h3 className="font-bold text-xl text-[#17354d] group-hover:text-[#f4a311] transition">
                                        {a.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-3 line-clamp-4">
                                        {a.description}
                                    </p>

                                    <div className="mt-auto pt-5">

                                        <div
                                            className="w-12 h-[2px] bg-[#f4a311] group-hover:w-24 transition-all duration-300 mb-4"/>

                                        <a
                                            href="#"
                                            className="font-semibold text-[#c63b28] hover:text-[#f4a311] transition"
                                        >
                                            Lire l'analyse →
                                        </a>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            <section className="bg-white py-20 px-8">
                <div className="max-w-7xl mx-auto">

                    {/* HEADER */}
                    <div className="text-center mb-14">

            <span className="text-[#c63b28] uppercase font-semibold tracking-widest text-sm">
                NOS ACTIONS
            </span>

                        <h2 className="text-5xl font-bold text-[#17354d] mt-3">
                            Campagnes de santé maternelle
                        </h2>

                        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                            Les initiatives déjà menées sur le terrain pour les femmes congolaises
                        </p>

                    </div>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {campaigns.map((c, i) => (
                            <div
                                key={i}
                                className="group bg-white rounded-2xl shadow-lg hover:-translate-y-2 transition p-8 border-l-4 border-[#e67e22]"
                            >

                                <div
                                    className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-2xl mb-5">
                                    {c.icon}
                                </div>

                                <h3 className="text-xl font-bold text-[#17354d] group-hover:text-[#e67e22] transition">
                                    {c.title}
                                </h3>

                                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                                    {c.description}
                                </p>

                                <div className="mt-6 text-sm font-semibold text-[#e67e22] flex items-center gap-2">
                                    📅 {c.stat}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#fdf8f3] py-20 px-8">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">

                    {/* LEFT */}
                    <div className="flex-1">
        <span className="text-[#c63b28] uppercase font-semibold tracking-widest text-sm">
            📋 Donnez votre avis
        </span>

                        <h2 className="text-4xl font-bold text-[#17354d] mt-6">
                            15 minutes chrono
                        </h2>

                        <p className="text-gray-600 mt-5 text-sm leading-relaxed max-w-3xl">
                            Votre voix compte. Participez à notre enquête pour mieux comprendre les réalités des femmes
                            congolaises et orienter nos actions futures.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button
                                className="bg-[#c0392b] hover:bg-[#a93226] text-white px-6 py-4 rounded-xl font-semibold cursor-pointer hover:scale-105 transition-transform duration-300">
                                ✏️ Remplir le questionnaire
                            </button>

                            <button
                                className="bg-white border-2 border-gray-200 px-6 py-4 rounded-xl font-semibold cursor-pointer hover:scale-105 transition-transform duration-300">
                                ⬇️ Télécharger le PDF
                            </button>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div
                        className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-4 min-w-[260px] ml-2">
                        <div className="text-5xl">🙍</div>

                        {[
                            "Anonymat garanti",
                            "15 minutes chrono",
                            "Base nationale"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                <span className="text-green-600 text-lg">✔</span>
                                {item}
                            </div>
                        ))}
                    </div>

                </div>

            </section>

            <section className="bg-white py-20 px-8">
                <div className="max-w-7xl mx-auto">

                    {/* HEADER */}
                    <div className="flex justify-between items-end mb-12">

                        <div>
                <span className="text-[#c63b28] uppercase font-semibold tracking-widest text-sm">
                    CADRE LÉGAL
                </span>

                            <h2 className="text-4xl font-bold text-[#17354d] mt-2">
                                Recueil des textes officiels
                            </h2>
                        </div>

                        <a href="#" className="text-[#c63b28] font-semibold hover:underline">
                            Tous les textes →
                        </a>

                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {textes.map((t, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 hover:bg-white hover:shadow-lg transition rounded-2xl p-6 cursor-pointer group"
                            >

                                <div className="text-3xl text-[#c0392b] mb-4">
                                    {t.icon}
                                </div>

                                <h3 className="text-[#17354d] font-bold text-base group-hover:text-[#e67e22] transition">
                                    {t.title}
                                </h3>

                                <p className="text-gray-500 text-sm mt-2">
                                    {t.subtitle}
                                </p>

                                <div className="mt-4 text-[#e67e22] font-semibold text-sm">
                                    {t.size}
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    {/* BACKDROP */}
                    <div
                        className="absolute inset-0 bg-black/60"
                        onClick={() => setSelected(null)}
                    />

                    {/* MODAL */}
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden">

                        {/* IMAGE */}
                        <div className="h-56 relative">
                            <img
                                src={selected.image}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/30" />

                            <div className="absolute top-3 right-3 bg-[#f4a311] text-black px-3 py-1 text-xs font-bold rounded-full">
                                {selected.mois}
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-6">

                            <h2 className="text-2xl font-bold text-[#17354d]">
                                {selected.title}
                            </h2>

                            <p className="text-gray-600 mt-3 leading-relaxed">
                                {selected.description}
                            </p>

                            {/* EXTRA DETAILS (si tu veux ajouter) */}
                            {selected.details && (
                                <div className="mt-4 text-sm text-gray-500">
                                    {selected.details}
                                </div>
                            )}

                            <button
                                onClick={() => setSelected(null)}
                                className="mt-6 w-full bg-[#c63b28] text-white py-3 rounded-xl font-semibold hover:bg-[#a93226] transition"
                            >
                                Fermer
                            </button>

                        </div>

                    </div>
                </div>
            )}




            {selectedArticle && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    {/* BACKDROP */}
                    <div
                        className="absolute inset-0 bg-black/60"
                        onClick={() => setSelectedArticle(null)}
                    />

                    {/* MODAL */}
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden">

                        {/* IMAGE */}
                        <div className="h-56 relative">

                            <img
                                src={selectedArticle.img}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/30" />

                            <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-semibold">
                                📅 {selectedArticle.date}
                            </div>

                        </div>

                        {/* CONTENT */}
                        <div className="p-6">

                            {/* TAG */}
                            <span
                                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                                style={{
                                    backgroundColor: `${selectedArticle.tagColor}20`,
                                    color: selectedArticle.tagColor,
                                }}
                            >
                    🏷 {selectedArticle.tag}
                </span>

                            <h2 className="text-2xl font-bold text-[#17354d]">
                                {selectedArticle.title}
                            </h2>

                            <p className="text-gray-600 mt-4 leading-relaxed">
                                {selectedArticle.description}
                            </p>

                            <button
                                onClick={() => setSelectedArticle(null)}
                                className="mt-6 w-full bg-[#c63b28] text-white py-3 rounded-xl font-semibold hover:bg-[#a93226] transition"
                            >
                                Fermer
                            </button>

                        </div>

                    </div>

                </div>
            )}
            <Footer/>
        </div>
    );
}