import React, { useState, useEffect } from 'react'
import useWindowDimensions from './WindowDimension'
import Fade from 'react-reveal/Fade';

import NoteworthyProjects from './NoteworthyProjects'
import Project from './Project'

import stockDataDemo from '../media/stock-app-demo.mp4'
import stockDataIcon from '../media/stockapp-icon.png'
import bfsDemo from '../media/bfs-demo.mp4'
import bfsIcon from '../media/bfs-icon.png'
import weatherAppDemo from '../media/weather-demo.mp4'
import weatherAppIcon from '../media/weather-app-icon.png'

import stockData from '../projects/featured/stockData'
import bfs from '../projects/featured/bfs'
import weatherApp from '../projects/featured/weatherApp'

import '../styling/projects.scss'


const Projects = () => {
     const [mounted, setMount] = useState(false)
     const { width } = useWindowDimensions();

     useEffect(() => {
          setMount(true)
     }, [mounted])

     return (
          <div id="projects-container">
               <Fade left opposite when={mounted}>
                    <section id="projects-heading-container">
                         <div className="projects-heading">
                              Some Things I've Built
                         </div>
                         <hr />
                    </section>
               </Fade>

               <Fade right opposite when={mounted}>
                    <Project
                         // showcase={stockDataDemo}
                         icon={stockDataIcon}
                         title={stockData.title}
                         description={stockData.description}
                         techstack={stockData.techStack}
                         reversed={width > 1200 ? false : true}
                    />
               </Fade>

               <Fade right opposite when={mounted}>
                    <hr className="project-separator" />
               </Fade>

               <Fade left opposite when={mounted}>
                    <Project
                         // showcase={bfsDemo}
                         icon={bfsIcon}
                         title={bfs.title}
                         description={bfs.description}
                         techstack={bfs.techStack}
                         reversed={true}
                    />
               </Fade>

               <Fade left opposite when={mounted}>
                    <hr className="project-separator" />
               </Fade>

               <Fade right opposite when={mounted}>
                    <Project
                         // showcase={weatherAppDemo}
                         icon={weatherAppIcon}
                         title={weatherApp.title}
                         description={weatherApp.description}
                         techstack={weatherApp.techStack}
                         reversed={width > 1200 ? false : true}
                    />
               </Fade>

               <NoteworthyProjects />
          </div>
     )
}

export default Projects