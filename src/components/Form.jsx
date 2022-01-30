import React from 'react';
import { Button } from './Button';
import "./Form.css"

const Form = () => {
  return (
    <div>
    <form className='form'>
       <input className='text_input' placeholder='Name' />
       <input className='text_input' placeholder='Phone number' />
       <input className='text_input' placeholder='Email address' />
       <textarea className='textarea' placeholder='Message'></textarea>
       <div className='button'>
       <Button className='btns' buttonStyle='btn--dark_outline' buttonSize='btn--large' >SEND</Button>
       </div>
    </form>
</div>
  );
};

export default Form;
