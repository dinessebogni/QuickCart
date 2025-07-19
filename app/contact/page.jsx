'use client';
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Ici tu peux gérer l'envoi du formulaire
    alert('Message envoyé !');
  };

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between items-center">
        <form onSubmit={onSubmitHandler} className="w-full max-w-lg">
          <p className="text-2xl md:text-3xl text-gray-500 mb-10">
            Contactez <span className="font-semibold text-orange-600">nous</span>
          </p>
          <p className="text-gray-600 mb-10 text-lg">
            Une question, une réclamation ou une suggestion ?<br />
            Écrivez-nous à{' '}
            <a
              href="mailto:support@maketia.com"
              className="text-red-600 font-semibold hover:underline transition"
            >
              support@happymaket.com
            </a>.
          </p>
          <div className="space-y-4">
            <input
              className="px-4 py-3 focus:border-orange-500 transition border border-gray-400 rounded outline-none w-full text-gray-600"
              type="text"
              placeholder="Votre nom"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              className="px-4 py-3 focus:border-orange-500 transition border border-gray-400 rounded outline-none w-full text-gray-600"
              type="email"
              placeholder="Votre email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <select
              id="sujet"
              name="sujet"
              defaultValue=""
              className="px-4 py-3 focus:border-orange-500 transition border border-gray-400 rounded outline-none w-full text-gray-600"
              required
            >
              <option value="" disabled>
                Choisir un sujet
              </option>
              <option value="question">Question</option>
              <option value="reclamation">Réclamation</option>
              <option value="suggestion">Suggestion</option>
            </select>
            <textarea
              className="px-4 py-3 focus:border-orange-500 transition border border-gray-400 rounded outline-none w-full text-gray-600 resize-none"
              placeholder="Votre message..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-8 w-full bg-orange-600 text-white py-3 uppercase rounded hover:bg-orange-700 transition font-semibold"
          >
            Envoyer
          </button>
        </form>
        <div className="mt-12 md:mt-0 md:ml-16 flex-shrink-0">
          <Image
            src={assets.contact_image}
            alt="Contact illustration"
            width={500}
            height={500}
            className="rounded-x shadow-x"
          />
        </div>


      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
