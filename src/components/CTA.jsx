import React from 'react';
import { Link } from 'react-router-dom';


const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Besoin d'un alternant? <br className='sm:bloc hidden' />
        Contactez-moi par ici! </p>
        <Link to="/contact" className='btn'>Contact</Link>
    </section>
  )
}

export default CTA