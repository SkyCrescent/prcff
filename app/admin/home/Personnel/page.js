"use client";


import {useEffect, useState} from "react";
import axios from "axios";
import {motion, AnimatePresence} from "framer-motion";

import {
    FiSearch,
    FiPlus,
    FiEdit2,
    FiTrash2,
    FiUser
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


        const res = await axios.get(

            `${apiUrl}/Personnel/getAllPersonnel.php`

        );


        setPersonnel(
            res.data.data || []
        );


    };

    const resetForm=()=>{

        setNom("");
        setPhoto("");
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


    const editPersonnel=(p)=>{


        setSelected(p);

        setNom(p.nom);

        setPhoto(p.photo);

        setBureauForm(p.bureau);

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
                p.bureau===bureau
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

        <div className="min-h-screen p-8 bg-gradient-to-br from-[#0f172a] via-[#17354d] to-[#0ea5a4]">
            {/* HEADER */}

            <div className="flex justify-between items-center mb-8 ">

                <div>
                    <h1 className="text-white text-3xl font-bold ">Personnel</h1>
                    <p className="text-white/60">Gestion des membres de l'équipe</p>
                </div>

                <button
                    onClick={()=>setOpenForm(true)}
                    className="bg-[#f4a311] px-6 py-3 rounded-2xl font-bold flex gap-2 items-center">
                    <FiPlus/>
                    Ajouter
                </button>
            </div>

            {/* FILTRES */}

            <div className="flex gap-4 mb-8">

                <div className="relative flex-1">
                    <FiSearch
                        className="absolute left-4 top-4 text-white/50 "/>
                    <input
                        placeholder="Rechercher un membre"
                        value={search}
                        onChange={
                            e=>setSearch(e.target.value)
                        }
                        className="w-full bg-white/10 border border-white/20 rounded-2xl py-3 pl-12 text-white "/>
                </div>

                <select
                    value={bureau}
                    onChange={
                        e=>setBureau(e.target.value)
                    }
                    className="bg-white/10 border border-white/20 rounded-2xl px-5 text-white">

                    <option value="">
                        Tous les bureaux
                    </option>
                    {
                        bureaux.map(b=>(
                            <option
                                key={b}
                                value={b}
                                className="text-black"
                            >
                                {b}
                            </option>
                        ))}

                </select>
            </div>
            {/* CARTES */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    filtered.map((p)=>(
                        <motion.div
                            key={p.id}
                            whileHover={{
                                scale:1.03,
                                y:-5
                            }}
                            className="bg-white rounded-3xl p-6 shadow-lg ">
                            <div className="flex justify-center mb-5">
                                {
                                    p.photo ?
                                        <img
                                            src={p.photo}
                                            className="w-28 h-28 rounded-full object-cover"/>
                                        :
                                        <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center">
                                            <FiUser size={40}/>
                                        </div>
                                }
                            </div>

                            <h2 className="text-center font-bold text-[#17354d]">
                                {p.nom}
                            </h2>

                            <p className="text-center text-[#e67e22] font-semibold text-sm mt-2">
                                {p.poste}
                            </p>
                            <p className="text-gray-500 text-xs text-center mt-3">
                                {p.bureau}
                            </p>
                            <p className="text-gray-500 text-sm mt-4 line-clamp-3">
                                {p.description}
                            </p>
                            <div className="flex justify-center gap-5 mt-6">
                                <button

                                    onClick={()=>editPersonnel(p)}
                                    className="text-blue-500">
                                    <FiEdit2/>
                                </button>

                                <button
                                    onClick={()=>{
                                        setSelected(p);
                                        setOpenDelete(true);
                                    }}

                                    className="text-red-500">
                                    <FiTrash2/>
                                </button>
                            </div>
                        </motion.div>
                    ))}
            </div>
            {/* POPUP FORM */}
            <AnimatePresence>

                {
                    openForm && (
                        <motion.div
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            exit={{opacity:0}}
                            className="fixed inset-0 bg-black/60 backdrop-blur flex items-center justify-center z-50 ">
                            <div className="bg-[#0f172a] rounded-3xl p-8 w-[550px] ">
                                <h2 className=" text-white text-2xl font-bold mb-5">{selected ? "Modifier membre" : "Ajouter membre"}
                                </h2>
                                <div className="flex flex-col gap-4">
                                    <input
                                        placeholder="Nom"
                                        value={nom}
                                        onChange={e => setNom(e.target.value)}
                                        className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#f4a311] transition w-full"/>
                                    <div className="flex flex-col gap-3">

                                        <input
                                            placeholder="URL Photo"
                                            value={photo}
                                            onChange={e => setPhoto(e.target.value)}
                                            className=" bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#f4a311] transition w-full"/>
                                        {/* Preview Photo */}
                                        <div className="w-full h-40 rounded-2xl border border-white/20 bg-white/5 flex items-center justify-center overflow-hidden">
                                            {
                                                photo ?
                                                    <img
                                                        src={photo}
                                                        alt="Aperçu"
                                                        className=" w-full h-full object-cover"
                                                        onError={(e) => {
                                                            e.currentTarget.src = "/default-user.png"
                                                        }}
                                                    />
                                                    :
                                                    <span className="text-white/40 text-sm">Aperçu de la photo</span>
                                            }
                                        </div>
                                    </div>

                                    {/*<input*/}
                                    {/*    placeholder="URL Photo"*/}
                                    {/*    value={photo}*/}
                                    {/*    onChange={e => setPhoto(e.target.value)}*/}
                                    {/*    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#f4a311] transition w-full"/>*/}


                                    <select
                                        value={bureauForm}
                                        onChange={e => setBureauForm(e.target.value)}


                                        className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#f4a311] transition w-full">

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
                                        className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#f4a311] transition w-full"/>


                                    <textarea
                                        placeholder="Description du poste"
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                        className="bg-white/10 h-32 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#f4a311] transition w-full"/>


                                    <div className="flex justify-end gap-3">


                                        <button
                                            onClick={() => setOpenForm(false)}
                                            className="
                            bg-gray-500
                            text-white
                            px-5
                            py-3
                            rounded-xl
                            "
                                        >
                                            Annuler
                                        </button>


                                        <button
                                            onClick={savePersonnel}
                                            className="
                            bg-[#f4a311]
                            px-5
                            py-3
                            rounded-xl
                            font-bold
                            "
                                        >
                                            Enregistrer
                                        </button>


                                    </div>


                                </div>


                            </div>


                        </motion.div>

                    )
                }

            </AnimatePresence>


        </div>

    )

}