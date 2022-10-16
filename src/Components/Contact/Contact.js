import React from "react";
import './Contact.css';
import{ FaArrowCircleDown, FaArrowDown, FaEnvelope, FaPhone } from 'react-icons/fa'


function Contact() {
    return (
        <div className="App" style={{ backgroundImage: "url(/images/contact.jpg)" }}>

            <h1>Contact Me</h1>
            <div className="contacct">
                <div>
                    
<span>Stay Connected <FaArrowCircleDown/></span>
<h3><FaEnvelope/> evansmogeni254@gmail.com</h3>
<h3><FaPhone/> +254728366248</h3>
<h3>Social links<FaArrowDown/></h3>




                </div>
                <div>
                    <form>
                        <label>Email</label>
                        <input
                        type="text"
                        required
                        />
                        <label>Message</label>
                        <textarea 
                        required
                        ></textarea>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
export default Contact;