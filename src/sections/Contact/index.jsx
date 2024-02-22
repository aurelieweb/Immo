import React from "react";
import ContactForm from '../../components/ContactForm';

const sectionTitle = 'Demandez des informations sur la résidence "Lac Leman" à Thonon';

const questions = [
    {
      id: '1',
      question: "Quel typologie de logement?",
      options: ['Villa A', 'Villa B', 'Villa C'],
    },
    
    // Ajoutez d'autres questions selon les besoins du client
  ];

function Contact() {

    return (
        <section id='contact'>
            <h2>{sectionTitle}</h2>
            <p className='section-text'>
            Contactez-nous dès maintenant pour obtenir plus d'informations sur notre projet immobilier
            </p>
                < ContactForm questions={questions}/>
         </section> 
    )
}

export default Contact;