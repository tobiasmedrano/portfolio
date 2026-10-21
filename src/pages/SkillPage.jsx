import { useEffect } from 'react';
import SkillsComponent from '../components/Skills';

const SkillPage = ({ habilidades }) => {
  useEffect(() => {
    document.title = "Habilidades | Portfolio";
  }, []);

  return (
    <div className="skills-page">
      <SkillsComponent habilidades={habilidades} />
    </div>
  );
};

export default SkillPage;