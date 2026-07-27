"use client";

import React, {useEffect, useState} from "react";
import axios from "axios";

import {FiSearch, FiUpload, FiEye, FiTrash2, FiFileText, FiEdit2} from "react-icons/fi";
import {AnimatePresence, motion} from "framer-motion";

export default function page(){


    const [openForm, setOpenForm] = useState(false);


    const [docs,setDocs] = useState([]);
    const [documentUrl,setDocumentUrl] = useState("");
    const [selectedDoc,setSelectedDoc] = useState("");



    const [documents,setDocuments] = useState([]);

    const [search,setSearch] = useState("");
    const [type,setType] = useState("");

    const [titre,setTitre] = useState("");
    const [contenu,setContenu] = useState("");
    const [categorie,setCategorie] = useState("loi");

    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const [selectedDocument, setSelectedDocument] = useState(null);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const docsUrl = process.env.NEXT_PUBLIC_DOC_URL;




    useEffect(() => {

        axios
            .get(`${docsUrl}/Recupere_document/Documents.php`)
            .then(res => {

                setDocs(
                    res.data.files || []
                );

            })

    }, []);


    useEffect(()=>{

        loadDocuments();

    },[]);



    const loadDocuments = async()=>{
        const res =
            await axios.get(
                `${apiUrl}/textes/getallTextes.php`
            );
        setDocuments(
            res.data.data || []
        );

    };




    // const getData = async () => {
    //     try {
    //         // Remplacez l'URL par la bonne URL de votre API
    //         const response = await axios.get(`${apiUrl}/actu/get_allPoste.php`);
    //         // console.log(response.data && response.data.recu && response.data.recu.length > 0)
    //         if (response.data && response.data.recu && response.data.recu.length > 0) {
    //             // Vérifiez que la réponse contient les données attendues
    //             console.log("la jointure",response.data.recu)
    //             setFilteredData(response.data.recu)
    //             SetNumber(response.data.recu.length)
    //             SetLoading2(true)
    //         } else {
    //             console.log("La réponse de l'API est incorrecte ou ne contient pas de données.",response);
    //         }
    //     } catch (error) {
    //         console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
    //     }
    // };
    // useEffect(() => {
    //     getData()
    //     //  console.log("ddd",MyId)
    // }, []);




    const ajouterDocument = async()=>{
        // console.log(documentUrl)
        // return
        //
        if(!contenu || !categorie|| !documentUrl)
            return;
        const formData = new FormData();
        formData.append("titre", titre);
        formData.append("contenu", contenu);
        formData.append("type", categorie);
        formData.append("url", documentUrl);
       const res= await axios.post(
            `${apiUrl}/textes/createNewTextes.php`,
            formData);
        if(res.data.success){
            setTitre("");
            setContenu("");
            setCategorie("");
            setDocumentUrl("");
            await   loadDocuments();
            setOpenForm(false)
          //  setFile(null);
        }};





    const supprimer = async (id) => {
        const formData = new FormData();
        formData.append("id", id);
        await axios.post(
            `${apiUrl}/textes/deleteTextes.php`,
            formData
        );

        loadDocuments();
    };




    const filtered =
        documents.filter(doc=>{
            const name =
                doc.titre
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );
            const cat =
                type
                    ?
                    doc.type===type
                    :
                    true;
            return name && cat;
        });







    return (

        <div className="min-h-screen relative bg-[#17354d]/10 overflow-hidden">

            {/* BLOBS BACKGROUND */}
            <div
                className="absolute w-[600px] h-[600px] bg-[#f4a311] opacity-30 blur-3xl rounded-full top-[-200px] left-[-200px]"/>
            <div
                className="absolute w-[500px] h-[500px] bg-blue-500 opacity-40 blur-3xl rounded-full bottom-[-200px] right-[-200px]"/>


            {/* HEADER */}

            <div
                className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-7 flex justify-between items-center m-4"
            >

                <div>

                    <h1 className="text-3xl font-semibold text-black">

                        Textes officiels

                    </h1>


                    <p className="text-black text-sm mt-2">
                        Lois, constitutions, codes et stratégies nationales
                    </p>

                </div>


                <div className="flex items-center gap-4">

                    {/* Bouton Ajouter */}
                    <button
                        onClick={() => setOpenForm(true)}
                        className="bg-sky-600 text-sm text-white cursor-pointer rounded-2xl px-6 py-2 font-xs  flex items-center gap-2 hover:scale-105 transition">
                        {/*<FiUpload/>*/}
                        Ajouter
                    </button>


                    {/* Compteur documents */}
                    <div
                        className="bg-white/10 text-sm backdrop-blur-xl border border-white/10 text-black px-6 py-3 rounded-2xl font-bold ">
                        {documents.length} Textes
                    </div>

                </div>


            </div>


            {/* FILTRE */}


            <div className="flex gap-4 m-4">
                <div className="relative flex-1">
                    <FiSearch
                        className="absolute left-4 top-4 text-black"
                    />
                    <input
                        placeholder="Rechercher par titre"
                        value={search}
                        onChange={
                            e => setSearch(e.target.value)
                        }

                        className="w-full bg-white/10 border border-black rounded-2xl py-3 pl-12 text-sm text-black"
                    />
                </div>

                <select

                    value={type}
                    onChange={
                        e => setType(e.target.value)
                    }

                    className="bg-white/10 text-sm border border-black rounded-2xl px-5 text-black"
                >
                    <option value="">Tous</option>
                    <option value="loi">Loi</option>
                    <option value="constitution">Constitution</option>
                    <option value="code">Code</option>
                    <option value="strategie">Stratégie</option>
                </select>


            </div>


            {/* LISTE */}


            <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {filtered.map((doc) => {

                        const icon =
                            doc.type === "loi"
                                ? "⚖️"
                                : doc.type === "constitution"
                                    ? "🏛️"
                                    : doc.type === "code"
                                        ? "💼"
                                        : "❤️";

                        return (

                            <motion.div
                                key={doc.id}
                                whileHover={{
                                    scale: 1.03,
                                    y: -5
                                }}
                                transition={{duration: 0.2}}
                                onClick={() => window.open(doc.url, "_blank")}
                                className=" bg-gray-50 hover:bg-white hover:shadow-xl  rounded-2xl p-4 m-4 cursor-pointer group transition-all duration-300 border border-gray-100">

                                {/* Icône */}
                                <div className="text-4xl mb-4">
                                    {icon}
                                </div>
                                {/* Type */}


                                {/* Titre */}
                                <h3 className="text-[#17354d] font-bold text-base group-hover:text-[#e67e22] transition">
                                    {doc.type}

                                </h3>


                                <p className="text-gray-500 text-sm mt-2 capitalize">
                                    {doc.titre}
                                </p>

                                {/* Date si elle existe */}
                                {doc.created_at && (
                                    <div className="mt-2 text-xs text-gray-400">
                                        {new Date(doc.created_at).toLocaleDateString("fr-FR")}
                                    </div>
                                )}

                                {/* Actions */}
                                <div className="flex justify-between items-center mt-6">

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(doc.url, "_blank");
                                        }}
                                        className="flex items-center gap-2 text-[#e67e22] hover:text-[#c0392b] transition"
                                    >
                                        <FiEye size={18}/>
                                        <span className="text-sm font-medium">Ouvrir</span>
                                    </button>

                                    <div className="flex gap-3">

                                        {/* Modifier */}
                                        <button
                                            onClick={(e) => {

                                                e.stopPropagation();

                                                setSelectedDocument(doc);

                                                setTitre(doc.titre);
                                                setContenu(doc.contenu);
                                                setCategorie(doc.type);
                                                setDocumentUrl(doc.url);

                                                setOpenEdit(true);

                                            }}
                                            className="text-blue-500 hover:text-blue-700 transition"
                                        >
                                            <FiEdit2 size={18}/>
                                        </button>

                                        {/* Supprimer */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedDocument(doc);
                                                setOpenDelete(true);
                                            }}
                                            className="text-red-500 hover:text-red-700 transition"
                                        >
                                            <FiTrash2 size={18}/>
                                        </button>

                                    </div>

                                </div>
                            </motion.div>

                        );

                    })}

                </div>
            </div>

            <AnimatePresence>

                {
                    openForm &&

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
                        <div
                            className="bg-white  rounded-3xl p-8 w-[500px]">
                            <h2 className="text-black text-2xl font-semibold mb-6">
                                Ajouter un texte officiel
                            </h2>

                            <div className="flex flex-col gap-4">
                                <input
                                    value={titre}
                                    onChange={
                                        e => setTitre(e.target.value)
                                    }
                                    placeholder="Titre du document"
                                    className="bg-white/10 border border-black rounded-xl px-4 py-3 text-black text-sm"/>

                                <select
                                    value={categorie}
                                    onChange={
                                        e => setCategorie(e.target.value)
                                    }
                                    className="bg-white/10 border border-black rounded-xl px-4 py-3 text-black text-sm">
                                    <option className="text-black">loi</option>
                                    <option className="text-black">constitution</option>
                                    <option className="text-black">code</option>
                                    <option className="text-black">strategie</option>

                                </select>

                                <textarea
                                    value={contenu}
                                    onChange={
                                        e => setContenu(e.target.value)
                                    }
                                    placeholder="Contenu"
                                    className="bg-white/10 border border-black rounded-xl px-4 py-3 text-black h-32 text-sm"/>
                                <select
                                    value={selectedDoc}
                                    onChange={(e) => {
                                        const fileName = e.target.value;
                                        setSelectedDoc(fileName);
                                        const url =
                                            `${docsUrl}/Recupere_document/documents/${fileName}`;
                                        setDocumentUrl(url);
                                    }}
                                    className=" bg-white/10 border border-black rounded-xl px-4 py-3 text-black">

                                    <option value="" className="text-black">
                                        Sélectionner un document
                                    </option>
                                    {docs.map((doc, index) => (
                                        <option
                                            key={index}
                                            value={doc}
                                            className="text-black text-sm">
                                            {doc}
                                        </option>
                                    ))}
                                </select>
                                <div className="flex gap-3 mt-5">
                                    <button
                                        onClick={() => {
                                            ajouterDocument()
                                        }}
                                        className="bg-sky-600 px-6 py-3 rounded-xl font-sm text-white cursor-pointer  hover:scale-105 transition">
                                        Enregistrer
                                    </button>
                                    <button
                                        onClick={() => setOpenForm(false)}
                                        className="bg-red-500 text-white px-6 py-3 rounded-xl cursor-pointer hover:scale-105 transition">
                                        Annuler
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence>

                {openEdit && (

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
                    >

                        <div  className="bg-white  rounded-3xl p-8 w-[500px]">

                            <h2 className="text-black text-2xl font-bold mb-6">
                                Modifier le texte officiel
                            </h2>

                            <div className="flex flex-col gap-4">

                                <input
                                    value={titre}
                                    onChange={(e) => setTitre(e.target.value)}
                                    placeholder="Titre"
                                    className="bg-white/10 border border-black  rounded-xl px-4 py-3 text-black text-sm"
                                />

                                <select
                                    value={categorie}
                                    onChange={(e) => setCategorie(e.target.value)}
                                    className="bg-white/10 border border-black  rounded-xl px-4 py-3 text-black text-sm"
                                >

                                    <option className="text-black">loi</option>
                                    <option className="text-black">constitution</option>
                                    <option className="text-black">code</option>
                                    <option className="text-black">strategie</option>

                                </select>

                                <textarea
                                    value={contenu}
                                    onChange={(e) => setContenu(e.target.value)}
                                    className="bg-white/10 border border-black  rounded-xl px-4 py-3 text-black h-32 text-sm"
                                />

                                <select
                                    value={documentUrl}
                                    onChange={(e) => setDocumentUrl(e.target.value)}
                                    className="bg-white/10 border border-black  rounded-xl px-4 py-3 text-black text-sm">
                                    {docs.map((doc, index) => (
                                        <option
                                            key={index}
                                            value={`${docsUrl}/Recupere_document/documents/${doc}`}
                                            className="text-black">
                                            {doc}
                                        </option>
                                    ))}

                                </select>

                                <div className="flex justify-end gap-3 mt-5">

                                    <button
                                        onClick={() => setOpenEdit(false)}
                                        className="bg-red-500 text-white px-6 py-3 rounded-xl cursor-pointer hover:scale-105 transition">
                                        Annuler
                                    </button>

                                    <button
                                        onClick={async () => {
                                            const formData = new FormData();
                                            formData.append("id", selectedDocument.id);
                                            formData.append("titre", titre);
                                            formData.append("contenu", contenu);
                                            formData.append("type", categorie);
                                            formData.append("url", documentUrl);
                                            await axios.post(
                                                `${apiUrl}/textes/updateTextes.php`,
                                                formData
                                            );
                                            setOpenEdit(false);
                                            loadDocuments();
                                        }}
                                        className="bg-sky-600 px-6 py-3 rounded-xl font-sm text-white cursor-pointer  hover:scale-105 transition"
                                    >
                                        Enregistrer
                                    </button>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

            <AnimatePresence>
                {openDelete && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
                        <div className="bg-white rounded-3xl p-8 w-[420px]">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Supprimer ?
                            </h2>
                            <p className="text-gray-500 mt-3">
                                Voulez-vous vraiment supprimer ce texte officiel ?
                                Cette action est irréversible.
                            </p>
                            <div className="flex justify-end gap-3 mt-8">
                                <button
                                    onClick={() => setOpenDelete(false)}
                                    className="px-5 py-3 rounded-xl bg-gray-200">
                                    Annuler

                                </button>

                                <button

                                    onClick={async () => {
                                        await supprimer(selectedDocument.id);
                                        setOpenDelete(false);
                                    }}
                                    className="px-5 py-3 rounded-xl bg-red-500 text-black">
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>

        </div>

    )

}