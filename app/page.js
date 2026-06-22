"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
    FaFacebookF,
    FaWhatsapp,
    FaInstagram,
    FaTiktok
} from "react-icons/fa";
import { useRouter } from "next/navigation";
const positions = [
    { x: -260, y: -140 },
    { x: 260, y: -120 },
    { x: -220, y: 160 },
    { x: 220, y: 140 },
    { x: -218, y: 160 },
];

export default function IntroPage() {
    const containerRef = useRef(null);

    const [lines, setLines] = useState([]);
    const [showBar, setShowBar] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const t1 = setTimeout(() => {
            setShowBar(true);
        }, 5500);

        const t2 = setTimeout(() => {
             router.push("/home");
        }, 5900);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (!containerRef.current) return;

            const center = {
                x: containerRef.current.offsetWidth / 2,
                y: containerRef.current.offsetHeight / 2,
            };

            const newLines = positions.map((pos) => ({
                x1: center.x,
                y1: center.y,
                x2: center.x + pos.x,
                y2: center.y + pos.y,
            }));

            setLines(newLines);
        }, 50);
    }, []);

    return (
        <>



        <div
            ref={containerRef}
            className=" relative w-[100%] h-screen overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 flex items-center justify-center"
        >

            {/* LIGNES PARFAITES */}
            <svg className="absolute w-full h-full z-0">

                {lines.map((line, i) => {
                    const length = Math.sqrt(
                        Math.pow(line.x2 - line.x1, 2) +
                        Math.pow(line.y2 - line.y1, 2)
                    );

                    return (
                        <motion.line
                            key={i}
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            stroke="#cbd5e1"
                            strokeWidth="2"
                            strokeDasharray={length}
                            initial={{strokeDashoffset: length}}
                            animate={{strokeDashoffset: 0}}
                            transition={{
                                duration: 1.2,
                                delay: 2.2 + i * 0.3,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}

            </svg>

            {/* LOGO CENTRAL */}
            <motion.img
                src="/logo.jpeg"
                className="absolute z-30 w-20 h-20 rounded-full object-contain"
                initial={{opacity: 0, scale: 0.3}}
                animate={{opacity: 1, scale: 1.2}}
                transition={{duration: 1.2, ease: "easeOut"}}
            />

            {/* IMAGES CERCLES */}
            {positions.map((pos, index) => (
                <motion.div
                    key={index}
                    className="absolute z-20 p-0.5 rounded-full bg-transparent shadow-lg flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: pos.x,
                        y: pos.y,
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 2.2 + index * 0.3,
                    }}
                >
                    <img
                        src={`/images/img${index + 1}.png`}
                        className=" object-contain rounded-full"
                        width="95" height="95"
                        alt=""
                    />
                </motion.div>
            ))}
            {/* BARRE DE CHARGEMENT */}
            {showBar && (
                <motion.div
                    className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center"
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    {/* Barre */}
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-blue-600"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{
                                duration: 1.8,
                                ease: "linear",
                            }}
                        />
                    </div>

                    {/* Texte */}
                    <motion.div
                        className="mt-5 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="text-gray-700 font-semibold text-lg">
                            Conseil Consultatif de la Femme
                        </p>

                        <p className="text-gray-500 text-sm">
                            République du Congo
                        </p>
                    </motion.div>

                    {/* Réseaux sociaux */}
                    <motion.div
                        className="flex items-center gap-5 mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:scale-110 transition">
                            <FaFacebookF />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md hover:scale-110 transition">
                            <FaWhatsapp />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-md hover:scale-110 transition">
                            <FaInstagram />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md hover:scale-110 transition">
                            <FaTiktok />
                        </a>
                    </motion.div>
                </motion.div>
            )}

            {/* TEXTE */}
            {/*<motion.p*/}
            {/*    className="absolute bottom-20 text-gray-600 font-medium"*/}
            {/*    initial={{opacity: 0}}*/}
            {/*    animate={{opacity: [0, 0, 1]}}*/}
            {/*    transition={{*/}
            {/*        duration: 1,*/}
            {/*        delay: 2,*/}
            {/*    }}*/}
            {/*>*/}
            {/*    Chargement...*/}
            {/*</motion.p>*/}


            {/* IMAGE BAS DROITE */}
            <motion.img
                src="/WhatsApp.png"
                alt=""
                className="absolute bottom-2 right-2 w-60 h-60 rounded-full object-contain z-10"
                initial={{
                    opacity: 0,
                    x: 50,
                    y: 50,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 4,
                    ease: "easeOut",
                }}
            />

        </div>
            </>
    );
}