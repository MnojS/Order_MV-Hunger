import React from 'react'
import Heading from '../../components/Heading/Heading'
import OurServices from '../../components/OurServices/OurServices'
import './Services.css'

function Services() {
    return (
        <div>
            <Heading title="SERVICES" activeName="Services" />

            <OurServices/>
        </div>
    )
}

export default Services
