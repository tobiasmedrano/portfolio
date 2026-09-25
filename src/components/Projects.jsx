import ProjectCard from "./Cards";
import "../css/Project.css";

function Projects({ proyectos }) {
  return (
    <div id="proyecto" className="proyectos-section">
      <h3 className="text-center mt-4">Proyectos</h3>
      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <ProjectCard
            key={proyecto.nombre}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            imagen={proyecto.imagen}
            url={proyecto.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;