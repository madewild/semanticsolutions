import React, { useEffect, useState } from "react";
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";

export default function Router() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handler);

    return () => window.removeEventListener("popstate", handler);
  }, []);

  switch (path) {
    case "/":
      return <Home />;
    case "/services":
      return <Services />;
    case "/about":
      return <About />;
    case "/contact":
      return <Contact />;
    default:
      return <Home />;
  }
}
