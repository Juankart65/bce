import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from "./components/school/nav";
import Home from './pages/Home';
import Filosofia from './pages/Filosofia';
import GradosOferta from './pages/GradosOferta';
import Aboutus from './pages/AboutUs';
import Justificacion from './pages/Justificacion';
import Modelo from './pages/Modelo';
import Poblacion from './pages/Poblacion';
import Propositos from './pages/Propositos';
import Curriculo from "./pages/Curriculo"
import Matricula from "./pages/Matricula"

function App() {
  return (
    <>
      <main >
        <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filosofia" element={<Filosofia />} />
            <Route path="/grados_que_ofertamos" element={<GradosOferta />} />
            <Route path="/sobre_nosotros" element={<Aboutus />} />
            <Route path="/justificacion" element={<Justificacion />} />
            <Route path="/modelo,_metodo_educativo_y_requisitos_legales" element={<Modelo />} />
            <Route path="/poblacion" element={<Poblacion />} />
            <Route path="/curriculo,_organizacion_y_perfil_docente" element={<Curriculo />} />
            <Route path="/propositos" element={<Propositos />} />
            <Route path="/matriculas_y_tarifas" element={<Matricula />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App
