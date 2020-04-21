import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { CSSTransition } from "react-transition-group";
import '../styling/contact.scss'

const Contact = () => {
     const [mounted, setMount] = useState(false)
     const { register, handleSubmit, errors } = useForm()
     const onSubmit = data => { console.log(data) }

     useEffect(() => {
          setMount(true)
     }, [mounted])

     return (
          <>
               <section id="contact-section">

                    <div id="contact-container">
                         <CSSTransition in={mounted} timeout={1500} classNames="contact">
                              <div className="contact-title">Contact Me</div>
                         </CSSTransition>

                         <section id="form-container">
                              {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                              <form onSubmit={handleSubmit(onSubmit)}>
                                   <section id="name-email-container">
                                        <CSSTransition in={mounted} timeout={1300} classNames="contact">
                                             <input
                                                  className="name"
                                                  name="name"
                                                  placeholder="Name"
                                                  ref={register}
                                             />
                                        </CSSTransition>
                                        <CSSTransition in={mounted} timeout={1300} classNames="contact">
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
                                        </CSSTransition>
                                   </section>
                                   <CSSTransition in={mounted} timeout={1100} classNames="contact">
                                        <input
                                             className="subject"
                                             name="subject"
                                             placeholder="Subject"
                                             ref={register}
                                        />
                                   </CSSTransition>
                                   <CSSTransition in={mounted} timeout={900} classNames="contact">
                                        <textarea
                                             className="message"
                                             name="message"
                                             placeholder="Message"
                                             ref={register({ required: true })}
                                        />
                                   </CSSTransition>

                                   {errors.exampleRequired && <span>This field is required</span>}

                                   <CSSTransition in={mounted} timeout={700} classNames="contact">
                                        <button className="form-submit" type="submit">Send</button>
                                   </CSSTransition>
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