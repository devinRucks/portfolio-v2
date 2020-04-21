import React, { useState, useEffect } from 'react'
import ProjectLayout from './ProjectLayout'
import stockDataDemo from '../media/stock-app-demo.mp4'
import bfsDemo from '../media/bfs-demo.mp4'
import { stockDataTitle, stockDataDescription, stockDataTechStack } from '../projects/stockData'
import { bfsTitle, bfsDescription, bfsTechStack } from '../projects/bfs'
import { CSSTransition } from "react-transition-group";
import '../styling/projects.scss'


const Projects = (props) => {
     const [mounted, setMount] = useState(false)

     useEffect(() => {
          setMount(true)
     }, [mounted])

     return (
          <div id="projects-container">
               <CSSTransition in={mounted} timeout={1000} classNames="projects">
                    <section id="projects-heading-container">
                         <div className="projects-heading">
                              Some Things I've Built
                         </div>
                         <hr />
                    </section>
               </CSSTransition>

               <CSSTransition in={mounted} timeout={1000} classNames="projects">
                    <ProjectLayout
                         showcase={stockDataDemo}
                         title={stockDataTitle}
                         description={stockDataDescription}
                         techstack={stockDataTechStack}
                         reversed={false}
                    />
               </CSSTransition>

               <CSSTransition in={mounted} timeout={1000} classNames="projects">
                    <ProjectLayout
                         showcase={bfsDemo}
                         title={bfsTitle}
                         description={bfsDescription}
                         techstack={bfsTechStack}
                         reversed={true}
                    />
               </CSSTransition>
          </div>
     )
}

export default Projects