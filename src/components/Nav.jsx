import React from "react";
import { navigate } from "../router/navigate.js";

export default function Nav() {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <button onClick={() => navigate("/")}>Accueil</button>
      <button onClick={() => navigate("/services")}>Services</button>
      <button onClick={() => navigate("/about")}>À propos</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </nav>
  );
}
