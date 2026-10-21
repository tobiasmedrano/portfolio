import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { perfil, habilidades, proyectos } from './data/datos';
import Asidebar from './components/AsideBar';
import Footer from './components/Footer';

// Importación de Páginas
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/SkillPage';
import Projects from './pages/ProjectsPage';
import Contact from './pages/ContactPage';

import './css/Header.css'; // Mantiene estilos globales y de scroll si los usas

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-layout" style={{ display: 'flex', minHeight: '100vh', background: '#0f1729' }}>
        
        {/* Menú Lateral fijo (Ocupa aprox el 30% visualmente o contenedor lateral) */}
        <Asidebar />

        {/* Área de Contenido Principal (Main - Ocupa el resto) */}
        <main className="main-content" style={{ flex: 1, marginLeft: '240px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home perfil={perfil} />} />
              <Route path="/SobreMi" element={<About perfil={perfil} />} />
              <Route path="/Habilidades" element={<Skills habilidades={habilidades} />} />
              <Route path="/Proyectos" element={<Projects proyectos={proyectos} />} />
              <Route path="/Contacto" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </main>

      </div>
    </BrowserRouter>
  );
};

export default App;