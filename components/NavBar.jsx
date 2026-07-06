import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function NavBar() {

    const menu = [
        { name: "Accueil", path: "/" },
        { name: "Personnel CCF", path: "/personnal" },
        { name: "Bibliothèque numérique", path: "/bibliotheque" },
        { name: "INPAF", path: "/inpaf" },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="w-auto mx-auto flex items-center justify-between px-1 py-1">

                {/* LOGO */}
                <div className="flex items-center gap-0 flex-shrink-0">

                    <img
                        src="/WhatsApp.png"
                        alt="Logo"
                        className="w-20 h-20 object-contain"
                    />

                    <div className="font-sans leading-tight">
                        <h1 className="font-bold text-[#17354d] text-xl lg:text-lg">
                            Présidence de la République
                        </h1>

                        <p className="text-[#c63b28] font-medium text-sm">
                            Conseil Consultatif de la Femme
                        </p>
                    </div>
                </div>

                {/* MENU */}
                <nav className="hidden md:flex items-center ml-80 gap-10">

                    {menu.map((item, index) => (
                        <Link
                            key={index}
                            href={item.path}
                            className="group relative text-[#17354d] font-sans text-sm font-bold transition-colors hover:text-[#c63b28]"
                        >
                            {item.name}

                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#c63b28] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}

                </nav>

                {/* BOUTON */}
                <button className="
                    mr-3
                    bg-transparent
                    text-[#17354d]
                    border-2 border-[#17354d]
                    px-4 py-3 text-sm
                    rounded-full
                    font-semibold
                    flex items-center gap-2
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-[#17354d]
                    hover:text-white
                    shadow-[0_6px_20px_rgba(59,130,246,0.15)]
                ">
                    <UserCircleIcon className="w-5 h-5" />
                    Connexion
                </button>

            </div>
        </header>
    );
}