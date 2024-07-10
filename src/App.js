import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
// Screens
import Landing from "./screens/Landing.jsx";
import Impressum from "./components/Sections/Impressum.jsx";
import Datenschutz from "./components/Sections/Datenschutz";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Routes>
        <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}
