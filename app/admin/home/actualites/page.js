"use client";


import {useEffect, useState} from "react";
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
                `${apiUrl}/Actualites/getAllActualites.php`
            );
            if(res.data.success){
                setActualites(res.data.data);
            }
        }catch(error){
            console.log(error);
        }};


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
                `${uploadUrl}/mail/uploadImages/uploadActualite.php`,
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
        setMedia(a.media);
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
        <div
            className="min-h-screen p-8 relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#17354d] to-[#0f766e]">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#f4a311] opacity-20 blur-3xl rounded-full"/>
            <div className="relative z-10">
                <div className="flex justify-between mb-8">
                    <div>
                        <h1 className="text-white text-3xl font-bold">Actualités</h1>
                        <p className="text-white/60">
                            Gestion des publications
                        </p>
                    </div>
                    <button
                        onClick={()=>setOpenForm(true)}
                        className="bg-[#f4a311] px-6 py-3 rounded-2xl font-bold flex gap-2 items-center ">
                        <FiPlus/>
                        Ajouter
                    </button>
                </div>
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-[#17354d] text-white">
                        <tr>
                            <th className="px-6 py-4 text-left">
                                Media
                            </th>
                            <th className="px-6 py-4 text-left">
                                Titre
                            </th>
                            <th className="px-6 py-4 text-left">
                                Date
                            </th>
                            <th className="px-6 py-4 text-left">
                                Contenu
                            </th>
                            <th className="px-6 py-4">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            filtered.map(a=>(
                                <tr
                                    key={a.id}
                                    className="border-b hover:bg-slate-50 transition">
                                    <td className="px-6 py-4">
                                        <img
                                            src={getImageSrc(a.media)}
                                            className="w-16 h-16 rounded-2xl object-cover"/>
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
                                                onClick={()=>editActualite(a)}
                                                className="text-blue-500">
                                                <FiEdit2/>
                                            </button>
                                            <button
                                                onClick={()=>{
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
        </div>
    )

}