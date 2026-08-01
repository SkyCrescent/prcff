import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function NavBar() {

    const menu = [
        { name: "Accueil", path: "/" },
        { name: "Personnel CCF", path: "/personnal" },
        { name: "Bibliothèque numérique", path: "/bibliotheque" },
        { name: "A Propos", path: "/about" },
        { name: "INPAF", path: "/inpaf" },
    ];

    return (

        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="relative w-full  flex items-center px-9 py-2">

                {/* LOGO */}
                <div className="flex items-center gap-0 flex-shrink-0">
                    <img
                        src="/WhatsApp.png"
                        alt="Logo"
                        className="w-20 h-20 object-contain"
                    />

                    <div className="font-sans leading-tight space-y-0">

                        {/* 1 - VERT */}
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-4 bg-green-600 rounded-full"></span>
                            <h1 className="font-bold text-[#17354d] text-xs tracking-wide">
                                REPUBLIQUE DU CONGO
                            </h1>
                        </div>

                        {/* 2 - JAUNE */}
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-4 bg-yellow-400 rounded-full"></span>
                            <p className="font-bold text-[#17354d] text-xs tracking-wide">
                                PRESIDENCE DE LA REPUBLIQUE
                            </p>
                        </div>

                        {/* 3 - ROUGE */}
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-4 bg-red-600 rounded-full"></span>
                            <p className="text-[#c63b28] font-medium text-sm tracking-wide">
                                CONSEIL CONSULTATIF DE LA FEMME
                            </p>
                        </div>

                    </div>
                </div>

                {/* MENU (ESPACÉ PROPREMENT) */}
                <nav className="relative hidden md:flex items-center justify-between w-[600px] ml-96">
                    {menu.map((item, index) => (
                        <Link
                            key={index}
                            href={item.path}
                            className="group relative text-[#17354d] text-sm transition hover:text-[#c63b28]"
                        >
                            {item.name}

                            <span
                                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#c63b28] transition-all duration-300 group-hover:w-full"/>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>


    );
}