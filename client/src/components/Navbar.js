import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'
import useWindowDimensions from './WindowDimension'
import {
     AiOutlineEye, AiOutlineHome,
     AiOutlineGithub, AiOutlineContainer,
     AiOutlineMail, AiOutlineLinkedin
} from "react-icons/ai";
import '../styling/navbar.scss'

const Navbar = (props) => {
     const [active, setActive] = useState('')
     const [menuOpen, setMenuOpen] = useState(false)
     const { width } = useWindowDimensions();

     const handleLinkClick = (value) => {
          setActive(value)
     }

     const isActive = (value) => {
          return value === active ? true : false
     }

     const handleMenuClick = () => {
          setMenuOpen(!menuOpen)
          if (menuOpen) console.log("menu open")
     }

     return (
          <>
               <div id="navbar-container" style={{ justifyContent: width < 560 ? "flex-end" : "center" }}>

                    <section id="main-links-container">
                         <Link id="home-nav" className="link" onClick={() => handleLinkClick('home')} to="/">
                              <AiOutlineHome color={isActive('home') ? "#08fdd8" : "#555555"} size={25} />
                         </Link>

                         <Link id="my-work-nav" className="link" onClick={() => handleLinkClick('project')} to="/projects">
                              <AiOutlineEye color={isActive('project') ? "#08fdd8" : "#555555"} size={30} />
                         </Link>

                         <Link id="contact-nav" className="link" onClick={() => handleLinkClick('contact')} to="/contact">
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

                    {width < 560 &&
                         <section id="hamburger-menu-container">
                              <HamburgerMenu
                                   isOpen={menuOpen}
                                   menuClicked={handleMenuClick}
                                   strokeWidth={3}
                                   color="#c9c9c9"
                                   height={25}
                                   width={40}
                                   animationDuration={.25}
                              />
                         </section>
                    }
               </div>
               {menuOpen &&
                    <div id="slide-menu-container">
                         <section id="slide-menu-link-container">
                              <Link className="slide-menu-link" onClick={() => handleLinkClick('home')} to="/">
                                   <AiOutlineHome color={isActive('home') ? "#08fdd8" : "#555555"} size={30} />
                              </Link>

                              <Link className="slide-menu-link" onClick={() => handleLinkClick('project')} to="/projects">
                                   <AiOutlineEye color={isActive('project') ? "#08fdd8" : "#555555"} size={30} />
                              </Link>

                              <Link className="slide-menu-link" onClick={() => handleLinkClick('contact')} to="/contact">
                                   <AiOutlineMail color={isActive('contact') ? "#08fdd8" : "#555555"} size={30} />
                              </Link>
                         </section>

                         <hr className="slide-menu-separator" />

                         <section id="slide-menu-link-container">
                              <div className="slide-menu-link">
                                   <AiOutlineGithub color={"#555555"} size={30} />
                              </div>
                              <div className="slide-menu-link">
                                   <AiOutlineContainer color={"#555555"} size={30} />
                              </div>
                              <div className="slide-menu-link">
                                   <AiOutlineLinkedin color={"#555555"} size={30} />
                              </div>
                         </section>
                    </div>
               }
          </>
     )
}

export default Navbar
