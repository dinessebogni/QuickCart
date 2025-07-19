import { useState } from 'react';
import Image from "next/image";
import { assets} from "@/assets/assets";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Tous les champs sont obligatoires.");
      return;
    }
  
    try {
      const res = await fetch("https://happymarket.freelancejob.shop/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        alert("Inscription réussie !");
        window.location.href = "/LoginSession";
      } else {
        console.error("Erreur API :", data);
        alert(data.message || "Erreur d'inscription.");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      alert("Erreur de connexion au serveur. Détails : " + error.message);
    }
  };

    return <section className="w-full h-screen flex">

        {/* letf section */}

        <div className="w-[60%] h-full xl:flex hidden">
          <div className="w-full h-full bg-[url('/assets/images/bg.jpg')] bg-cover bg-center"></div>
        </div>

        {/* right section */}

        <div className="xl:w-[40%] w-full bg-white flex items-center justify-center overflow-y-scroll">
           <div className="sm:w-[70%] w-[90%] flex flex-col items-start">
              <Image 
                src={assets.logo2} 
                width={70} 
                height={70} 
                alt="logo" 
              />
              <p className="mt-5 sm:text-[36px] text-[24px] font-bold text-[#525252]"> 
                Inscriver Vous!
              </p>
              <p className="mt-1 text-normal font-normal text-[#525252]"> 
                avant d'en profiter de la plateforme
              </p>
               <div className="w-full mt-14">
                <label htmlFor="" className="text-normal font-normal text-[#525252]">
                    Nom 
                </label>
                <input 
                  type="text" 
                  name="nom" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Etrer votre nom" 
                  className="focus:online-none w-full border rounded-md h-[45px] border-[#b1b2b9] text-black px-[10px] placeholder:text-[12px] placeholder:text-gray "
                 />
              </div>
              <div className="w-full mt-7">
                <label htmlFor="" className="text-normal font-normal text-[#525252]">
                    Email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Etrer votre adresse email" 
                  className="focus:online-none w-full border rounded-md h-[45px] border-[#b1b2b9] text-black px-[10px] placeholder:text-[12px] placeholder:text-gray "
                 />
              </div>
              <div className="w-full mt-7">
                <label htmlFor="" className="text-normal font-normal text-[#525252]">
                    Password
                </label>
                <input 
                  type="password" 
                  name="pwd" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Etrer votre mot de passe" 
                  className="focus:online-none w-full border rounded-md h-[45px] border-[#b1b2b9] text-black px-[10px] placeholder:text-[12px] placeholder:text-gray "
                 />
              </div>
              <div className="mt-3 w-full flex items-center justify-between ">
                <div className="flex items-center justify-center gap-x-3">
                  <button className="w-[12px] h-[12px] bg-[#2f265B] rounded-[5px] flex items-cemter justify-center text-white">
                     {/* <BiCheck /> */}
                  </button>
                  <p className="text-[12px] font-normal text-[#A1A1A1]">Souvenez-vous de moi</p>
                </div>
                <p className="text-[12px] font-semibold text-[#2f265B]">Mot de passe oublié!</p>
             </div>
             <button onClick={handleRegister} className="mt-10 w-full rounded-md bg-[#7f265B] h-[50px] flex items-center justify-center text-white font-extrabold">Connexion</button>
             <p className="text-[18px] font-normal text-[#828282] flex self-center justify-self-center gap-x-2 mt-20">
                Vous avez déjà un compte ?
                <span className="text-[18px] font-semibold text-[#2f265B]"> Connecter vous !</span>
             </p>
           </div>
        </div>
    </section>;
};

export default SignUp;