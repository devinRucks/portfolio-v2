import React from 'react'
import '../styling/projectLayout.scss'
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi"

const ProjectLayout = (props) => {
     if (!props.reversed) {
          return (

               <div id="project-layout-container">
                    <section id="showcase-container">
                         <img className="image" alt="" src={props.showcase}></img>
                         <div className="image-overlay"></div>
                    </section>
                    <section id="info-container" style={{ alignItems: "flex-end" }}>
                         <div className="featured-project">Featured Project</div>
                         <div className="project-title">{props.title}</div>
                         <section className="project-description">
                              {props.description}
                         </section>
                         <section className="techstack">
                              {props.techstack.map((el) => {
                                   return <div className="techstack-text">{el}</div>
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
                    <section id="info-container" style={{ alignItems: "flex-start" }}>
                         <div className="featured-project">Featured Project</div>
                         <div className="project-title">{props.title}</div>
                         <section className="project-description">
                              {props.description}
                         </section>
                         <section className="techstack">
                              {props.techstack.map((el) => {
                                   return <div className="techstack-text">{el}</div>
                              })}
                         </section>
                         <section className="project-links">
                              <AiOutlineGithub color={"#FFFFFF"} size={25} />
                              <FiExternalLink color={"#FFFFFF"} size={25} />
                         </section>
                    </section>
                    <section id="showcase-container">
                         <img className="image" alt="" src={props.showcase}></img>
                         <div className="image-overlay"></div>
                    </section>
               </div>
          )
     }
}

export default ProjectLayout