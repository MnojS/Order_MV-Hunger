import React from 'react'
import "./ContactUsForm.css"
import emailjs from 'emailjs-com';

function ContactUsForm() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_0xb7pl8', "template_b9ola58", e.target,"user_lpHnhsfP5yKtYuAIRRppH")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    return (
       
            <div class="Contactcontainer">
                <form onSubmit={sendEmail}>
                    <label for="fname">Your Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="First Name"></input>
                    <label for="email">Your Email</label>
                    <input type="email" id='lname' name="email" placeholder="Email"></input>
                    <label for="subject">Message</label>
                    <textarea rows="7" cols="25" id="subject" name="subject" placeholder="Message"></textarea>        
                    <input type="submit" value="Send Message" ></input>
                </form>
            </div>
        
    )
}

export default ContactUsForm
