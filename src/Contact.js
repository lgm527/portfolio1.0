import React from 'react';
import emailjs from 'emailjs-com';
import './style/Contact.css';

class Contact extends React.Component {

  state = {
    from_name: '',
    from_email: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
     from_name: this.state.from_name,
     from_email: this.state.from_email,
     message: this.state.message
    };
    emailjs.send('default_service', 'contact_form', templateParams, 'user_930tGXbXZ8DTaedds14NL' )
       .then((response) => {
           console.log('SUCCESS!', response.status, response.text);

       }, (err) => {
           console.log('FAILED...', err);
      });
  }


  render(){
    return (
      <div className="contact_container">

        <form id="contact-form" onSubmit={this.handleSubmit}>
            <input type="hidden" name="contact" />
            <label>Name</label>
            <input type="text" placeholder='Name' name="from_name" id='from_name' onChange={this.handleChange} />

            <label>Email</label>
            <input type="email" placeholder='Email Address' name="from_email" id='from_email' onChange={this.handleChange} />

            <label>Message</label>
            <textarea name="message" id='message' placeholder="Hello, I'd like to contact you about..." onChange={this.handleChange} />
            <input type="submit" value="Send" />
        </form>

      </div>
    )
  }

}

export default Contact;
