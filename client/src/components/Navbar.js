import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slide from 'react-reveal/Slide';
import HamburgerMenu from 'react-hamburger-menu'
import useWindowDimensions from './WindowDimension'
import {
     AiOutlineEye, AiOutlineHome,
     AiOutlineGithub, AiOutlineContainer,
     AiOutlineMail, AiOutlineLinkedin
} from "react-icons/ai";
import logo from '../media/portfolio-logo.png'
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

                    <section id="logo-container">
                         <Link onClick={() => handleLinkClick('home')} to="/">
                              <img className="logo" src={logo} alt="" />
                         </Link>
                    </section>

                    <section id="main-links-container">
                         <Link className="link" onClick={() => handleLinkClick('home')} to="/">
                              <div className="link-text">Home</div>
                              <section className="icon-container">
                                   <AiOutlineHome className="link-icon" color={isActive('home') ? "#08fdd8" : "#555555"} size={28} />
                              </section>
                         </Link>

                         <Link className="link" onClick={() => handleLinkClick('project')} to="/projects">
                              <div className="link-text">Projects</div>
                              <section className="icon-container">
                                   <AiOutlineEye className="link-icon" color={isActive('project') ? "#08fdd8" : "#555555"} size={30} />
                              </section>
                         </Link>

                         <Link className="link" onClick={() => handleLinkClick('contact')} to="/contact">
                              <div className="link-text">Contact</div>
                              <section className="icon-container">
                                   <AiOutlineMail className="link-icon" color={isActive('contact') ? "#08fdd8" : "#555555"} size={25} />
                              </section>
                         </Link>
                    </section>

                    <section id="extra-links-container">
                         <a className="extra-link" target="_blank" rel="noopener noreferrer" href="https://github.com/devinRucks">
                              <AiOutlineGithub color={"#555555"} size={18} />
                         </a>
                         <div className="extra-link">
                              <AiOutlineContainer color={"#555555"} size={18} />
                         </div>
                         <a className="extra-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/devin-rucks-264811199/">
                              <AiOutlineLinkedin color={"#555555"} size={18} />
                         </a>
                    </section>

                    {width < 560 &&
                         <section id="hamburger-container">
                              <HamburgerMenu
                                   isOpen={menuOpen}
                                   menuClicked={handleMenuClick}
                                   strokeWidth={2}
                                   color="#08fdd8"
                                   height={20}
                                   width={35}
                                   animationDuration={.25}
                              />
                         </section>
                    }
               </div>
               {(width < 560) &&
                    <Slide top when={menuOpen}>
                         <div id="slide-menu-container">
                              <section id="slide-menu-link-container">
                                   <Link className="slide-menu-link" onClick={() => handleLinkClick('home')} to="/">
                                        <AiOutlineHome color={isActive('home') ? "#08fdd8" : "#555555"} size={30} />
                                   </Link>

                                   <Link className="slide-menu-link" onClick={() => handleLinkClick('project')} to="/projects">
                                        <AiOutlineEye color={isActive('project') ? "#08fdd8" : "#555555"} size={35} />
                                   </Link>

                                   <Link className="slide-menu-link" onClick={() => handleLinkClick('contact')} to="/contact">
                                        <AiOutlineMail color={isActive('contact') ? "#08fdd8" : "#555555"} size={30} />
                                   </Link>
                              </section>

                              <hr className="slide-menu-separator" />

                              <section id="slide-menu-link-container">
                                   <a className="slide-menu-link" rel="noopener noreferrer" target="_blank" href="https://github.com/devinRucks">
                                        <AiOutlineGithub color={"#555555"} size={30} />
                                   </a>
                                   <div className="slide-menu-link">
                                        <AiOutlineContainer color={"#555555"} size={30} />
                                   </div>
                                   <a className="slide-menu-link" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/devin-rucks-264811199/">
                                        <AiOutlineLinkedin color={"#555555"} size={30} />
                                   </a>
                              </section>
                         </div>
                    </Slide>
               }
          </>
     )
}

export default Navbar
