import { useEffect } from 'react';
import ContactComponent from '../components/Contact';

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contacto | Portfolio";
  }, []);

  return (
    <div className="contact-page">
      <ContactComponent />
    </div>
  );
};

export default ContactPage;