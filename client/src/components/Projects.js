import React from 'react'
import ProjectLayout from './ProjectLayout'
import stockDataDemo from '../media/stock-app-demo.mp4'
import bfsDemo from '../media/bfs-demo.mp4'
import { stockDataTitle, stockDataDescription, stockDataTechStack } from '../projects/stockData'
import { bfsTitle, bfsDescription, bfsTechStack } from '../projects/bfs'
import '../styling/projects.scss'


const Projects = (props) => {

     return (
          <div id="projects-container">
               <section id="projects-heading-container">
                    <div className="projects-heading">
                         Some Things I've Built
                    </div>
                    <hr />
               </section>
               <ProjectLayout
                    showcase={stockDataDemo}
                    title={stockDataTitle}
                    description={stockDataDescription}
                    techstack={stockDataTechStack}
                    reversed={false}
               />
               <ProjectLayout
                    showcase={bfsDemo}
                    title={bfsTitle}
                    description={bfsDescription}
                    techstack={bfsTechStack}
                    reversed={true}
               />
          </div>
     )
}

export default Projects