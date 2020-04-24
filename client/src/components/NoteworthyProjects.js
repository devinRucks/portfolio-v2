import React from 'react'
import NoteworthyProject from './NoteworthyProject'
import clock from '../projects/noteworthy/clock'
import '../styling/noteworthyProjects.scss'

const NoteworthyProjects = () => {

     return (
          <div id="noteworthy-projects-container">

               <section id="noteworthy-projects-separator">
                    <hr className="noteworthy-projects-hr" />
                    <div className="noteworthy-projects-title">
                         Other Noteworthy Projects
                    </div>
                    <hr className="noteworthy-projects-hr" />
               </section>

               <NoteworthyProject
                    hasLiveSite={true}
                    title={clock.title}
                    description={clock.description}
                    techStack={clock.techStack}
               />
               {/* <NoteworthyProject />
               <NoteworthyProject />
               <NoteworthyProject /> */}
          </div>
     )
}

export default NoteworthyProjects