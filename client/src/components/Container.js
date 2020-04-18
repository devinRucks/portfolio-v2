import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home.js'
import Project from './Project'
import '../styling/container.scss'

const Container = () => {
     return (
          <div id="content-container">
               <Switch>
                    <Route exact path="/" component={() => <Home />} />
                    <Route path="/projects" component={() => <Project />} />
               </Switch>
          </div>
     );
}


export default Container;