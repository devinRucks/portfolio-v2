import React, { useState, useEffect } from 'react'
import useWindowDimensions from './WindowDimension'
import ProjectLayout from './ProjectLayout'
import stockDataDemo from '../media/stock-app-demo.mp4'
import stockDataIcon from '../media/stockapp-icon.png'
import bfsDemo from '../media/bfs-demo.mp4'
import bfsIcon from '../media/bfs-icon.png'
import weatherAppDemo from '../media/weather-demo.mp4'
import weatherAppIcon from '../media/weather-app-icon.png'
import { stockDataTitle, stockDataDescription, stockDataTechStack } from '../projects/stockData'
import { bfsTitle, bfsDescription, bfsTechStack } from '../projects/bfs'
import { weatherAppTitle, weatherAppDescription, weatherAppTechStack } from '../projects/weatherApp'
import { CSSTransition } from "react-transition-group";
import '../styling/projects.scss'


const Projects = (props) => {
     const [mounted, setMount] = useState(false)
     const { width } = useWindowDimensions();

     useEffect(() => {
          setMount(true)
     }, [mounted])

     return (
          <div id="projects-container">
               <CSSTransition in={mounted} timeout={1000} classNames="projects-title">
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
                         icon={stockDataIcon}
                         title={stockDataTitle}
                         description={stockDataDescription}
                         techstack={stockDataTechStack}
                         reversed={width > 1200 ? false : true}
                    />
               </CSSTransition>

               <CSSTransition in={mounted} timeout={1000} classNames="projects-title">
                    <hr className="project-separator" />
               </CSSTransition>

               <CSSTransition in={mounted} timeout={1000} classNames="projects">
                    <ProjectLayout
                         showcase={bfsDemo}
                         icon={bfsIcon}
                         title={bfsTitle}
                         description={bfsDescription}
                         techstack={bfsTechStack}
                         reversed={true}
                    />
               </CSSTransition>

               <CSSTransition in={mounted} timeout={1000} classNames="projects-title">
                    <hr className="project-separator" />
               </CSSTransition>

               <CSSTransition in={mounted} timeout={1000} classNames="projects">
                    <ProjectLayout
                         showcase={weatherAppDemo}
                         icon={weatherAppIcon}
                         title={weatherAppTitle}
                         description={weatherAppDescription}
                         techstack={weatherAppTechStack}
                         reversed={width > 1200 ? false : true}
                    />
               </CSSTransition>
          </div>
     )
}

export default Projects