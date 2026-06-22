'use client'
import {
    UserCircleIcon,
    DocumentTextIcon,
    ChartBarIcon,
} from "@heroicons/react/24/solid";
import {useEffect, useState} from "react";
import { motion } from "framer-motion";

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
        img: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=400&h=220&fit=crop",
    },
    {
        date: "8 mai 2026",
        tag: "Économie",
        tagColor: "#1e6b3a",
        title: "Autonomisation économique des femmes rurales",
        description: "Retour sur les initiatives réussies et les perspectives dans le département du Pool.",
        img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=220&fit=crop",
    },
    {
        date: "2 mai 2026",
        tag: "VBG",
        tagColor: "#7b241c",
        title: "Application de la Loi Mouebara : défis et succès",
        description: "Évaluation de la loi anti-VBG 3 ans après son renforcement.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=220&fit=crop",
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
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="w-auto mx-auto  flex items-center justify-between px-8 py-4">

                    {/* LOGO + TITRES */}
                    <div className="flex items-center gap-4 flex-shrink-0">

                        <img
                            src="/WhatsApp.png"
                            alt="Logo"
                            className="w-20 h-20 object-contain"
                        />

                        <div className="font-sans leading-tight">
                            <h1 className="font-bold  text-[#17354d] text-xl lg:text-2xl">
                                Présidence de la République
                            </h1>

                            <p className="text-[#c63b28] font-medium text-sm">
                                Conseil Consultatif de la Femme
                            </p>
                        </div>
                    </div>

                    {/* MENU */}
                    <nav className="hidden mx-6 md:flex items-center gap-10 ml-[380px]">

                        {[
                            "Accueil",
                            "Personnel CCF",
                            "Bibliothèque numérique",
                            "INPAF",
                        ].map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="group relative  text-[#17354d] font-sans leading-tight text-lg font-bold transition-colors duration-300 hover:text-[#c63b28]"
                            >
                                {item}

                                {/* Soulignement animé */}
                                <span
                                    className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#c63b28] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* BOUTON */}
                    <button
                        className="
                                ml-auto
                                bg-transparent
                                text-[#17354d]
                                border-2 border-[#17354d]
                                px-4 py-3
                                rounded-full
                                font-semibold
                                flex items-center gap-2
                                transition-all duration-300
                                hover:-translate-y-1
                                hover:bg-[#17354d]
                                hover:text-white
                                cursor-pointer
                                shadow-[0_6px_20px_rgba(59,130,246,0.15)]
    "
                    >
                        <UserCircleIcon className="w-5 h-5"/>
                        Connexion
                    </button>

                </div>
            </header>


            <section className="relative px-8 py-12 flex items-center overflow-hidden">

                {/* BACKGROUND GRADIENT  text-[#17354d] */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#17354d] via-[#17354d] to-transparent z-0"/>

                {/* IMAGE DROITE (visible à travers le transparent) */}
                <img
                    src="/images/img4.png"
                    alt=""
                    className="absolute right-20 top-0 h-[450px] w-[450px] object-cover z-0"
                />

                {/* CONTENT */}
                <div className="relative z-10 py-6 mx-auto px-8 w-full flex items-center justify-between">

                    {/* LEFT CONTENT */}
                    <div className="max-w-3xl">

                        <div
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-sans border border-white/20 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#f4a311] animate-pulse"></span>
                            Programme 2026 — UNFPA
                        </div>

                        <h1 className="text-white text-5xl font-bold mt-6 leading-tight">
                            Conseil Consultatif de la Femme
                            <br/>
                            République du Congo
                        </h1>
                        {/*font-medium text-sm*/}
                        <p className=" font-sans text-[15px] text-white mt-6 leading-tight space-y-4">
                            Le pont entre le Président de la République et les réalités
                            vécues par les femmes et les jeunes filles congolaises
                        </p>

                        <div className="flex flex-wrap gap-6 mt-10 font-sans">

                            {/* PRIMARY */}
                            <button className="
        bg-[#f4a311]
        text-black
        font-semibold
        px-9 py-4
        rounded-full
        shadow-lg
        hover:shadow-xl
        hover:-translate-y-1
        transition-all duration-300
        flex items-center gap-6
    ">
                                ✍️ Questionnaire citoyen
                            </button>

                            {/* SECONDARY */}
                            <button className="
        bg-white/10
        text-white
        font-semibold
        px-9 py-4
        rounded-full
        backdrop-blur-md
        border border-white/20
        hover:bg-white/20
        hover:-translate-y-1
        transition-all duration-300
        flex items-center gap-2
    ">
                                📄 Textes officiels
                            </button>

                        </div>
                    </div>

                    {/* RIGHT SIDE */}

                </div>
            </section>


            {/* STATS SECTION (EN BAS DU HERO) */}
            <div className="relative bg-white px-8 py-16">

                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 -mt-20">

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


            {/* ACTUALITE */}
            {/*<section className="bg-white px-8 py-12">*/}


            {/*    <div className="px-8 py-12 mx-auto flex justify-between">*/}
            {/*        <div>*/}
            {/*<span className="text-[#c63b28] font-semibold uppercase">*/}
            {/*  À la une*/}
            {/*</span>*/}

            {/*            <h3 className="text-5xl font-bold text-[#17354d] mt-3">*/}
            {/*                Lancement des enquêtes en milieu carcéral*/}
            {/*            </h3>*/}

            {/*            <p className="text-2xl text-black mt-4 max-w-5xl">*/}
            {/*                Le CCF en partenariat avec la DGAP lancent la phase terrain des*/}
            {/*                enquêtes pour l'étude sur l'implication des jeunes filles dans le*/}
            {/*                phénomène de délinquance juvénile dans 12 départements.*/}
            {/*            </p>*/}
            {/*        </div>*/}

            {/*        <div>*/}
            {/*            <button className="text-[#c63b28] text-xl font-medium">*/}
            {/*                Voir toutes →*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}


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

                            <p className="text-xl text-black mt-3 max-w-5xl">
                                Le CCF en partenariat avec la DGAP lancent la phase terrain des enquêtes pour l'étude
                                sur l'implication des jeunes filles dans le phénomène de délinquance juvénile dans 12
                                départements.
                            </p>
                        </div>


                    </div>

                    {/* CARDS */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {[1, 2, 3].map((_, i) => (
                            <article
                                key={i}
                                className="
                        group
                        bg-white
                        rounded-2xl
                        shadow-md
                        overflow-hidden cursor-pointer
                        transition-all duration-300
                        hover:-translate-y-2
                        hover:shadow-2xl
                    "
                            >

                                {/* IMAGE */}
                                <div className="relative overflow-hidden ">

                                    <img
                                        src={[
                                            "/actualites/femme.jpeg",
                                            "/actualites/Ghana-UE-signature-dun-partena-e1774363963170.jpg",
                                            "/actualites/6a0312918d33-Photo-6.jfif"
                                        ][i]}
                                        className="
                                h-56 w-full object-cover
                                transition-transform duration-500
                                group-hover:scale-110
                            "
                                        alt=""
                                    />

                                    {/* overlay hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"/>

                                    {/* TAG */}
                                    <span className="
                            absolute top-4 left-4
                            px-4 py-2 rounded-full
                            text-sm font-semibold
                            transition
                            bg-[#f4a311] text-black
                            group-hover:scale-105
                        ">
                            {
                                ["Enquête nationale", "Partenariat", "Formation"][i]
                            }
                        </span>

                                </div>

                                {/* CONTENT */}
                                <div className="p-6">

                                    <p className="text-[#f4a311] font-medium mb-3">
                                        {["18 mai 2026", "10 mai 2026", "5 mai 2026"][i]}
                                    </p>

                                    <h3 className="text-2xl font-bold mb-4 text-[#17354d] group-hover:text-[#c63b28] transition">
                                        {
                                            [
                                                "Lancement des enquêtes nationales sur les droits des femmes",
                                                "Signature d'un partenariat avec l'Union Européenne",
                                                "Formation des enquêteurs terrain"
                                            ][i]
                                        }
                                    </h3>

                                    <p className="text-gray-600 mb-5">
                                        {
                                            [
                                                "Le CCF et l'UNFPA lancent la phase terrain des enquêtes sur la santé maternelle et les VBG.",
                                                "Un programme de 2 ans pour l'autonomisation économique des femmes rurales.",
                                                "25 enquêteurs formés aux méthodes de collecte de données sensibles."
                                            ][i]
                                        }
                                    </p>

                                    <a
                                        href="#"
                                        className="text-[#c63b28] font-medium hover:underline"
                                    >
                                        Lire la suite →
                                    </a>

                                </div>

                            </article>
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


            {/*<section style={{padding: "80px 40px", background: "#f9fafb"}}>*/}

            <section className="bg-gray-50 py-16 font-sans">


                <div className="px-8 mx-auto py-4">
                    {/*<div style={{textAlign: "center", marginBottom: 48}}>*/}
                    {/*    <div style={{*/}
                    {/*        color: "#e67e22",*/}
                    {/*        fontWeight: 600,*/}
                    {/*        fontSize: 13,*/}
                    {/*        letterSpacing: 2,*/}
                    {/*        textTransform: "uppercase",*/}
                    {/*        marginBottom: 12*/}
                    {/*    }}>*/}
                    {/*        À VENIR*/}
                    {/*    </div>*/}
                    {/*    <h2 style={{fontSize: 36, fontWeight: 700, color: "#1a1a1a", marginBottom: 12}}>*/}
                    {/*        Activités prévues*/}
                    {/*    </h2>*/}
                    {/*    <p style={{color: "#6b7280", fontSize: 16}}>*/}
                    {/*        Prochaines initiatives du Conseil Consultatif de la Femme*/}
                    {/*    </p>*/}
                    {/*</div>*/}


                    <div className="flex justify-between items-start mb-12">


                        <div>
                <span className="text-[#c63b28] uppercase font-semibold">
                    À VENIR
                </span>

                            <h2 className="text-5xl font-bold text-[#17354d] mt-2">
                                Activités prévues
                            </h2>

                            <p className="text-xl text-black mt-3 max-w-5xl">
                                Prochaines initiatives du Conseil Consultatif de la Femme.
                            </p>
                        </div>


                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                        {activites.map((a, i) => (
                            <div
                                key={i}
                                className="group relative rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition h-[420px] flex flex-col"
                                style={{background: a.bg}}
                            >

                                {/* IMAGE FIXE */}
                                <div className="h-[200px] overflow-hidden relative flex-shrink-0">

                                    <img
                                        src={a.image}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />

                                    <div className="absolute inset-0 bg-black/30"/>

                                    <div
                                        className="absolute top-3 right-3 bg-[#f4a311] text-black px-3 py-1 text-xs font-bold rounded-full">
                                        {a.mois}
                                    </div>

                                    <div
                                        className="absolute bottom-3 left-3 text-2xl bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                                        {a.icon}
                                    </div>

                                </div>

                                {/* CONTENT FIXE */}
                                <div className="p-6 text-white flex flex-col flex-1">

                                    <h3 className="font-bold text-lg group-hover:text-[#f4a311] transition">
                                        {a.title}
                                    </h3>

                                    <p className="text-white/80 text-sm mt-2 line-clamp-3">
                                        {a.description}
                                    </p>

                                    <div
                                        className="mt-auto w-12 h-[2px] bg-[#f4a311] group-hover:w-20 transition-all duration-300"/>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section style={{padding: "80px 40px", background: "#f9fafb"}}>
                <div style={{maxWidth: 1100, margin: "0 auto"}}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        marginBottom: 36
                    }}>
                        <div>
                            <div style={{
                                color: "#c0392b",
                                fontWeight: 600,
                                fontSize: 13,
                                letterSpacing: 2,
                                textTransform: "uppercase",
                                marginBottom: 8
                            }}>
                                EXPERTISE
                            </div>
                            <h2 style={{fontSize: 32, fontWeight: 700, color: "#1a1a1a"}}>
                                Articles et analyses thématiques
                            </h2>
                        </div>
                        <a href="#" style={{color: "#c0392b", fontSize: 14, fontWeight: 600, textDecoration: "none"}}>
                            Voir tous les articles →
                        </a>
                    </div>

                    <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24}}>
                        {articles.map((a, i) => (
                            <div key={i} style={{
                                background: "white", borderRadius: 12,
                                overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
                            }}>
                                <img src={a.img} alt={a.title}
                                     style={{width: "100%", height: 190, objectFit: "cover"}}/>
                                <div style={{padding: "20px 20px 24px"}}>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12,
                                        marginBottom: 12,
                                        fontSize: 13,
                                        color: "#6b7280"
                                    }}>
                                        <span>📅 {a.date}</span>
                                        <span style={{
                                            background: a.tagColor + "18",
                                            color: a.tagColor,
                                            borderRadius: 6, padding: "2px 10px",
                                            fontWeight: 600, fontSize: 12
                                        }}>🏷 {a.tag}</span>
                                    </div>
                                    <h3 style={{
                                        fontWeight: 700,
                                        fontSize: 16,
                                        color: "#1a1a1a",
                                        marginBottom: 10,
                                        lineHeight: 1.4
                                    }}>{a.title}</h3>
                                    <p style={{
                                        fontSize: 13,
                                        color: "#6b7280",
                                        lineHeight: 1.6,
                                        marginBottom: 16
                                    }}>{a.description}</p>
                                    <a href="#" style={{
                                        color: "#c0392b",
                                        fontWeight: 600,
                                        fontSize: 14,
                                        textDecoration: "none"
                                    }}>
                                        Lire l'analyse →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section style={{padding: "80px 40px", background: "white"}}>
                <div style={{textAlign: "center", marginBottom: 48}}>
                    <div style={{
                        color: "#e67e22",
                        fontWeight: 600,
                        fontSize: 13,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        marginBottom: 12
                    }}>
                        NOS ACTIONS
                    </div>
                    <h2 style={{fontSize: 36, fontWeight: 700, color: "#1a1a1a", marginBottom: 12}}>
                        Campagnes de santé maternelle
                    </h2>
                    <p style={{color: "#6b7280", fontSize: 16}}>
                        Les initiatives déjà menées sur le terrain pour les femmes congolaises
                    </p>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 24,
                    maxWidth: 1100,
                    margin: "0 auto"
                }}>
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
                            <h3 style={{
                                fontWeight: 700,
                                fontSize: 17,
                                color: "#1a1a1a",
                                marginBottom: 12
                            }}>{c.title}</h3>
                            <p style={{
                                fontSize: 14,
                                color: "#6b7280",
                                lineHeight: 1.6,
                                marginBottom: 20
                            }}>{c.description}</p>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                color: "#e67e22",
                                fontWeight: 600,
                                fontSize: 13
                            }}>
                                <span>📅</span> {c.stat}
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <section style={{padding: "60px 40px", background: "#fdf8f3"}}>
                <div style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 40
                }}>
                    <div style={{flex: 1}}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: 8,
                            background: "#e67e22", color: "white", borderRadius: 20,
                            padding: "6px 16px", fontSize: 13, fontWeight: 600, marginBottom: 20
                        }}>
                            📋 Donnez votre avis
                        </div>
                        <h2 style={{fontSize: 36, fontWeight: 700, color: "#1a1a1a", marginBottom: 16}}>
                            15 minutes chrono
                        </h2>
                        <p style={{fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 28, maxWidth: 520}}>
                            Votre voix compte. Participez à notre enquête pour mieux comprendre les réalités des femmes
                            congolaises et orienter nos actions futures.
                        </p>
                        <div style={{display: "flex", gap: 16}}>
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
                        <div style={{fontSize: 48}}>🙍</div>
                        {[
                            "Anonymat garanti",
                            "15 minutes chrono",
                            "Contribuez à la base nationale"
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                fontSize: 14,
                                color: "#374151"
                            }}>
                                <span style={{color: "#16a34a", fontSize: 18}}>✅</span> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section style={{padding: "80px 40px", background: "white"}}>
                <div style={{maxWidth: 1100, margin: "0 auto"}}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        marginBottom: 36
                    }}>
                        <div>
                            <div style={{
                                color: "#c0392b",
                                fontWeight: 600,
                                fontSize: 13,
                                letterSpacing: 2,
                                textTransform: "uppercase",
                                marginBottom: 8
                            }}>
                                CADRE LÉGAL
                            </div>
                            <h2 style={{fontSize: 32, fontWeight: 700, color: "#1a1a1a"}}>
                                Recueil des textes officiels
                            </h2>
                        </div>
                        <a href="#" style={{color: "#c0392b", fontSize: 14, fontWeight: 600, textDecoration: "none"}}>
                            Tous les textes →
                        </a>
                    </div>

                    <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20}}>
                        {textes.map((t, i) => (
                            <div key={i} style={{
                                background: "#f9fafb", borderRadius: 12, padding: "24px 20px",
                                cursor: "pointer", transition: "box-shadow 0.2s",
                            }}>
                                <div style={{fontSize: 28, marginBottom: 14, color: "#c0392b"}}>{t.icon}</div>
                                <h3 style={{
                                    fontWeight: 700,
                                    fontSize: 15,
                                    color: "#1a1a1a",
                                    marginBottom: 6
                                }}>{t.title}</h3>
                                <p style={{fontSize: 13, color: "#6b7280", marginBottom: 12}}>{t.subtitle}</p>
                                <span style={{color: "#e67e22", fontWeight: 600, fontSize: 12}}>{t.size}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}