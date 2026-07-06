"use client";

import { useState } from "react";
import {
    PlusIcon,
    ArrowPathIcon,
    BookmarkIcon,
    PowerIcon,
    PrinterIcon
} from "@heroicons/react/24/outline";

export default function PointagePage() {

    const [date] = useState(new Date());

    const rows = [
        { nom: "Directeur de Cabinet", arrivee: "07:30", depart: "17:00", obs: "Ok" },
        { nom: "Secrétaire particulière", arrivee: "07:45", depart: "15:12", obs: "Retard" },
        { nom: "Assistant juridique", arrivee: "08:05", depart: "15:30", obs: "Retard" },
        { nom: "Secrétaire (Accueil)", arrivee: "08:15", depart: "15:30", obs: "Retard" },
        { nom: "Directeur protocole", arrivee: "/", depart: "/", obs: "Absent" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#17354d] to-[#0ea5a4] p-6">

            {/* HEADER TITLE */}
            <h1 className="text-center text-white text-4xl font-extrabold tracking-wide mb-6">
                POINTAGE
            </h1>

            {/* MAIN GRID */}
            <div className="grid grid-cols-12 gap-6">

                {/* LEFT PANEL */}
                <aside className="col-span-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 text-white space-y-3">

                    {[
                        { name: "Nouveau", icon: PlusIcon },
                        { name: "Actualiser", icon: ArrowPathIcon },
                        { name: "Sauvegarder", icon: BookmarkIcon },
                        { name: "Quitter", icon: PowerIcon },
                    ].map((b, i) => {
                        const Icon = b.icon;
                        return (
                            <button
                                key={i}
                                className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-[#f4a311] hover:text-black transition"
                            >
                                <Icon className="w-5 h-5" />
                                {b.name}
                            </button>
                        );
                    })}

                </aside>

                {/* CENTER */}
                <main className="col-span-7 space-y-6">

                    {/* QR SECTION */}
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 flex flex-col items-center">

                        <h2 className="text-white text-2xl font-bold mb-6">
                            Scan de pointage
                        </h2>

                        <div className="relative">
                            <div className="w-60 h-60 rounded-3xl bg-gradient-to-br from-[#0ea5a4] to-[#17354d] flex items-center justify-center">
                                <div className="text-white text-center">
                                    <div className="text-6xl">⬜</div>
                                    <p className="text-sm mt-2">QR Scanner</p>
                                </div>
                            </div>

                            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#f4a311] text-black px-4 py-1 rounded-full text-sm font-bold">
                                Scan me
                            </span>
                        </div>
                    </div>

                    {/* TABLE */}
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6">

                        <table className="w-full text-white text-sm">
                            <thead className="text-white/70 border-b border-white/20">
                            <tr>
                                <th className="text-left py-2">Nom</th>
                                <th>Arrivée</th>
                                <th>Départ</th>
                                <th>Obs</th>
                            </tr>
                            </thead>

                            <tbody>
                            {rows.map((r, i) => (
                                <tr key={i} className="border-b border-white/10">
                                    <td className="py-3">{r.nom}</td>
                                    <td className="text-center">{r.arrivee}</td>
                                    <td className="text-center">{r.depart}</td>
                                    <td className="text-center">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold
                                                ${r.obs === "Ok" ? "bg-green-500/30 text-green-300" :
                                                r.obs === "Retard" ? "bg-yellow-500/30 text-yellow-300" :
                                                    "bg-red-500/30 text-red-300"}
                                            `}>
                                                {r.obs}
                                            </span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <div className="flex justify-end mt-4">
                            <button className="flex items-center gap-2 bg-[#f4a311] text-black px-4 py-2 rounded-xl font-bold">
                                <PrinterIcon className="w-5 h-5" />
                                Imprimer
                            </button>
                        </div>

                    </div>

                </main>

                {/* RIGHT PANEL */}
                <aside className="col-span-3 space-y-6">

                    {/* CALENDAR */}
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-4 text-white">

                        <h3 className="text-center font-bold mb-3">
                            Juillet 2026
                        </h3>

                        <div className="grid grid-cols-7 text-center text-xs gap-1">
                            {["L","M","M","J","V","S","D"].map((d,i)=>(
                                <span key={i} className="text-white/60">{d}</span>
                            ))}

                            {Array.from({ length: 30 }).map((_, i) => (
                                <span
                                    key={i}
                                    className="py-1 rounded hover:bg-[#f4a311]/40"
                                >
                                    {i + 1}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* DATE */}
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-4 text-center text-white">
                        <p className="text-sm text-white/60">Aujourd’hui</p>
                        <p className="font-bold">
                            {date.toLocaleDateString("fr-FR")}
                        </p>
                    </div>

                </aside>

            </div>
        </div>
    );
}