import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
     AiOutlineEye, AiOutlineHome,
     AiOutlineGithub, AiOutlineContainer,
     AiOutlineMail, AiOutlineLinkedin
} from "react-icons/ai";
import '../styling/navbar.scss'

const Navbar = (props) => {
     const [active, setActive] = useState('home')
     const [hover, setHover] = useState(false)

     const handleClick = (value) => {
          setActive(value)
     }

     const isActive = (value) => {
          return value === active ? true : false
     }

     const toggleHover = () => {
          setHover(!hover)
     }

     return (
          <div id="navbar-container">
               <section
                    id="home-nav"
                    className="icon"
                    onClick={() => handleClick('home')}
               >
                    <Link to="/">
                         <AiOutlineHome color={isActive('home') ? "#08fdd8" : "#555555"} size={30} />
                    </Link>
               </section>

               <section
                    id="projects-nav"
                    className="icon"
                    onClick={() => handleClick('project')}
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
               >

                    <Link className="link" to="/projects">
                         {!hover
                              ? <AiOutlineEye color={isActive('project') ? "#08fdd8" : "#555555"} size={40} />
                              : <h2 className="icon-text">Projects</h2>
                         }
                    </Link>
               </section>

               <section id="extra-links-container">
                    <div id="github-nav" className="icon">
                         <AiOutlineGithub color={"#555555"} size={25} />
                    </div>
                    <div id="resume-nav" className="icon">
                         <AiOutlineContainer color={"#555555"} size={25} />
                    </div>
                    <div id="contact-nav" className="icon" onClick={() => handleClick('contact')}>
                         <Link to="/contact">
                              <AiOutlineMail color={isActive('contact') ? "#08fdd8" : "#555555"} size={25} />
                         </Link>
                    </div>
                    <div id="linkedin-nav" className="icon">
                         <AiOutlineLinkedin color={"#555555"} size={25} />
                    </div>
               </section>
          </div>
     )
}

export default Navbar
