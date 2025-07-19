import { useState } from 'react';
import Image from "next/image";
import { assets} from "@/assets/assets";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const res = await fetch("https://happymarket.freelancejob.shop/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Connexion réussie !");
        window.location.href = "/";
      } else {
        alert(data.message || "Erreur de connexion. Vérifiez vos identifiants.");
      }
    } catch (error) {
  console.error("Erreur réseau complète :", error);
  alert("Erreur réseau : " + error.message);
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
                className="mt-2"
              />
              <p className="mt-5 sm:text-[36px] text-[24px] font-bold text-[#525252]"> 
                Connecter Vous!
              </p>
              <p className="mt-1 text-normal font-normal text-[#525252]"> 
                a votre compte pour en profiter
              </p>
              <div className="mt-7 w-full py-[10px] border border-[#E8E8E8] rounded-md flex items-center justify-center gap-x-4">
                <Image
                  src={assets.google}
                  width={25} 
                  height={25} 
                  alt="google" 
                />
                <p className="text-[20px] font-bold text-[#525252]"> Continuer avec Google!</p>
              </div>
              <p className="mt-5 sm:text-[10px] text-[12px] font-semibold text-[#A1A1A1] flex self-center justify-self-center"> 
                --------------------ou connecter vous avec votre Email--------------------
              </p>
              <div className="w-full mt-14">
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
             <button onClick={handleLogin} className="mt-8 w-full rounded-md bg-[#7f265B] h-[50px] flex items-center justify-center text-white font-extrabold">Login</button>
             <p className="text-[18px] font-normal text-[#828282] flex self-center justify-self-center gap-x-2 mt-20">
                Vous n'avez pas de compte ?
                <span className="text-[18px] font-semibold text-[#2f265B]">Créer un compte</span>
             </p>
           </div>
        </div>
    </section>;
};

export default Login;