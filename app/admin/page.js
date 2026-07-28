"use client";

import React, { useState } from "react";
import {useRouter} from "next/navigation";
export default function LoginPage() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handlelogin=()=>{

        if (username === "Orion" && password === "78945") {

                router.push("/admin/home");

            // Redirect to the dashboard or another page
        } else {
            return;
        }

    }

    return (


        <div className="min-h-screen relative flex items-center justify-center bg-[#17354d]/10 overflow-hidden">

            {/* BLOBS BACKGROUND */}
            <div
                className="absolute w-[600px] h-[600px] bg-[#f4a311] opacity-30 blur-3xl rounded-full top-[-200px] left-[-200px]"/>
            <div
                className="absolute w-[500px] h-[500px] bg-blue-500 opacity-40 blur-3xl rounded-full bottom-[-200px] right-[-200px]"/>

            {/* LOGIN CARD */}
            <div
                className="relative w-[420px] bg-white/10 backdrop-blur-2xl border border-sky-400 rounded-3xl shadow-2xl p-10">

                {/* LOGO */}
                <div className="flex flex-col items-center text-center">

                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <img src="/network.jpeg" className="w-14 h-14 mt-1 rounded-full" alt="ed"/>
                    </div>

                    <h1 className="text-black text-2xl font-bold mt-4">
                        CCF Workspace
                    </h1>

                    <p className="text-black text-sm mt-1">
                        Bienvenue — Connexion sécurisée
                    </p>

                </div>

                {/* FORM */}
                <div className="mt-8 space-y-4">

                    <div>
                        <label className="text-black text-sm">Username</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-sky-400 text-black placeholder-black outline-none focus:border-sky-600"
                            placeholder="Entrer votre nom"
                        />
                    </div>

                    <div>
                        <label className="text-black text-sm">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-sky-400 text-black placeholder-black outline-none focus:border-sky-600"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        onClick={handlelogin}
                        className="w-full mt-4 bg-sky-500 hover:bg-sky-600 text-white cursor-pointer py-3 rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.02]">
                        Login
                    </button>

                </div>

                {/* FOOTER */}
                <p className="text-center text-black text-xs mt-6">
                    www.ccf.cg • Année 2026
                </p>

            </div>
        </div>
    );
}