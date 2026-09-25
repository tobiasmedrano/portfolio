import '../css/Contact.css'
import Form from 'react-bootstrap/Form'

const Contact = () => {
  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-card">
        <h3 className="contacto-titulo">Contacto</h3>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>

        <div className="text-center">
          <button type="submit" className="btn btn-outline-light link">
            Enviar
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
