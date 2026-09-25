import '../css/Skills.css'

const Skills = ({ habilidades }) => {
  return (
    <div className="habilidades-section" id="tecnologia">
  <h3 className="text-center mt-4">Habilidades</h3>
  {habilidades.map(habilidad => (
    <p key={habilidad.nombre}>
      {habilidad.nombre} <img src={habilidad.imagen} alt={habilidad.nombre} />
    </p>
  ))}
</div>
  )
}

export default Skills
