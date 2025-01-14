import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "/public/icon/logo.svg";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Logo translucide en haut à gauche */}
      <div className="absolute top-6 left-6 opacity-80">
        <img src={Logo} alt="Logo" className="w-80 h-auto" />
      </div>

      {/* Contenu Principal */}
      <div className="w-full flex justify-center items-center min-h-screen bg-gradient-to-b from-[#1a1b29] to-[#3c1f4b] text-white">
        <div className="w-full max-w-5xl p-8">
          <Card className="bg-transparent border-none">
            <CardContent className="space-y-8 text-center">
              {/* Titre & Description */}
              <h1 className="text-5xl text-gray-300 font-extrabold tracking-tight mb-4">
                Comparez les meilleures mutuelles
              </h1>
              <p className="text-gray-300 text-lg max-w-xl mx-auto">
                Découvrez les meilleures offres de mutuelles adaptées à vos besoins.
              </p>

              {/* Boutons d'action */}
              <div className="flex justify-center gap-6 mt-8">
                <a href="/app" target="_blank">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md">
                    Comparer
                  </Button>
                </a>
                <a href="/info" target="_blank">
                  <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-md">
                    En savoir plus →
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}