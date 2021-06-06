import React from 'react'
import ContactUsForm from "../../components/ContactUs/ContactUsForm"
import './Contact.css'

import Heading from '../../components/Heading/Heading'
import ContactInfo from '../../components/ContactUs/ContactInfo'

function Contact() {
    return (
        <>
            <Heading title="CONTACT US" activeName="Contact Us" />
            <div className="Contact">
                
                <ContactInfo />
                <ContactUsForm />
            </div>

        </>
    )
}

export default Contact
