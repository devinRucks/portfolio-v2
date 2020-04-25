import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
     AiOutlineEye, AiOutlineHome,
     AiOutlineGithub, AiOutlineContainer,
     AiOutlineMail, AiOutlineLinkedin
} from "react-icons/ai";
import '../styling/navbar.scss'

const Navbar = (props) => {
     const [active, setActive] = useState('')

     const handleClick = (value) => {
          setActive(value)
     }

     const isActive = (value) => {
          return value === active ? true : false
     }

     return (
          <div id="navbar-container">

               <section id="main-links-container">
                    <Link id="home-nav" className="link" onClick={() => handleClick('home')} to="/">
                         <AiOutlineHome color={isActive('home') ? "#08fdd8" : "#555555"} size={25} />
                    </Link>

                    <Link id="my-work-nav" className="link" onClick={() => handleClick('project')} to="/projects">
                         <AiOutlineEye color={isActive('project') ? "#08fdd8" : "#555555"} size={30} />
                    </Link>

                    <Link id="contact-nav" className="link" onClick={() => handleClick('contact')} to="/contact">
                         <AiOutlineMail color={isActive('contact') ? "#08fdd8" : "#555555"} size={25} />
                    </Link>
               </section>

               <section id="extra-links-container">
                    <div id="github-nav" className="extra-link">
                         <AiOutlineGithub color={"#555555"} size={18} />
                    </div>
                    <div id="resume-nav" className="extra-link">
                         <AiOutlineContainer color={"#555555"} size={18} />
                    </div>
                    <div id="linkedin-nav" className="extra-link">
                         <AiOutlineLinkedin color={"#555555"} size={18} />
                    </div>
               </section>
          </div>
     )
}

export default Navbar
