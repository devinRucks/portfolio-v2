import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import { useForm } from 'react-hook-form'
import '../styling/contact.scss'

const Contact = () => {
     const [mounted, setMount] = useState(false)
     const [showContactTitle, setContactTitle] = useState(false)
     const [showNameAndEmail, setNameAndEmail] = useState(false)
     const [showSubject, setSubject] = useState(false)
     const [showMessage, setMessage] = useState(false)
     const [showButton, setButton] = useState(false)

     const { register, handleSubmit, errors } = useForm()
     const onSubmit = data => { console.log(data) }

     useEffect(() => {
          setMount(true)
     }, [mounted])

     useEffect(() => {
          setTimeout(() => setContactTitle(true), 500)
          setTimeout(() => setNameAndEmail(true), 550)
          setTimeout(() => setSubject(true), 600)
          setTimeout(() => setMessage(true), 650)
          setTimeout(() => setButton(true), 700)
     }, [showContactTitle, showNameAndEmail, showSubject, showMessage, showButton])

     return (
          <>
               <section id="contact-section">

                    <div id="contact-container">
                         <Fade left opposite when={showContactTitle}>
                              <div className="contact-title">Contact Me</div>
                         </Fade>

                         <section id="form-container">
                              {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                              <form onSubmit={handleSubmit(onSubmit)}>
                                   <section id="name-email-container">
                                        <Fade left opposite when={showNameAndEmail}>
                                             <input
                                                  className="name"
                                                  name="name"
                                                  placeholder="Name"
                                                  ref={register}
                                             />
                                             <input
                                                  className="email"
                                                  name="email"
                                                  placeholder="Email"
                                                  ref={register({
                                                       required: 'Required',
                                                       pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                            message: "invalid email address"
                                                       }
                                                  })}
                                             />
                                        </Fade>
                                   </section>
                                   <Fade left opposite when={showSubject}>
                                        <input
                                             className="subject"
                                             name="subject"
                                             placeholder="Subject"
                                             ref={register}
                                        />
                                   </Fade>
                                   <Fade left opposite when={showMessage}>
                                        <textarea
                                             className="message"
                                             name="message"
                                             placeholder="Message"
                                             ref={register({ required: true })}
                                        />
                                   </Fade>

                                   {errors.exampleRequired && <span>This field is required</span>}

                                   <Fade left opposite when={showButton}>
                                        <button className="form-submit" type="submit">Send</button>
                                   </Fade>
                              </form>
                         </section>
                    </div>

               </section>
               <section id="empty-section">

               </section>
          </>
     )
}

export default Contact