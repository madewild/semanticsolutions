import React from "react";

export default function Header() {
  return (
    <header className="p-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Semantic Solutions</h1>
      <nav className="space-x-6">
        <a href="#/" className="hover:underline">Accueil</a>
        <a href="#/services" className="hover:underline">Services</a>
        <a href="#/a-propos" className="hover:underline">À propos</a>
        <a href="#/contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}
