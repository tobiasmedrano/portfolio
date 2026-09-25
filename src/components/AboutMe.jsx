import '../css/AboutMe.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function AboutMe({ profesion, edad, ciudad, linkedin, github, correo }) {
  return (
    <section id="sobreMi" className="aboutme">
      <Container>
        <div className="about-card">
          <h2 className="about-titulo">Sobre mí</h2>

          <p className="about-texto">
            Soy un {profesion.toLowerCase()} de {edad} años viviendo en la
            ciudad de {ciudad}, apasionado por la creación de experiencias
            digitales atractivas y funcionales. Me especializo en el desarrollo
            front-end, utilizando tecnologías modernas para construir
            interfaces de usuario intuitivas y receptivas. Siempre estoy
            buscando aprender nuevas habilidades y mejorar mis conocimientos en
            el campo del desarrollo web.
          </p>

          <p className="about-cta">
            Si quieres conocer más sobre mi trabajo, no dudes en contactarme a
            través de los enlaces de contacto disponibles.
          </p>

          <Nav className="about-iconos">
            <Nav.Link
              className="about-icono"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <CiLinkedin />
            </Nav.Link>
            <Nav.Link
              className="about-icono"
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithubSquare />
            </Nav.Link>
            <Nav.Link
              className="about-icono"
              href={`mailto:${correo}`}
              aria-label="Enviar correo"
            >
              <CgMail />
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </section>
  );
}

export default AboutMe;