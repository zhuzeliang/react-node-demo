import React, { Component } from 'react';
import { Route,Redirect} from 'react-router-dom';
import { getUserInfo } from '../api/getData.js';

class PrivateRoute extends Component {
  state = {
    authToken:false,
    hasToken:false
  }
  componentDidMount() {
      getUserInfo().then(res => {
         if(res.data.code === 0) {
            this.setState({authToken:true,hasToken:true})
         }else {
            this.setState({authToken:false,hasToken:true})
         }
      })
    }
  render() {
    const { component: Component, ...rest } = this.props
    if(!this.state.hasToken){
      return null
    }
    return (
        <Route {...rest} render={props => {
          return this.state.authToken
              ? <Component {...props} />
              : <Redirect to={{pathname:"/login", state: { from: this.props.location }}} />
        }} />
    )
  }
}
export default PrivateRoute;