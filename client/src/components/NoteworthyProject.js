import React from 'react'
import { AiOutlineFolderOpen, AiOutlineGithub, AiOutlineTool } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi"
import '../styling/noteworthyProject.scss'

const NoteworthyProject = (props) => {
     return (
          <div id="noteworthy-project-container">

               <section id="project-header">
                    {props.isFinished &&
                         <AiOutlineFolderOpen color={"#08fdd8"} size={50} />}

                    {!props.isFinished &&
                         <AiOutlineTool color={"#08fdd8"} size={50} />
                    }
                    <div className="links-container">
                         <a target="_blank" rel="noopener noreferrer" href={props.githubLink}>
                              <AiOutlineGithub className="link" color={"#C9C9C9"} size={25} />
                         </a>
                         {props.hasLiveSite &&
                              <a target="_blank" rel="noopener noreferrer" href={props.siteLink}>
                                   <FiExternalLink className="link" color={"#C9C9C9"} size={25} />
                              </a>
                         }
                    </div>
               </section>

               <section id="project-title">
                    {props.title}
               </section>

               <section id="project-description">
                    {props.description}
               </section>

               <section id="techstack-container">
                    {props.techStack.map((el, index) => {
                         return <div key={index} className="techstack-item"> {el} </div>
                    })}
               </section>
          </div>
     )
}

export default NoteworthyProject