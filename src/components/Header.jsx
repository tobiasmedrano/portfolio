import '../css/Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
 return (
   <Navbar bg="dark" data-bs-theme="dark" className="sidebar">
     <Container className="header-content">
       <img src="/logo.png" alt="Logo" className="logo" />

       <Nav className="header-nav">
         <Nav.Link className='link' href="#inicio">Inicio</Nav.Link>
         <Nav.Link className='link' href="#sobreMi">Sobre mí</Nav.Link>
         <Nav.Link className='link' href="#tecnologia">Tecnologías</Nav.Link>
         <Nav.Link className='link' href="#proyecto">Proyectos</Nav.Link>
         
       </Nav>
     </Container>
   </Navbar>
 )
}

export default Header
