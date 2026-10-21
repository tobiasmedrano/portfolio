import '../css/Asidebar.css';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Asidebar = () => {
  return (
    <aside className="asidebar-container">
      <div className="asidebar-content">
        <span className="asidebar-title">Menú</span>
        <Nav className="flex-column asidebar-nav">
          <Nav.Link as={NavLink} to="/" end className="asidebar-link">
            Inicio
          </Nav.Link>
          <Nav.Link as={NavLink} to="/SobreMi" className="asidebar-link">
            Sobre mí
          </Nav.Link>
          <Nav.Link as={NavLink} to="/Habilidades" className="asidebar-link">
            Habilidades
          </Nav.Link>
          <Nav.Link as={NavLink} to="/Proyectos" className="asidebar-link">
            Proyectos
          </Nav.Link>
          <Nav.Link as={NavLink} to="/Contacto" className="asidebar-link">
            Contacto
          </Nav.Link>
        </Nav>
      </div>
    </aside>
  );
};

export default Asidebar;