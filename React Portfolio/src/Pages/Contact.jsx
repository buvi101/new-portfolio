import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/Contact.css';
import Navbar from '../Components/Navbar';
import Hamburger from '../Components/Hamburger'
import Logo from '../Components/Logo'
import '../Styles/Logo.css'


function ContactForm() {
  const form = useRef();
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_amw473u',   
      'template_2me4gmp',   
      form.current,
      publicKey    
    ).then(
      () => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Message failed to send. Please try again later.');
        console.error(error.text);
      }
    );
  };

  return (
    <>
    <Hamburger />
    <Logo />
    <div className="contact-container">
      <Navbar />
      
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <h2>Contact Me</h2>
        <label>
          Name
          <input type="text" name="user_name" required placeholder='Enter Your Name' />
        </label>
        <label>
          Email
          <input type="email" name="user_email" required placeholder='Enter Your Email' />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required placeholder='Enter Your Message' />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </>
  );
}

export default ContactForm;
