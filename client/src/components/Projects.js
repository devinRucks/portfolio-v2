import React from 'react'
import ProjectLayout from './ProjectLayout'
import stockDataImg from '../media/stockapp-showcase.png'
import { stockDataTitle, stockDataDescription, stockDataTechStack } from '../projects/stockData'
import '../styling/projects.scss'


const Projects = (props) => {

     return (
          <div id="projects-container">
               <ProjectLayout
                    showcase={stockDataImg}
                    title={stockDataTitle}
                    description={stockDataDescription}
                    techstack={stockDataTechStack}
                    reversed={false}
               />
               <ProjectLayout
                    showcase={stockDataImg}
                    title={stockDataTitle}
                    description={stockDataDescription}
                    techstack={stockDataTechStack}
                    reversed={true}
               />
          </div>
     )
}

export default Projects