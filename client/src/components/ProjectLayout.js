import React from 'react'
import useWindowDimensions from './WindowDimension'
import '../styling/projectLayout.scss'
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi"
import laptopImg from '../media/laptop.png'

const ProjectLayout = (props) => {
     const { width } = useWindowDimensions();

     if (!props.reversed) {
          return (
               <div id="project-layout-container">
                    <section id="showcase-container">
                         <img className="laptop" alt="" src={laptopImg}></img>
                         <div id="video-container">
                              <video autoPlay muted loop playsInline id="project-video">
                                   <source src={props.showcase} type="video/mp4" />
                                        Your browser does not support the video tag. I suggest you upgrade your browser.
                              </video>
                         </div>
                    </section>
                    <section id="info-container" style={{ alignItems: (width > 1200) ? "flex-end" : "center" }}>

                         <div className="featured-project">Featured Project</div>

                         <section className="project-header">
                              <img className="project-icon" src={props.icon} alt="Icon"></img>
                              <div className="project-title">{props.title}</div>
                         </section>

                         <section className="project-description">
                              {props.description}
                         </section>

                         <section className="techstack">
                              {props.techstack.map((el, index) => {
                                   return <div key={index} className="techstack-text">{el}</div>
                              })}
                         </section>

                         <section className="project-links">
                              <AiOutlineGithub color={"#FFFFFF"} size={25} />
                              <FiExternalLink color={"#FFFFFF"} size={25} />
                         </section>

                    </section>
               </div>
          )
     } else {
          return (
               <div id="project-layout-container">
                    <section id="info-container" style={{ alignItems: (width > 1200) ? "flex-end" : "center" }}>

                         <div className="featured-project">Featured Project</div>

                         <section className="project-header">
                              <img className="project-icon" src={props.icon} alt="Icon"></img>
                              <div className="project-title">{props.title}</div>
                         </section>

                         <section className="project-description">
                              {props.description}
                         </section>

                         <section className="techstack">
                              {props.techstack.map((el, index) => {
                                   return <div key={index} className="techstack-text">{el}</div>
                              })}
                         </section>

                         <section className="project-links">
                              <AiOutlineGithub color={"#FFFFFF"} size={25} />
                              <FiExternalLink color={"#FFFFFF"} size={25} />
                         </section>

                    </section>

                    <section id="showcase-container">
                         <img className="laptop" alt="" src={laptopImg}></img>
                         <div id="video-container">
                              <video autoPlay muted loop playsInline id="project-video">
                                   <source src={props.showcase} type="video/mp4" />
                                        Your browser does not support the video tag. I suggest you upgrade your browser.
                              </video>
                         </div>
                    </section>
               </div>
          )
     }
}

export default ProjectLayout