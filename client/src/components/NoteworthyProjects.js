import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade';

import NoteworthyProject from './NoteworthyProject'
import clock from '../projects/noteworthy/clock'
import shopping from '../projects/noteworthy/shopping'
import inventory from '../projects/noteworthy/inventory'
import snake from '../projects/noteworthy/snake'

import '../styling/noteworthyProjects.scss'

const NoteworthyProjects = () => {
     const [mounted, setMount] = useState(false)

     useEffect(() => {
          setMount(true)
     }, [mounted])

     return (
          <div id="noteworthy-projects-container">

               <Fade left when={mounted}>
                    <section id="noteworthy-projects-separator">
                         <hr className="noteworthy-projects-hr left-hr" />
                         <div className="noteworthy-projects-title">
                              Other Noteworthy Projects
                         </div>
                         <hr className="noteworthy-projects-hr right-hr" />
                    </section>
               </Fade>

               <Fade left when={mounted}>
                    <NoteworthyProject
                         hasLiveSite={true}
                         title={shopping.title}
                         description={shopping.description}
                         techStack={shopping.techStack}

                    />
               </Fade>

               <Fade left when={mounted}>
                    <NoteworthyProject
                         hasLiveSite={false}
                         title={inventory.title}
                         description={inventory.description}
                         techStack={inventory.techStack}

                    />
               </Fade>

               <Fade left when={mounted}>
                    <NoteworthyProject
                         hasLiveSite={false}
                         title={clock.title}
                         description={clock.description}
                         techStack={clock.techStack}
                    />
               </Fade>

               <Fade left when={mounted}>
                    <NoteworthyProject
                         hasLiveSite={false}
                         title={snake.title}
                         description={snake.description}
                         techStack={snake.techStack}

                    />
               </Fade>
          </div>
     )
}

export default NoteworthyProjects