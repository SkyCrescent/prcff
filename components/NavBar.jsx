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
            <div className="w-full  flex items-center px-6 py-2">

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
                <nav className="hidden md:flex items-center gap-14 ml-96">
                    {menu.map((item, index) => (
                        <Link
                            key={index}
                            href={item.path}
                            className="group relative text-[#17354d] text-sm transition hover:text-[#c63b28]"

                        >
                            {/*<div style={{ display: "flex", alignItems: "center", gap: 8, color: "#e67e22", fontWeight: 600, fontSize: 13 }}>
             */}
                            {item.name}

                            <span
                                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#c63b28] transition-all duration-300 group-hover:w-full"/>
                        </Link>
                    ))}
                </nav>

            </div>
        </header>
        // <header className="bg-white shadow-md sticky top-0 z-50">
        //     <div className="w-auto  flex items-center justify-between px-1 py-1">
        //
        //         {/* LOGO */}
        //         <div className="flex items-center gap-0 flex-shrink-0">
        //
        //             <img
        //                 src="/WhatsApp.png"
        //                 alt="Logo"
        //                 className="w-20 h-20 object-contain"
        //             />
        //
        //             <div className="font-sans leading-tight">
        //                 <h1 className="font-bold text-[#17354d] text-xs lg:text-xs">
        //                     REPUBLIQUE DU CONGO
        //                 </h1>
        //                 <p className="font-bold text-[#17354d] text-xs lg:text-xs">
        //                     PRESIDENCE DE LA REPUBLIQUE
        //                 </p>
        //
        //                 <p className="text-[#c63b28] font-medium text-sm">
        //                     CONSEIL CONSECUTIF DE LA FEMME
        //                 </p>
        //             </div>
        //         </div>
        //
        //         {/* MENU */}
        //         {/*<nav className="hidden md:flex items-center ml-6 gap-10">*/}
        //         <nav className="hidden md:flex items-center gap-10 flex-1 justify-start ml-16">
        //
        //             {menu.map((item, index) => (
        //                 <Link
        //                     key={index}
        //                     href={item.path}
        //                     className="group relative text-[#17354d] font-sans text-sm  transition-colors hover:text-[#c63b28]"
        //                 >
        //                     {item.name}
        //
        //                     <span
        //                         className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#c63b28] transition-all duration-300 group-hover:w-full"/>
        //                 </Link>
        //             ))}
        //
        //         </nav>
        //
        //         {/* BOUTON */}
        //         {/*<button className="*/}
        //         {/*    mr-3*/}
        //         {/*    bg-transparent*/}
        //         {/*    text-[#17354d]*/}
        //         {/*    border-2 border-[#17354d]*/}
        //         {/*    px-4 py-3 text-sm*/}
        //         {/*    rounded-full*/}
        //         {/*    font-semibold*/}
        //         {/*    flex items-center gap-2*/}
        //         {/*    transition-all duration-300*/}
        //         {/*    hover:-translate-y-1*/}
        //         {/*    hover:bg-[#17354d]*/}
        //         {/*    hover:text-white*/}
        //         {/*    shadow-[0_6px_20px_rgba(59,130,246,0.15)]*/}
        //         {/*">*/}
        //         {/*    <UserCircleIcon className="w-5 h-5" />*/}
        //         {/*    Connexion*/}
        //         {/*</button>*/}
        //
        //     </div>
        // </header>
        //


    );
}