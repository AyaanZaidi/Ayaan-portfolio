import React, { useRef, useState } from 'react'
import './contect.css'
import emailjs from '@emailjs/browser';
export default function Contect() {

    const [nameInput , setNameInput] = useState('');
    const [emailInput , setEmailInput] = useState('');
    const [messageInput , setMessageInput] = useState('');

    const [error , setError] = useState(false)



    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gxx7rcp', 'template_90hjs59', form.current, {
        publicKey: 'yQU7T_td1S115VUOE',
      })
      .then(
        () => {
            e.target.reset()
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    function addClass() {
        document.body.classList.add("sent");
    }
     
    const send = () => {

        if(nameInput.length == 0 || emailInput.length == 0 || messageInput.length == 0){
            setError(true)
        }else{
            addClass()
        }
    }
    return (
        <>
        <section className='section'>
            <div id='context' className="wrapper centered">
                <article className="letter">
                    <form onSubmit={sendEmail}ref={form}>

                    <div className="side">
                        <h1 className='contact-h1'>Contact us</h1>
                        <p>
                            <textarea onChange={e => setMessageInput(e.target.value)} name='message' placeholder="Your message"></textarea>
                        </p>
                        {error?
                        <label>Message can't be empty</label> :""}
                    </div>
                    <div className="side">
                        <p>
                            <input onChange={e => setNameInput(e.target.value)} name='name' type="text" placeholder="Your name" />
                        </p>
                        {error?
                        <label>Name can't be empty</label> :""}

                        <p>
                            <input onChange={e => setEmailInput(e.target.value)} name='email' type="email" placeholder="Your email" />
                        </p>
                        {error?
                        <label>Email can't be empty</label> :""}
                        <p>
                            <button id="sendLetter" onClick={() => send()}>Send</button>
                        </p>
                    </div>
                    </form>
                </article>
                <div className="envelope front"></div>
                <div className="envelope back"></div>
            </div>
            <p className="result-message centered">Thank you for your message</p>
        </section>
        </>
    )
}
