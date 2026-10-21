import { useEffect } from 'react';
import ProjectsComponent from '../components/Projects';

const ProjectsPage = ({ proyectos }) => {
  useEffect(() => {
    document.title = "Proyectos | Portfolio";
  }, []);

  return (
    <div className="projects-page">
      <ProjectsComponent proyectos={proyectos} />
    </div>
  );
};

export default ProjectsPage;