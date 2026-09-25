import '../css/Hero.css'
import Container from 'react-bootstrap/esm/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

const Hero = ({ nombre, profesion }) => {
  return (
    <div className="hero-section" id="inicio">
       <Container>
        <Row className="align-items-center g-4">
          <Col md={6}>
            <p>Hola! Bienvenido a mi portfolio!</p>
            <h1>
              Mi nombre es {nombre} y actualmente soy {profesion}
            </h1>
       <div className="botones-hero">
          <Nav.Link className='btn btn-outline-light' href="#inicio">
            Inicio
          </Nav.Link>
          <Nav.Link className='btn btn-outline-light' href="#contacto">
            Contactar
          </Nav.Link>
       </div>
          </Col>

          <Col md={6} className="text-center">
            <img
              src="/foto.jpeg"
              alt="Imagen de perfil"
              className="img-fluid hero-foto"
            />
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Hero
