import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import RouteWrapper from './RouteWrapper'
import Home from './Home.js'
import Projects from './Projects'
import Contact from './Contact'
import '../styling/container.scss'

const Container = ({ location }) => {
     return (
          <div id="content-container">
               <Switch location={location}>
                    <Route exact path="/" component={RouteWrapper(Home)} />
                    <Route path="/projects" component={RouteWrapper(Projects)} />
                    <Route path="/contact" component={RouteWrapper(Contact)} />
               </Switch>
          </div>
     );
}


export default withRouter(Container);