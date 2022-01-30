import React from 'react';
import Form from '../Form';
import "./contact.css"

function Contact() { 
  return (
    <div>
      <h1 className='contact_heading'>Contact Us</h1>
  <div className='contact'>
   <div className="ContactImage">
       <img className='img-travel' src="./images/travel.png" alt="travel illustration"/>
   </div>
  <Form/>
  </div>
  </div>);
}

export default Contact;
