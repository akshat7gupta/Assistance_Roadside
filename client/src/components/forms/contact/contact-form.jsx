import './contact-form.scss';

import React from 'react';
import Label from '../label';
import Textarea from '../textarea';
import Submit from '../submit';

const ContactForm = () => (
  <div className="contact-form">
    <h1 className="contact-form-title">Contact Us</h1>
    <p className="contact-form-subtitle">
      <span className="contact-form-subtitle-line"> - </span>
      We are here to help
      <span className="contact-form-subtitle-line"> - </span>
    </p>

    <form>
      <Label className="name-label" type="text" name="name" placeholder="Name" />
      <Label type="email" name="email" placeholder="Email" />
      <Label className="phone-label" type="number" name="phone" placeholder="Phone" />
      <Label type="text" name="subject" placeholder="Subject" />
      <Textarea name="message" placeholder="Message" />
      <Submit />
    </form>
  </div>
);

export default ContactForm;
