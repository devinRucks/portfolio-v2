import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';
import Slide from 'react-reveal/Slide';
import { useForm } from 'react-hook-form'
import { FiAlertCircle } from "react-icons/fi"
import { AiOutlineCheck } from "react-icons/ai"
import '../styling/contact.scss'

// used for Netlify Form Submission
const encode = (data) => {
     return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
}

const Contact = () => {
     const [displayFormSuccess, setFormSuccess] = useState(false)
     const [submitClicked, setSubmitClicked] = useState(false)
     const [mounted, setMount] = useState(false)
     const [showContactTitle, setContactTitle] = useState(false)
     const [showNameAndEmail, setNameAndEmail] = useState(false)
     const [showSubject, setSubject] = useState(false)
     const [showMessage, setMessage] = useState(false)
     const [showButton, setButton] = useState(false)

     const { register, handleSubmit, errors } = useForm()

     const onSubmit = (data, e) => {

          fetch("/", {
               method: "POST",
               headers: { "Content-Type": "application/x-www-form-urlencoded" },
               body: encode({ "form-name": "contact", ...data })
          })
               .then(() => {
                    setFormSuccess(true)
                    setSubmitClicked(true)
               })
               .catch(() => {
                    setFormSuccess(false)
                    setSubmitClicked(true)
               });

          e.preventDefault();
          e.target.reset()
     }

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
                              <form name="contact" netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit(onSubmit)}>
                                   <input type="hidden" name="form-name" value="contact" />
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
                                                  ref={register({ required: true })}
                                             />
                                        </Fade>
                                        {errors.email && errors.email.type === 'required' &&
                                             <section id="required-container">
                                                  <FiAlertCircle color={"#FF0000"} size={15} />
                                             </section>
                                        }
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
                                        <section id="message-container">
                                             <textarea
                                                  className="message"
                                                  name="message"
                                                  placeholder="Message"
                                                  ref={register({ required: true })}
                                             />
                                             {errors.message && errors.message.type === 'required' &&
                                                  <section id="required-container">
                                                       <FiAlertCircle color={"#FF0000"} size={15} />
                                                  </section>
                                             }
                                        </section>
                                   </Fade>


                                   <Fade left opposite when={showButton}>
                                        <section id="submit-container">
                                             <button className="form-submit" type="submit">Submit</button>

                                             {submitClicked &&
                                                  <section id="form-message-container">
                                                       {displayFormSuccess ?
                                                            <Slide bottom>
                                                                 <p className="form-message success">Message Sent!</p>
                                                                 <AiOutlineCheck color={"#08fdd8"} size={15} />
                                                            </Slide> :
                                                            <HeadShake>
                                                                 <p className="form-message error"> Error.. </p>
                                                                 <FiAlertCircle color={"#FF0000"} size={15} />
                                                            </HeadShake>
                                                       }
                                                  </section>
                                             }
                                        </section>
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