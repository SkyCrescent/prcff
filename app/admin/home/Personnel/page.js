"use client";


import React, {useEffect, useState} from "react";
import axios from "axios";
import {motion, AnimatePresence} from "framer-motion";

import {
    FiSearch,
    FiPlus,
    FiEdit2,
    FiTrash2,
    FiUser, FiUpload
} from "react-icons/fi";




const bureaux = [
    "Cabinet de la Secrétaire Exécutive",
    "Cabinet de la Première Secrétaire",
    "Cabinet de la Deuxième Secrétaire"
];



export default function Personnel(){
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const uploadUrl = process.env.NEXT_PUBLIC_UPLOAD ;

    const [personnel,setPersonnel]=useState([]);
    const [search,setSearch]=useState("");
    const [bureau,setBureau]=useState("");
    const [openForm,setOpenForm]=useState(false);
    const [openDelete,setOpenDelete]=useState(false);
    const [selected,setSelected]=useState(null);
    const [nom,setNom]=useState("");
    const [photo,setPhoto]=useState("");
    const [poste,setPoste]=useState("");
    const [description,setDescription]=useState("");
    const [bureauForm,setBureauForm]=useState(bureaux[0]);
    const [preview, setPreview] = useState("")


    useEffect(()=>{
        loadPersonnel();
    },[]);



    const getImageSrc = (photo) => {
        if (!photo) return "/picture.png"; // fallback
        // Si déjà une URL complète
        if (photo.startsWith("http://") || photo.startsWith("https://")) {
            return photo;
        }
        // Sinon chemin relatif
        return `${uploadUrl}/${photo}`;
    };




    const loadPersonnel=async()=>{
        try {
        const res = await axios.get(

            `${apiUrl}/Personnel/getallPersonnal.php`
        );

          //  console.log(res.data.data)

        if (res.data.data  && res.data.data.length > 0){
            setPersonnel(
                res.data.data);

        }   else {
            console.log("La réponse de l'API est incorrecte ou ne contient pas de données.",res);
        }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
        }


    };




    const handleImageChange2 = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // aperçu immédiat
        setPreview(URL.createObjectURL(file));

        const allowed = ["jpg", "jpeg", "png", "webp"];
        const ext = file.name.split(".").pop().toLowerCase();

        if (!allowed.includes(ext)) {
            alert("Format non autorisé");
            return;
        }

        try {

            const formData = new FormData();
            formData.append("file", file);

            const response = await axios.post(
                `${uploadUrl}/mail/uploadImages/uploadPersonnel.php`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (!response.data.success) {
                throw new Error(response.data.msg);
            }

            // chemin enregistré en base
            setPhoto(response.data.path);

        } catch (err) {

            console.error(err);
            alert(err);

            setPreview("");

        }
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // preview immédiat
        const imageUrl = URL.createObjectURL(file);
        setPreview(imageUrl);

        const allowed = ["jpg", "jpeg", "png"];
        const ext = file.name.split(".").pop().toLowerCase();

        if (!allowed.includes(ext)) {
            console.error("Format d'image non autorisé");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await axios.post(
                `${uploadUrl}/Dossier_PHP/uploadImages/uploadPersonnel.php`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            if (!response.data.success) {
                throw new Error(response.data.msg);
            }

            const uploadedPath = response.data.path;

            setPhoto(uploadedPath);
            console.log("Image uploadée :", uploadedPath);

        } catch (err) {
            console.error("Erreur upload :", err);
            setPreview(null);
        }
    };

    const resetForm=()=>{
        setNom("");
        setPhoto("");
        setPreview("");
        setPoste("");
        setDescription("");
        setBureauForm(bureaux[0]);

    };

    const savePersonnel=async()=>{
        const formData=new FormData();
        formData.append("nom",nom);
        formData.append("photo",photo);
        formData.append("bureau",bureauForm);
        formData.append("poste",poste);
        formData.append("description",description);
        if(selected){
            formData.append(
                "id",
                selected.id
            );
            await axios.post(
                `${apiUrl}/Personnel/updatePersonnel.php`,
                formData
            );
        }else{
            await axios.post(
                `${apiUrl}/Personnel/createNewPersonnel.php`,
                formData
            );
        }
        setOpenForm(false);
        setSelected(null);
        resetForm();
        loadPersonnel();
    };


        const editPersonnel = (p) => {

            setSelected(p);

            setNom(p.nom);
            setPhoto(p.photo);
            setPreview("");

            setBureauForm(p.style);
            setPoste(p.poste);
            setDescription(p.description);

            setOpenForm(true);

        };



    const deletePersonnel=async()=>{
        const formData=new FormData();
        formData.append(
            "id",
            selected.id
        );
        await axios.post(
            `${apiUrl}/Personnel/deletePersonnel.php`,
            formData
        );
        setOpenDelete(false);
        setSelected(null);
        loadPersonnel();
    };


    const filtered=personnel.filter((p)=>{
        return (
            p.nom
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
            &&
            (
                bureau===""
                ||
                p.type ===bureau
            )
        );
    });



    // const handleImageChange = async (e) => {
    //     const file = e.target.files[0];
    //     if (!file) return;
    //
    //     // preview immédiat
    //     const imageUrl = URL.createObjectURL(file);
    //     setPreview(imageUrl);
    //
    //     const allowed = ["jpg", "jpeg", "png"];
    //     const ext = file.name.split(".").pop().toLowerCase();
    //
    //     if (!allowed.includes(ext)) {
    //         console.error("Format d'image non autorisé");
    //         return;
    //     }
    //
    //     try {
    //         const formData = new FormData();
    //         formData.append("file", file);
    //
    //         const response = await axios.post(
    //             `${uploadUrl}/Dossier_PHP/uploadImages/uploadAgents.php`,
    //             formData,
    //             {
    //                 headers: {
    //                     "Content-Type": "multipart/form-data"
    //                 }
    //             }
    //         );
    //
    //         if (!response.data.success) {
    //             throw new Error(response.data.msg);
    //         }
    //
    //         const uploadedPath = response.data.path;
    //
    //         // mise à jour du state selon mode édition ou création
    //         if (editEmployee) {
    //             setEditEmployee((prev) => ({
    //                 ...prev,
    //                 photo: uploadedPath
    //             }));
    //         } else {
    //             setNewEmployee((prev) => ({
    //                 ...prev,
    //                 photo: uploadedPath
    //             }));
    //         }
    //
    //         console.log("Image uploadée :", uploadedPath);
    //
    //     } catch (err) {
    //         console.error("Erreur upload :", err);
    //         setPreview(null);
    //     }
    // };


    return (

        <div className="min-h-screen p-8 relative bg-[#17354d]/10 overflow-hidden">

            {/* BLOBS BACKGROUND */}
            <div
                className="absolute w-[600px] h-[600px] bg-[#f4a311] opacity-30 blur-3xl rounded-full top-[-200px] left-[-200px]"/>
            <div
                className="absolute w-[500px] h-[500px] bg-blue-500 opacity-40 blur-3xl rounded-full bottom-[-200px] right-[-200px]"/>
            {/* HEADER */}

            <div className="relative flex justify-between items-center mb-8 z-10 ">
                <div>
                    <h1 className="text-black text-3xl font-bold ">Personnel</h1>
                    <p className="text-black">Gestion des membres de l'équipe</p>
                </div>
                <button
                    onClick={() => setOpenForm(true)}
                    className="bg-sky-500 text-white px-5 py-3 text-base  cursor-pointer rounded-xl flex items-center gap-2 hover:scale-105 transition">
                    <FiPlus/>
                    Ajouter
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
                <select
                    value={bureau}
                    onChange={e => setBureau(e.target.value)}
                    className="bg-white/10 border border-black rounded-2xl px-5 text-black">
                    <option value="">
                        Tous les bureaux
                    </option>
                    {
                        bureaux.map(b => (
                            <option
                                key={b}
                                value={b}
                                className="text-black">
                                {b}
                            </option>
                        ))}
                </select>
            </div>
            {/* CARTES */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <table className="w-full">
                    <thead className="bg-[#17354d] text-white">
                    <tr>
                        <th className="px-6 py-4 text-left">Personnel</th>
                        <th className="px-6 py-4 text-left">Type de poste</th>
                        <th className="px-6 py-4 text-left">Poste</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="bg-transparent">
                    {
                        filtered.map((p) => (
                            <tr
                                key={p.id}
                                className="border-b last:border-b-0 hover:bg-slate-50 transition">
                                {/* Photo + Nom */}
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        {
                                            p.photo ?
                                                <img
                                                    src={getImageSrc(p.photo)}
                                                    className="w-14 h-14 rounded-full object-cover border"
                                                    alt={p.nom}
                                                />
                                                :
                                                <div
                                                    className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center">
                                                    <FiUser
                                                        size={24}
                                                        className="text-slate-500"/>
                                                </div>}
                                        <div>
                                            <p className="font-semibold text-slate-800">
                                                {p.nom}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                {/* Bureau */}
                                <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                            {p.type}
                        </span>
                                </td>
                                {/* Poste */}
                                <td className="px-6 py-4 font-medium text-slate-700">
                                    {p.poste}
                                </td>
                                {/* Actions */}
                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-5">
                                        <button
                                            onClick={() => editPersonnel(p)}
                                            className="text-blue-600 hover:text-blue-800 transition">
                                            <FiEdit2 size={18}/>
                                        </button>
                                        <button
                                            onClick={() => {
                                                setSelected(p);
                                                setOpenDelete(true);
                                            }}
                                            className="text-red-600 hover:text-red-800 transition">
                                            <FiTrash2 size={18}/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
                            <div className="bg-white rounded-3xl p-4 w-[550px] ">
                                <h2 className=" text-black text-xl  mb-5">{selected ? "Modifier membre" : "Ajouter membre"}
                                </h2>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col items-center gap-4 mb-2">
                                        <div className="relative group">
                                            <img
                                                src={
                                                    preview
                                                        ? preview
                                                        : photo
                                                            ? getImageSrc(photo)
                                                            : "/picture.png"}
                                                alt="Photo"
                                                className="  w-32 h-32 rounded-full object-cover border-4 border-white/20  shadow-2xl transition  duration-300 group-hover:scale-105 "
                                                onError={(e) => {
                                                    e.currentTarget.src = "/picture.png";
                                                }}/>
                                            <label
                                                className=" absolute bottom-0 right-0 w-10 h-10 rounded-full bg-[#f4a311] flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition">
                                                📷
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    className="hidden"
                                                />
                                            </label>

                                        </div>

                                        <span
                                            className="text-black text-sm">Cliquez sur l'icône pour choisir une photo</span>

                                    </div>

                                    {/*<input*/}
                                    {/*    placeholder="URL Photo"*/}
                                    {/*    value={photo}*/}
                                    {/*    onChange={e => setPhoto(e.target.value)}*/}
                                    {/*    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#f4a311] transition w-full"/>*/}

                                    <input
                                        placeholder="Nom"
                                        value={nom}
                                        onChange={e => setNom(e.target.value)}
                                        className="bg-white/10 border border-black rounded-xl px-4 py-3 text-black placeholder-black outline-none focus:border-[#f4a311] transition w-full"/>


                                    <select
                                        value={bureauForm}
                                        onChange={e => setBureauForm(e.target.value)}


                                        className="bg-white/10 border border-black rounded-xl px-4 py-3 text-black placeholder-black outline-none focus:border-[#f4a311] transition w-full">

                                        {
                                            bureaux.map(b => (

                                                <option
                                                    key={b}
                                                    value={b}
                                                    className="text-black"
                                                >
                                                    {b}
                                                </option>

                                            ))
                                        }

                                    </select>


                                    <input
                                        placeholder="Poste"
                                        value={poste}
                                        onChange={e => setPoste(e.target.value)}
                                        className="bg-white/10 border border-black rounded-xl px-4 py-3 text-black placeholder-black outline-none focus:border-[#f4a311] transition w-full"/>


                                    <textarea
                                        placeholder="Description du poste"
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                        className="bg-white/10 h-32 border border-black rounded-xl px-4 py-3 text-black placeholder-black outline-none focus:border-[#f4a311] transition w-full"/>

                                    <div className="flex justify-end gap-3">
                                        <button
                                            onClick={() => {
                                                setOpenForm(false);
                                                setSelected(null);
                                                resetForm();
                                            }}

                                            className="bg-red-600 px-6 py-3 rounded-xl font-sm text-white cursor-pointer  hover:scale-105 transition"
                                        >
                                            Annuler
                                        </button>


                                        <button
                                            onClick={savePersonnel}

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
                                    Supprimer ce membre ?
                                </h2>
                                <p className="text-center text-gray-500 mt-3">
                                    Voulez-vous vraiment supprimer
                                    <span className="font-bold text-gray-700">
                                            {" "}{selected?.nom}
                                    </span>
                                    ?
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
                                        onClick={deletePersonnel}
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