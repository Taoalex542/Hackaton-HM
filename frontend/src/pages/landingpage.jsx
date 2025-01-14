import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div>
      {/* Barre de navigation avec bouton Sign In */}
      <nav className="bg-gradient-to-r from-purple-800 to-purple-900 text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img
            src="/public/icon/icon.png"  
            alt="Logo"
            className="w-11 h-11"
          />
          <span className="text-xl font-bold">Harmonieplusplus</span>
        </div>

        {/* Bouton Sign In */}
        <div className="flex items-center space-x-4">
          <Button className="bg-transparent border border-white text-white hover:bg-gray-100 hover:text-black px-4">
            Sign In
          </Button>
        </div>
      </nav>

      {/* Contenu Principal */}
      <div className="w-full flex justify-center items-center min-h-screen bg-gradient-to-b from-[#1a1b29] to-[#3c1f4b] text-white">
        <div className="w-full max-w-5xl p-8">
          <Card className="bg-transparent border-none">
            <CardContent className="space-y-8 text-center">
              {/* Titre & Description */}
              <h1 className="text-5xl text-gray-300 font-extrabold tracking-tight mb-4">
                Comparez les Meilleures Mutuelles
              </h1>
              <p className="text-gray-300 text-lg max-w-xl mx-auto">
                Découvrez les meilleures offres de mutuelles adaptées à vos besoins.
              </p>

              {/* Boutons d'action */}
              <div className="flex justify-center gap-6 mt-8">
                <a href="/app" target="_blank">

                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md">
                  comparer
                
                </Button>
                </a>
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-md">
                  En savoir plus →
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
