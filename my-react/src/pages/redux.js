import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserInfoAction,addNum } from '../redux/test.redux.js'


@connect(
	state=>state.test,
	{getUserInfoAction,addNum}
)

class About extends Component {
  render() {
    return (
      <div className="page-redux">
        <button  onClick = {this.props.addNum}>redux</button>
        <span>{this.props.num}</span>
        <button onClick = {this.props.getUserInfoAction} >redux 异步</button>
        <span>{this.props.userInfo.user}</span>
      </div>
    );
  }
}

export default About;
