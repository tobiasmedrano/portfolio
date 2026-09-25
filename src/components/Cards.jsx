import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Cards({ nombre, descripcion, imagen, url }) {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <Card className="tarjeta-proyecto">
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{mostrarMas && descripcion}</Card.Text>
        <div className="d-flex gap-2">
          <Button
            className="btn-proyecto"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            Ver Proyecto
          </Button>
          <Button
            className="btn-proyecto-outline"
            onClick={() => setMostrarMas(!mostrarMas)}
          >
            {mostrarMas ? "Mostrar Menos" : "Mostrar Más"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;