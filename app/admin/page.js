"use client";

import { useState } from "react";

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#17354d] to-[#0ea5a4] relative overflow-hidden">

            {/* BACKGROUND BLOBS */}
            <div className="absolute w-[500px] h-[500px] bg-[#f4a311] opacity-20 rounded-full blur-3xl top-[-120px] left-[-120px]" />
            <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

            {/* LOGIN CARD */}
            <div className="relative w-[420px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10">

                {/* LOGO */}
                <div className="flex flex-col items-center text-center">

                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <img src="/logo.jpeg" className="w-10 h-10" />
                    </div>

                    <h1 className="text-white text-2xl font-bold mt-4">
                        CCF Workspace
                    </h1>

                    <p className="text-white/70 text-sm mt-1">
                        Bienvenue — Connexion sécurisée
                    </p>

                </div>

                {/* FORM */}
                <div className="mt-8 space-y-4">

                    <div>
                        <label className="text-white text-sm">Username</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-[#f4a311]"
                            placeholder="Entrer votre nom"
                        />
                    </div>

                    <div>
                        <label className="text-white text-sm">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-[#f4a311]"
                            placeholder="••••••••"
                        />
                    </div>

                    <button className="w-full mt-4 bg-[#f4a311] hover:bg-[#e0960f] text-black font-bold py-3 rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.02]">
                        Login
                    </button>

                </div>

                {/* FOOTER */}
                <p className="text-center text-white/60 text-xs mt-6">
                    www.ccf.cg • Année 2026
                </p>

            </div>
        </div>
    );
}