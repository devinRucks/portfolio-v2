import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import BarLoader from "react-spinners/BarLoader";
import styled from 'styled-components';


const LoadingContainer = styled.div`
     height: 100%;
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
`

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
                         <LoadingContainer>
                              <BarLoader
                                   height={1}
                                   width={200}
                                   color={'#08fdd8'}
                                   loading={this.state.loading}
                              />
                         </LoadingContainer>
                         : <WrappedComponent {...this.props} />
                    }
               </Fragment>
          );
     }
     return withRouter(Wrapper);
};