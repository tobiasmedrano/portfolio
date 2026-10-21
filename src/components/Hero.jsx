import '../css/Hero.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Hero = ({ nombre, profesion }) => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center g-4">
          <Col md={6}>
            <p>¡Hola! Bienvenido a mi portfolio.</p>
            <h1>
              Mi nombre es {nombre} y actualmente soy {profesion}
            </h1>
            <div className="botones-hero">
              <Link to="/projects" className="btn btn-hero-primary">
                Proyectos
              </Link>
              <Link to="/contact" className="btn btn-hero-secondary">
                Contactar
              </Link>
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
  );
};

export default Hero;