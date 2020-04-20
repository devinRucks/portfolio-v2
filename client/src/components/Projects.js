import React from 'react'
import NormalProjectLayout from './NormalProjectLayout.js.js'
// import ReversedProjectLayout from './ReversedProjectLayout.js'
import '../styling/projects.scss'

const Projects = (props) => {

     return (
          <div id="projects-container">
               <NormalProjectLayout />
               {/* <NormalProjectLayout /> */}

               {/* <Pathfinder /> */}
          </div>
     )
}

export default Projects