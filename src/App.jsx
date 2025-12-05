import React from "react";
import Nav from "./components/Nav.jsx";
import Router from "./components/Router.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Router />
      <Footer />
    </div>
  );
}

