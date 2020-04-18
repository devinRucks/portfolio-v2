import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './Home.js'
import Project from './Project'
import '../styling/container.scss'

const Container = ({ location }) => {
     return (
          <div id="content-container">
               <TransitionGroup className="transition-group">
                    <CSSTransition
                         key={location.key}
                         timeout={{ enter: 300, exit: 300 }}
                         classNames={'fade'}
                    >
                         <section id="route-section">
                              <Switch location={location}>
                                   <Route exact path="/" component={Home} />
                                   <Route path="/projects" component={Project} />
                              </Switch>
                         </section>
                    </CSSTransition>
               </TransitionGroup>
          </div>
     );
}


export default withRouter(Container);