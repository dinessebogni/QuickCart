'use client';
import { assets } from "@/assets/assets";
import React from 'react'
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";

const Profile = () => {
  return (
    <>
      <Navbar />
        <div className="min-h-screen bg-gray-50 p-6">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/user-placeholder.png" // Remplace par un vrai fichier ou un lien externe
                  alt="Profil"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-xl font-semibold">Jean Dupont</h2>
                  <p className="text-gray-600">jean.dupont@email.com</p>
                  <p className="text-gray-600">+237 6 XX XX XX XX</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Modifier le profil</button>
            </div>
    
            {/* Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              
              {/* Informations personnelles */}
              <Section title="Informations personnelles">
                <Line label="Person" value="jdupont95" />
                <Line label="Pays" value="Cameroun" />
                <Line label="Langue" value="Français" />
              </Section>
    
              {/* Adresse de livraison */}
              <Section title="Adresse(s) de livraison">
                <p>BP 1234, Yaoundé, Cameroun</p>
                <button className="mt-2 text-sm text-blue-600 hover:underline">Ajouter une adresse</button>
              </Section>
    
              {/* Commandes récentes */}
              <Section title="Commandes récentes">
                <p>#CMD1024 – 25 juin 2025</p>
                <p>Statut : <span className="text-green-600 font-medium">Livré</span></p>
                <a href="#" className="text-blue-600 text-sm mt-2 block hover:underline">Voir toutes les commandes</a>
              </Section>
    
              {/* Moyens de paiement */}
              <Section title="Moyens de paiement">
                <p>💳 Carte banquaire</p>
                <p>📱 MTN Mobile Money</p>
                <button className="mt-2 text-sm text-blue-600 hover:underline">Ajouter un moyen de paiement</button>
              </Section>
    
              {/* Préférences */}
              <Section title="Préférences">
                {/* ✅ Email / ❌ SMS */}
                <p> Notification par : Email </p>
                <p>Thème clair</p>
                <button className="mt-2 text-sm text-blue-600 hover:underline">Modifier les préférences</button>
              </Section>
    
              {/* Aide & Assistance */}
              <Section title="Aide & Assistance">
                <p>Ticket #20240529 :</p>
                <p>Commande non reçue</p>
                <a href="/contact">  <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Donner votre avis</button> </a>
              </Section>
    
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

// Composant réutilisable
const Section = ({ title, children }) => (
  <div className="border p-4 rounded-md bg-gray-50">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {children}
  </div>
)

const Line = ({ label, value }) => (
  <p><strong>{label} :</strong> {value}</p>
)

export default Profile
