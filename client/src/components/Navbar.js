import React from 'react'
import { Link } from 'react-router-dom'
import {
     AiOutlineEye, AiOutlineHome,
     AiOutlineGithub, AiOutlineContainer,
     AiOutlineMail, AiOutlineLinkedin
} from "react-icons/ai";
import '../styling/navbar.scss'

const Navbar = (props) => {

     return (
          <div id="navbar-container">
               <section id="home-nav" className="icon">
                    <Link to="/">
                         <AiOutlineHome color={"#555555"} size={35} />
                    </Link>
               </section>
               <section id="project-nav" className="icon">
                    <Link to="/projects">
                         <AiOutlineEye color={"#555555"} size={50} />
                    </Link>
               </section>
               <section id="extra-links-container">
                    <div id="github-nav" className="icon">
                         <AiOutlineGithub color={"#555555"} size={35} />
                    </div>
                    <div id="resume-nav" className="icon">
                         <AiOutlineContainer color={"#555555"} size={35} />
                    </div>
                    <div id="contact-nav" className="icon">
                         <AiOutlineMail color={"#555555"} size={35} />
                    </div>
                    <div id="linkedin-nav" className="icon">
                         <AiOutlineLinkedin color={"#555555"} size={35} />
                    </div>
               </section>
          </div>
     )
}

export default Navbar