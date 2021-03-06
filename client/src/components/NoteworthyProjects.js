import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade';

import NoteworthyProject from './NoteworthyProject'
import shopping from '../projects/noteworthy/shopping'
import inventory from '../projects/noteworthy/inventory'
import mutualFund from '../projects/noteworthy/mutualFund'
import clock from '../projects/noteworthy/clock'
import tictactoe from '../projects/noteworthy/TicTacToe'
import moodify from '../projects/noteworthy/moodify'
import pwa from '../projects/noteworthy/pwa'

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
                         hasLiveSite={false}
                         isFinished={false}
                         title={pwa.title}
                         description={pwa.description}
                         techStack={pwa.techStack}
                         githubLink={pwa.githubLink}
                    />
               </Fade>

               <Fade left when={mounted}>
                    <NoteworthyProject
                         hasLiveSite={false}
                         isFinished={false}
                         title={moodify.title}
                         description={moodify.description}
                         techStack={moodify.techStack}
                         githubLink={moodify.githubLink}
                    />
               </Fade>

               <Fade left when={mounted}>
                    <NoteworthyProject
                         hasLiveSite={false}
                         isFinished={true}
                         title={shopping.title}
                         description={shopping.description}
                         techStack={shopping.techStack}
                         githubLink={shopping.githubLink}
                    />
               </Fade>

               <Fade left when={mounted}>
                    <NoteworthyProject
                         hasLiveSite={false}
                         isFinished={true}
                         title={inventory.title}
                         description={inventory.description}
                         techStack={inventory.techStack}
                         githubLink={inventory.githubLink}
                    />
               </Fade>

               <Fade left when={mounted}>
                    <NoteworthyProject
                         hasLiveSite={false}
                         isFinished={true}
                         title={mutualFund.title}
                         description={mutualFund.description}
                         techStack={mutualFund.techStack}
                         githubLink={mutualFund.githubLink}

                    />
               </Fade>

               <Fade left when={mounted}>
                    <NoteworthyProject
                         hasLiveSite={false}
                         isFinished={true}
                         title={clock.title}
                         description={clock.description}
                         techStack={clock.techStack}
                         githubLink={clock.githubLink}
                    />
               </Fade>

               <Fade left when={mounted}>
                    <NoteworthyProject
                         hasLiveSite={false}
                         isFinished={true}
                         title={tictactoe.title}
                         description={tictactoe.description}
                         techStack={tictactoe.techStack}
                         githubLink={tictactoe.githubLink}

                    />
               </Fade>
          </div>
     )
}

export default NoteworthyProjects