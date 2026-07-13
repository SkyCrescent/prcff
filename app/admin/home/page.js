"use client";

import {
    UserGroupIcon,
    ChartBarIcon,
    CalendarIcon,
    GlobeAltIcon,
    FolderIcon,
    DocumentTextIcon,
    Cog6ToothIcon,
    ChatBubbleLeftRightIcon,
    QrCodeIcon
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const menu = [
    { label: "Meeting", icon: UserGroupIcon,path : "/admin/home" },
    { label: "INPAF", icon: ChartBarIcon ,path : "/admin/home/" },
    { label: "Agenda", icon: CalendarIcon ,path : "/admin/home/"},

    { label: "Textes officiels", icon: DocumentTextIcon ,path : "/admin/home/Texte"},
    { label: "Articles", icon: DocumentTextIcon ,path : "/admin/home/"},
    { label: "Actualités", icon: GlobeAltIcon ,path : "/admin/home/"},
    { label: "Personnel", icon: UserGroupIcon ,path : "/admin/home/Personnel"},
    { label: "Bibliothèque médiatique", icon: FolderIcon ,path : "/admin/home/"},

    { label: "Fichiers", icon: FolderIcon ,path : "/admin/home/Fichier"},
    { label: "Suivi", icon: ChartBarIcon ,path : "/admin/home/"},
    { label: "Projets", icon: ChartBarIcon ,path : "/admin/home/"},
    { label: "Rapports", icon: DocumentTextIcon ,path : "/admin/home/"},

    { label: "Réglages", icon: Cog6ToothIcon },
];

//  { label: "CCF Bot", icon: ChatBubbleLeftRightIcon }, { label: "Pointage", icon: QrCodeIcon },  { label: "www.ccf.cg", icon: GlobeAltIcon },

export default function Dashboard() {
    const router = useRouter();
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#17354d] to-[#0ea5a4]">

            {/* BLOBS BACKGROUND */}
            <div className="absolute w-[600px] h-[600px] bg-[#f4a311] opacity-20 blur-3xl rounded-full top-[-200px] left-[-200px]" />
            <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full bottom-[-200px] right-[-200px]" />

            {/* HEADER */}
            <header className="relative z-10 flex items-center justify-between px-8 py-5">
                <div className="flex items-center gap-3">
                    <img src="/network.jpeg" className="w-10 h-10 rounded-full" />
                    <h1 className="text-white font-bold text-xl">
                        CCF Workspace
                    </h1>
                </div>

                {/*<div className="text-white/80 text-sm">*/}
                {/*    ccf_workspace.net*/}
                {/*</div>*/}

                {/*<div className="text-white font-semibold">*/}
                {/*    10:52*/}
                {/*</div>*/}
            </header>

            <div className="relative z-10 flex gap-6 px-8 h-[calc(100vh-84px)] overflow-hidden">
                {/* SIDEBAR */}
                <aside
                    className="w-64 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 h-[calc(100vh-100px)] overflow-auto">

                    <h2 className="text-white font-semibold mb-4">
                        Menu
                    </h2>

                    <div className="space-y-2">
                        {menu.map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={i}
                                    onClick={() => router.push(item.path)}
                                    className="flex items-center gap-3 px-3 py-2 rounded-xl text-white/80 hover:bg-white/10 cursor-pointer transition"
                                >
                                    <Icon className="w-5 h-5"/>
                                    <span className="text-sm">{item.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </aside>

                {/* MAIN */}
                <main className="flex-1">

                    {/* SEARCH */}
                    <div className="mb-6">
                        <input
                            placeholder="Recherche..."
                            className="w-full max-w-xl px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-white/60 outline-none focus:border-[#f4a311]"

                        />
                    </div>

                    {/* GRID */}
                    <main className="flex-1 flex flex-col h-[calc(100vh-100px)]">
                        {/* GRID SCROLLABLE */}
                        <div className="flex-1 overflow-y-auto pr-2 mb-14">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                                {menu.map((item, i) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={i}
                                            onClick={() => router.push(item.path)}
                                            className="group relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 cursor-pointer hover:scale-[1.03] transition-all duration-300 hover:border-[#f4a311]"

                                        >
                                            {/* glow effect */}
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[#f4a311]/10 blur-xl rounded-2xl"/>

                                            <div className="relative z-10 flex flex-col items-center gap-3 text-white">
                                                <Icon
                                                    className="w-12 h-12 text-white group-hover:text-[#f4a311] transition"/>

                                                <p className="font-semibold text-sm">
                                                    {item.label}
                                                </p>

                                                <span className="text-xs text-white/50">
                                ⋮
                            </span>
                                            </div>
                                        </div>
                                    );
                                })}

                            </div>
                            {/* FOOTER */}
                            <div className="text-center text-white/60 text-xs mt-6 flex-shrink-0 mb-12">
                                Année 2026 • CCF Workspace
                            </div>

                        </div>


                    </main>
                    {/* FOOTER */}
                    {/*<div className="text-center text-white/60 text-xs mt-10">*/}
                    {/*    Année 2026 • CCF Workspace*/}
                    {/*</div>*/}

                </main>
            </div>
        </div>
    );
}