import {
    FaFacebookF,
    FaWhatsapp,
    FaInstagram,
    FaTiktok,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#17354d] text-white pt-16 pb-10 px-8">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* COL 1 - ABOUT */}
                <div>
                    <h2 className="text-xl font-bold mb-4">
                        Conseil Consultatif de la Femme
                    </h2>

                    <p className="text-white/70 text-sm leading-relaxed">
                        Institution dédiée à la promotion des droits,
                        de l’autonomisation et de la participation des femmes
                        en République du Congo.
                    </p>

                    {/* SOCIAL */}
                    <div className="flex gap-3 mt-6">

                        <a className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#f4a311] transition">
                            <FaFacebookF />
                        </a>

                        <a className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-green-500 transition">
                            <FaWhatsapp />
                        </a>

                        <a className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-pink-500 transition">
                            <FaInstagram />
                        </a>

                        <a className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-black transition">
                            <FaTiktok />
                        </a>

                    </div>
                </div>

                {/* COL 2 - LINKS */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>

                    <ul className="space-y-3 text-white/70 text-sm">

                        <li className="hover:text-[#f4a311] cursor-pointer">Accueil</li>
                        <li className="hover:text-[#f4a311] cursor-pointer">Articles</li>
                        <li className="hover:text-[#f4a311] cursor-pointer">Activités</li>
                        <li className="hover:text-[#f4a311] cursor-pointer">Textes officiels</li>
                        <li className="hover:text-[#f4a311] cursor-pointer">Contact</li>

                    </ul>
                </div>

                {/* COL 3 - CONTACT */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>

                    <div className="space-y-4 text-white/70 text-sm">

                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-[#f4a311]" />
                            Brazzaville, République du Congo
                        </div>

                        <div className="flex items-center gap-3">
                            <FaPhone className="text-[#f4a311]" />
                            +242 06 000 0000
                        </div>

                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-[#f4a311]" />
                            contact@ccf.cg
                        </div>

                    </div>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/50 text-sm">
                © {new Date().getFullYear()} Conseil Consultatif de la Femme — République du Congo. Tous droits réservés.
            </div>

        </footer>
    );
}