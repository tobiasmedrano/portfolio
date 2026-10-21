import { useEffect } from 'react';
import Hero from '../components/Hero';

const Home = ({ perfil }) => {
  useEffect(() => {
    document.title = "Home | Portfolio";
  }, []);

  return (
    <div className="home-page">
      <Hero nombre={perfil.nombre} profesion={perfil.profesion} />
    </div>
  );
};

export default Home;