import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import logo from '../media/portfolio-logo.png'
import '../styling/loading.scss'
import BarLoader from "react-spinners/BarLoader";
// import styled from 'styled-components';


export default WrappedComponent => {
     class Wrapper extends Component {
          state = { isLoading: true };

          componentDidMount = () => this.setTimer();

          componentDidUpdate = prevProps => {
               if (this.props.location !== prevProps.location) {
                    this.clearTimer();
                    this.setState({ isLoading: true }, () => this.setTimer());
               }
          };

          clearTimer = () => clearTimeout(this.timeout);

          timer = () => this.setState({ isLoading: false }, () => this.clearTimer());

          setTimer = () => (this.timeout = setTimeout(this.timer, 1500));

          render = () => (
               <Fragment>
                    {this.state.isLoading
                         ?
                         <section id="loading-container">
                              <img className="logo" src={logo} alt="" />
                              <div className="text">Devin is thinking</div>
                              <BarLoader
                                   height={1}
                                   width={200}
                                   color={'#08fdd8'}
                                   loading={this.state.loading}
                              />
                         </section>
                         : <WrappedComponent {...this.props} />
                    }
               </Fragment>
          );
     }
     return withRouter(Wrapper);
};