import React from 'react'
import './Welcome.css'
import pizza1 from '../../assets/images/pizza1.jpg'

function Page() {
    return (
        <div className="page">
            <div>
                <img src={pizza1} alt="pizza" className="pageImage"/>
            </div>
            <div>
            <h1>WELCOME TO MV-HUNGER A RESTAURANT</h1>
            <p>On her way she met a copy. The copy warned the Little Blind Text, 
            that where it came from it would have been rewritten a thousand times 
            and everything that was left from its origin would be the word "and" 
            and the Little Blind Text should turn around and return to its own, 
            safe country. But nothing the copy said could convince her and so it 
            didn’t take long until a few insidious Copy Writers ambushed her, made 
            her drunk with Longe and Parole and dragged her into their agency, 
            where they abused her for their.</p>
            </div>
        </div>
    )
}

export default Page
