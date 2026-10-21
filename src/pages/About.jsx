import { useEffect } from 'react';
import AboutMe from '../components/AboutMe';

const About = ({ perfil }) => {
  useEffect(() => {
    document.title = "Sobre mí | Portfolio";
  }, []);

  return (
    <div className="about-page">
      <AboutMe 
        nombre={perfil.nombre} 
        edad={perfil.edad} 
        ciudad={perfil.ciudad} 
        profesion={perfil.profesion} 
        correo={perfil.correo} 
        github={perfil.github} 
        linkedin={perfil.linkedin} 
      />
    </div>
  );
};

export default About;