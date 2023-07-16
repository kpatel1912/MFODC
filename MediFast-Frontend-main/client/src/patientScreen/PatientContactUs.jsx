import React from 'react'
import '../patientStyles/patientContact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const PatientContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h64bcha', 'template_ep2rzpy', form.current, 'Ukyc0VEE2f4tmkvjB')
    e.target.reset()
  };
  return (
    <section className='section'>
      <h2>Contact Us</h2>

      <h5>Get In Touch</h5>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>c0850114@mylambton.ca</h5>
            <a href="mailto:c0850114@mylambton.ca" target='_blank'>Send a message</a>
            <h5>c0850115@mylambton.ca</h5>
            <a href="mailto:c0850115@mylambton.ca" target='_blank'>Send a message</a>
            <h5>c0850064@mylambton.ca</h5>
            <a href="mailto:C0850064@mylambton.ca" target='_blank'>Send a message</a>
          
          </article>

          {/* <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Username</h5>
            <a href="https://m.me/aakash.c.4508" target='_blank'>Send a message</a>
          </article> */}

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+16478679893</h5>
            <a href="https://api.whatsapp.com/send?phone=6478679893" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default PatientContactUs