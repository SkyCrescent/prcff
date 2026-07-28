"use client";


import React, {useEffect, useState} from "react";
import axios from "axios";
import {motion, AnimatePresence} from "framer-motion";

import {
    FiSearch,
    FiPlus,
    FiEdit2,
    FiTrash2,
    FiImage
} from "react-icons/fi";


export default function Actualites(){
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const uploadUrl = process.env.NEXT_PUBLIC_UPLOAD;
    const [actualites,setActualites] = useState([]);
    const [search,setSearch] = useState("");
    const [openForm,setOpenForm] = useState(false);
    const [openDelete,setOpenDelete] = useState(false);
    const [selected,setSelected] = useState(null);
    const [media,setMedia] = useState("");
    const [preview,setPreview] = useState("");
    const [titre,setTitre] = useState("");
    const [contenu,setContenu] = useState("");
    const [datePost,setDatePost] = useState("");


    useEffect(()=>{
        loadActualites();
    },[]);
    const loadActualites = async()=>{
        try{
            const res = await axios.get(
                `${apiUrl}/actualites/getallActualites.php`
            );
            if(res.data.data  && res.data.data.length > 0){
                setActualites(res.data.data);
            }
        }catch(error){
            console.log(error);
        }};



    // const loadPersonnel=async()=>{
    //         try {
    //         const res = await axios.get(
    //
    //             `${apiUrl}/Personnel/getallPersonnal.php`
    //         );
    //
    //           //  console.log(res.data.data)
    //
    //         if (res.data.data  && res.data.data.length > 0){
    //             setPersonnel(
    //                 res.data.data);
    //
    //         }   else {
    //             console.log("La réponse de l'API est incorrecte ou ne contient pas de données.",res);
    //         }
    //         } catch (error) {
    //             console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
    //         }
    //
    //
    //     };

    const getImageSrc=(img)=>{
        if(!img)
            return "/picture.png";
        if(img.startsWith("http"))
            return img;
        return `${uploadUrl}/${img}`;
    };

    const handleImageChange=async(e)=>{
        const file=e.target.files[0];
        if(!file)return;
        setPreview(
            URL.createObjectURL(file)
        );

        try{
            const formData=new FormData();
            formData.append(
                "file",
                file
            );
            const res=await axios.post(
                `${uploadUrl}/Dossier_PHP/uploadImages/uploadActualite.php`,
                formData,
                {
                    headers:{
                        "Content-Type":"multipart/form-data"
                    }
                });

            if(res.data.success){
                setMedia(
                    res.data.path
                );
            }
        }catch(error){
            console.log(error);
        }
    };

    const resetForm=()=>{
        setMedia("");
        setPreview("");
        setTitre("");
        setContenu("");
        setDatePost("");
        setSelected(null);
    };

    const saveActualite=async()=>{
        const formData=new FormData();
        formData.append("media",media);
        formData.append("titre",titre);
        formData.append("contenu",contenu);
        formData.append("date_post",datePost);
        if(selected){
            formData.append(
                "id",
                selected.id
            );
            await axios.post(
                `${apiUrl}/Actualites/updateActualite.php`,
                formData
            );}
        else{
            await axios.post(
                `${apiUrl}/Actualites/createActualite.php`,
                formData
            );}
        setOpenForm(false);
        resetForm();
        loadActualites();
    };

    const editActualite=(a)=>{
        setSelected(a);
        setMedia(a.ulr_media);
        setTitre(a.titre);
        setContenu(a.contenu);
        setDatePost(a.date_post);
        setOpenForm(true);
    };

    const deleteActualite=async()=>{
        const formData=new FormData();
        formData.append(
            "id",
            selected.id
        );
        await axios.post(
            `${apiUrl}/Actualites/deleteActualite.php`,
            formData
        );

        setOpenDelete(false);
        setSelected(null);
        loadActualites();
    };

    const filtered=actualites.filter(a=>
        a.titre
            .toLowerCase()
            .includes(
                search.toLowerCase()
            ));

    return (
        <div className="min-h-screen p-8 relative bg-[#17354d]/10 overflow-hidden">

            {/* BLOBS BACKGROUND */}
            <div
                className="absolute w-[600px] h-[600px] bg-[#f4a311] opacity-30 blur-3xl rounded-full top-[-200px] left-[-200px]"/>
            <div
                className="absolute w-[500px] h-[500px] bg-blue-500 opacity-40 blur-3xl rounded-full bottom-[-200px] right-[-200px]"/>
            {/* HEADER */}


            <div className="relative z-10">
                <div className="flex justify-between mb-8">
                    <div>
                        <h1 className="text-black text-3xl font-bold">Actualités</h1>
                        <p className="text-black">
                            Gestion des publications
                        </p>
                    </div>
                    <button
                        onClick={() => setOpenForm(true)}
                        className="bg-sky-800 text-white px-3 py-1 text-sm  cursor-pointer rounded-xl flex items-center gap-2 hover:scale-105 transition">

                        <FiPlus/>
                        Nouvelle actualites
                    </button>
                </div>


                {/* FILTRES */}
                <div className="flex gap-4 mb-8">
                    <div className="relative flex-1">
                        <FiSearch className="absolute left-4 top-4 text-black "/>
                        <input
                            placeholder="Rechercher un membre"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full bg-white/10 border border-black rounded-2xl py-3 pl-12 text-black "/>
                    </div>

                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-[#17354d] text-white">
                        <tr>
                            <th className="px-6 py-4 text-left">Media</th>
                            <th className="px-6 py-4 text-left">Titre</th>
                            <th className="px-6 py-4 text-left">Date</th>
                            <th className="px-6 py-4 text-left">Contenu</th>
                            <th className="px-6 py-4">Actions</th>
                        </tr>
                        </thead>
                        <tbody className="bg-transparent">
                        {
                            filtered.map(a => (
                                <tr
                                    key={a.id}
                                    className="border-b last:border-b-0 hover:bg-slate-50 transition">
                                    <td className="px-6 py-4">
                                        <img
                                            src={getImageSrc(a.ulr_media)}
                                            className="w-16 h-16 rounded-full object-cover"/>
                                    </td>
                                    <td className=" px-6 py-4 font-bold text-[#17354d]">
                                        {a.titre}
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">
                                        {a.date_post}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 max-w-xs line-clamp-3">
                                        {a.contenu}
                                    </td>
                                    <td>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => editActualite(a)}
                                                className="text-blue-500">
                                                <FiEdit2/>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setSelected(a);
                                                    setOpenDelete(true);
                                                }}
                                                className="text-red-500">
                                                <FiTrash2/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>





            {/* POPUP FORM */}
            <AnimatePresence>

                {
                    openForm && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className="fixed inset-0 bg-black/60 backdrop-blur  flex items-center justify-center z-50 ">
                            <div className="bg-white rounded-3xl shadow-2xl w-[650px] h-[700px] overflow-hidden">

                                {/* Header */}
                                <div className="px-8 py-6 border-b bg-gradient-to-r from-sky-600 to-cyan-600">

                                    <h2 className="text-2xl font-bold text-white">
                                        {selected ? "Modifier une actualité" : "Nouvelle actualité"}
                                    </h2>


                                    <div className="flex justify-between gap-4">

                                        <p className="text-white/80 text-sm mt-1">
                                            Renseignez les informations de votre publication.
                                        </p>

                                        <div className="flex justify-between -mt-4">
                                            <button
                                                onClick={() => {
                                                    setOpenForm(false);
                                                    setSelected(null);
                                                    resetForm();
                                                }}
                                                className=" px-6 py-3 rounded-xl text-gray-700 hover:bg-gray-300 transition font-semibold ">
                                                Annuler
                                            </button>

                                            <button
                                                onClick={saveActualite}
                                                className=" px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-base shadow-lg hover:scale-105 transition">
                                                {selected ? "Mettre à jour" : "Publier"}
                                            </button>

                                        </div>

                                    </div>

                                </div>

                                <div className="p-8">

                                    {/* Image */}

                                    <div className="flex flex-col items-center mb-8">

                                        <div className="relative group">

                                            <img
                                                src={
                                                    preview
                                                        ? preview
                                                        : media
                                                            ? getImageSrc(media)
                                                            : "/picture.png"
                                                }
                                                className="w-40 h-40 rounded-full object-cover border-4 border-slate-200 shadow-xl"
                                                onError={(e) => {
                                                    e.currentTarget.src = "/picture.png";
                                                }}/>

                                            <label
                                                className=" absolute bottom-2 right-2 w-11 h-11 rounded-full bg-[#f4a311] text-white flex  items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition">
                                                📷
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    className="hidden"
                                                />
                                            </label>
                                        </div>

                                        <p className="text-gray-500 text-sm mt-4">
                                            Cliquez sur l'icône pour sélectionner une image
                                        </p>

                                    </div>


                                    {/* Date + Titre */}

                                    <div className="grid grid-cols-2 gap-5 mb-5">
                                        <div>

                                            <label className="text-gray-700 text-sm font-semibold mb-2 block">
                                                Date de publication
                                            </label>
                                            <input
                                                type="date"
                                                value={datePost}
                                                onChange={(e) => setDatePost(e.target.value)}
                                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"/>
                                        </div>
                                        <div>

                                            <label className="text-gray-700 text-sm font-semibold mb-2 block">
                                                Titre
                                            </label>

                                            <input
                                                placeholder="Titre de l'actualité"
                                                value={titre}
                                                onChange={(e) => setTitre(e.target.value)}
                                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"/>
                                        </div>
                                    </div>
                                    {/* Contenu */}

                                    <div>
                                        <label className="text-gray-700 text-sm font-semibold mb-2 block">
                                            Contenu
                                        </label>

                                        <textarea
                                            placeholder="Décrivez votre actualité..."
                                            value={contenu}
                                            onChange={(e) => setContenu(e.target.value)}
                                            className=" w-full h-44 resize-none border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 "/>

                                    </div>
                                    {/* Boutons */}
                                </div>
                            </div>
                        </motion.div>
                    )}

            </AnimatePresence>



            <AnimatePresence>
                {
                    openDelete && (
                        <motion.div
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            exit={{opacity:0}}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
                            <motion.div
                                initial={{scale:0.8,y:50}}
                                animate={{scale:1,y:0}}
                                exit={{scale:0.8,y:50}}
                                className="bg-white rounded-3xl p-8 w-[400px] shadow-2xl ">
                                <div className="flex justify-center mb-5">

                                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                                        <FiTrash2
                                            size={30}
                                            className="text-red-500"
                                        />
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold text-center text-[#17354d] ">
                                    Supprimer cette actualites ?
                                </h2>
                                <p className="text-center text-gray-500 mt-3">
                                    Voulez-vous vraiment retirer cette actualites?
                                </p>
                                <div className="flex justify-center gap-4 mt-8">
                                    <button
                                        onClick={()=>{
                                            setOpenDelete(false);
                                            setSelected(null);
                                        }}
                                        className="px-6 py-3 rounded-xl bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition">
                                        Annuler
                                    </button>
                                    <button
                                        onClick={deleteActualite}
                                        className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition">
                                        Supprimer
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
            </AnimatePresence>



        </div>
    )

}