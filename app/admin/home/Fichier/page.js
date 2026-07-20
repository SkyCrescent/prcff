"use client"

import React, {useState, useEffect} from "react"
import axios from "axios"
import {FiSearch, FiTrash2, FiDownload, FiEye, FiUpload, FiFileText} from "react-icons/fi"
import {FaFileExcel, FaFilePdf, FaFilePowerpoint, FaFileWord} from "react-icons/fa";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import MLogo from "../../../../public/network.jpeg";


//     <img src="/network.jpeg" className="w-10 h-10 rounded-full" />
export default function GED() {
    const [docs, setDocs] = useState([])
    const [search, setSearch] = useState("")
    const [extension, setExtension] = useState("")
    const [previewPdf, setPreviewPdf] = useState(null);
    const [loading, setLoading] = useState(true);
    const uploadUrl = process.env.NEXT_PUBLIC_USE_URL;
    const docsUrl = process.env.NEXT_PUBLIC_DOC_URL;
    const [selectedFile, setSelectedFile] = useState(null);
    //  const loadTimer = setTimeout(() => setLoading(false), 1500);


    const Spinner = () => (
        <div className="relative flex justify-center items-center w-full h-screen bg-gray-100">
            {/* Cercle extérieur */}
            {/*<motion.div*/}
            {/*    animate={{ rotate: 360 }}*/}
            {/*    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}*/}
            {/*    className="absolute w-24 h-24 rounded-full border-t-12 border-black border-b-12 border-transparent"*/}
            {/*/>*/}
            {/* Cercle intérieur */}
            <motion.div
                animate={{rotate: -360}}
                transition={{
                    rotate: {repeat: Infinity, duration: 1.5, ease: "linear"},
                    borderColor: {repeat: Infinity, duration: 3, ease: "easeInOut"}
                }}
                className="absolute w-48 h-48 rounded-full border-b-6 border-black"
            />
            {/* Logo */}
            <Image src={MLogo} height={100} width={100} alt="Logo" className="relative z-10"/>
        </div>
    );


    useEffect(() => {

        console.log(docsUrl)

        const loadDocuments = async () => {

            try {

                const res = await axios.get(
                    `${docsUrl}/Recupere_document/Documents.php`
                );

                console.log(res.data);

                setDocs(res.data.files || []);
                setLoading(false);

            } catch (err) {

                console.error(err);
                setLoading(false);

            }

        };

        loadDocuments();

    }, []);
    const filteredDocs = docs.filter(file => {
        const matchName = file.toLowerCase().includes(search.toLowerCase())
        const matchExt = extension ? file.endsWith(extension) : true
        return matchName && matchExt
    })
    const getIcon = (fileName) => {
        const ext = fileName.split(".").pop().toLowerCase();

        switch (ext) {
            case "pdf":
                return <FaFilePdf className="text-red-500 text-3xl"/>;
            case "doc":
            case "odt":
            case "docx":
                return <FaFileWord className="text-blue-600 text-3xl"/>;
            case "xls":
            case "xlsx":
                return <FaFileExcel className="text-green-600 text-3xl"/>;
            case "ppt":
            case "odp":
            case "pptx":
                return <FaFilePowerpoint className="text-orange-500 text-3xl"/>;
            default:
                return <FiFileText className="text-gray-500 text-3xl"/>;
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return alert("Veuillez choisir un fichier !");
        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const res = await axios.post(`${docsUrl}/Recupere_document/uploadDocuments.php`, formData, {
                headers: {"Content-Type": "multipart/form-data"},
            });

            if (res.data.success) {
                setDocs((prev) => [res.data.file, ...prev]);
                setSelectedFile(null);
            } else {
                alert("Erreur upload : " + res.data.msg);
            }
        } catch (err) {
            console.error(err);
        }
    };
    const deleteDocument = async (file) => {
        if (!confirm("Supprimer ce document ?")) return;

        try {
            await axios.post(`${docsUrl}/Recupere_document/delete.php`, {
                file,
            });
            setDocs((prev) => prev.filter((d) => d !== file));
        } catch (error) {
            console.error("Erreur suppression", error);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#17354d] to-[#0ea5a4]">

            {/* BLOBS BACKGROUND */}
            <div className="absolute w-[600px] h-[600px] bg-[#f4a311] opacity-20 blur-3xl rounded-full top-[-200px] left-[-200px]" />
            <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full bottom-[-200px] right-[-200px]" />

            {/* ===== BANNIERE ===== */}
            <div
                className=" m-8  backdrop-blur-xl border border-white/20 text-white placeholder-white/60   p-8 flex justify-between items-center">
                {/*className="w-full max-w-xl px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-white/60 outline-none focus:border-[#f4a311]"*/}


                <div>
                    <h1 className="text-white text-xl font-semibold">Gestion des documents</h1>
                    <p className="text-white text-xs mt-2 opacity-80">
                        Consultez et gérez tous les fichiers de l'entreprise : {docs.length}
                    </p>
                </div>


                {/* Actions / Upload / Filtre */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                    <div className="flex flex-col md:flex-row items-center gap-3 justify-between">
                        {/* Nombre de documents */}

                        {/* Upload */}
                        <div className="flex items-center gap-2">
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx" // ⚡ filtre uniquement documents
                                onChange={(e) => setSelectedFile(e.target.files[0])}
                                className="hidden"
                                id="uploadInput"
                            />

                            {!selectedFile ? (
                                // Bouton Ajouter
                                <label
                                    htmlFor="uploadInput"
                                    className="bg-white text-black px-4 py-2 text-xs font-[Poppins] cursor-pointer rounded-xl flex items-center gap-2 hover:scale-105 transition">
                                    <FiUpload/> Ajouter
                                </label>


                                // <button
                                //     className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-105 transition">
                                //     <FiUpload size={18} />
                                //     Ajouter un document
                                // </button>

                            ) : (
                                // Boutons Envoyer / Annuler
                                <>
                                    <button
                                        onClick={handleUpload}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition text-xs font-[Poppins] cursor-pointer"
                                    >
                                        Envoyer
                                    </button>
                                    <button
                                        onClick={() => setSelectedFile(null)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition  text-xs font-[Poppins] cursor-pointer"
                                    >
                                        Annuler
                                    </button>
                                </>
                            )}

                            {selectedFile && (
                                <p className="text-xs ml-2 truncate max-w-[200px]">
                                    {selectedFile.name}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

            </div>

            {/* ===== FILTRES ===== */}
            <div className="bg-transparent rounded-lg shadow p-4 flex gap-4">

                <div className="relative w-1/2">

                    <FiSearch
                        className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-white/60
        "
                        size={50}
                    />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="
        w-full
        py-2
        pl-12
        pr-4
        h-11
        font-[Poppins]
        rounded-2xl
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        text-white
        placeholder-white/60
        outline-none
        focus:border-[#f4a311]
        "
                        placeholder="Rechercher..."
                    />

                </div>
                <select
                    value={extension}
                    onChange={(e) => setExtension(e.target.value)}
                    // className="border rounded-lg px-4 h-11 text-black font-[Poppins] text-sm focus:outline-none focus:border-black"
                    //

                    className="w-full max-w-xl py-2 px-4 h-11  font-[Poppins]  rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-white/60 outline-none focus:border-[#f4a311]"

                >
                    <option className="text-black" value="">Toutes extensions</option>
                    <option className="text-black" value=".pdf">PDF</option>
                    <option className="text-black" value=".docx">Word</option>
                    <option className="text-black" value=".xlsx">Excel</option>
                    <option className="text-black" value=".pptx">PowerPoint</option>
                </select>

            </div>

            {/* ===== TABLEAU ===== */}
            <div className="bg-transparent rounded-lg shadow overflow-hidden flex-1 flex flex-col">


                <AnimatePresence>
                    {loading ? (
                        <Spinner key="spinner"/>
                    ) : (
                        <motion.div
                            key="dashboard-content"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.8}}
                            className="flex flex-col gap-6"
                        >

                            <div className="flex-1 overflow-y-auto p-4">

                                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5">

                                    {filteredDocs.map((file, index) => {

                                        const ext = file.split(".").pop().toLowerCase();
                                        const isPdf = ext === "pdf";

                                        return (

                                            <div
                                                key={index}
                                                className="
                    group
                    relative
                    bg-white
                    rounded-3xl
                    p-5
                    min-h-[170px]
                    flex
                    flex-col
                    items-center
                    justify-between
                    shadow-lg
                    border
                    border-gray-100
                    cursor-pointer
                    hover:scale-[1.04]
                    hover:shadow-xl
                    transition-all
                    duration-300
                    "
                                            >

                                                {/* effet hover orange */}
                                                <div
                                                    className="
                        absolute
                        inset-0
                        opacity-0
                        group-hover:opacity-100
                        rounded-3xl
                        bg-[#f4a311]/10
                        blur-xl
                        transition
                        "
                                                />


                                                {/* Icone */}
                                                <div className="relative z-10 flex items-center justify-center h-16">

                                                    {getIcon(file)}

                                                </div>


                                                {/* Nom fichier */}
                                                <p
                                                    className="
                        relative
                        z-10
                        text-xs
                        text-center
                        font-semibold
                        text-gray-800
                        truncate
                        w-full
                        mt-4
                        "
                                                >
                                                    {file}
                                                </p>


                                                {/* Actions */}
                                                <div
                                                    className="
                        relative
                        z-10
                        flex
                        gap-4
                        mt-5
                        "
                                                >

                                                    {
                                                        isPdf ? (

                                                            <button
                                                                onClick={() =>
                                                                    setPreviewPdf(
                                                                        `${docsUrl}/Recupere_document/documents/${file}`
                                                                    )
                                                                }
                                                                className="
                                    w-9
                                    h-9
                                    rounded-full
                                    bg-gray-100
                                    flex
                                    items-center
                                    justify-center
                                    text-gray-700
                                    hover:bg-[#f4a311]
                                    hover:text-black
                                    transition
                                    "
                                                            >
                                                                <FiEye size={17}/>
                                                            </button>

                                                        ) : (

                                                            <a
                                                                href={`${docsUrl}/Recupere_document/documents/${file}`}
                                                                download
                                                                className="
                                    w-9
                                    h-9
                                    rounded-full
                                    bg-gray-100
                                    flex
                                    items-center
                                    justify-center
                                    text-gray-700
                                    hover:bg-[#f4a311]
                                    hover:text-black
                                    transition
                                    "
                                                            >

                                                                <FiDownload size={17}/>

                                                            </a>

                                                        )
                                                    }


                                                    <button
                                                        onClick={() => deleteDocument(file)}
                                                        className="
                            w-9
                            h-9
                            rounded-full
                            bg-red-50
                            flex
                            items-center
                            justify-center
                            text-red-500
                            hover:bg-red-500
                            hover:text-white
                            transition
                            "
                                                    >

                                                        <FiTrash2 size={17}/>

                                                    </button>


                                                </div>


                                            </div>

                                        );

                                    })}

                                </div>

                            </div>
                        </motion.div>
                    )
                    }
                </AnimatePresence>

            </div>

            <AnimatePresence>
                {previewPdf && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
                    >
                        <div className="bg-white w-[80%] h-[90%] rounded-xl shadow-xl relative p-4">
                            <button
                                onClick={() => setPreviewPdf(null)}
                                className="absolute font-bold text-xl cursor-pointer top-3 right-3 text-red-500"
                            >
                                ✕
                            </button>

                            <iframe
                                src={previewPdf}
                                className="w-full h-full rounded-lg"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}