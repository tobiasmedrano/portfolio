import '../css/Hero.css'
import Container from 'react-bootstrap/esm/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
          <button type="button" className="btn btn-outline-light link">
            Ver Proyectos
          </button>
          <button type="button" className="btn btn-outline-light link">
            Contactar
          </button>
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
