import React, { Component } from 'react';
import RouterContext from './RouterContext';


export default class Switch extends Component {

  static contextType = RouterContext


  render() {

    if (!this.props.from || this.props.from === this.context.location.pathname) {
      this.context.history.push(this.props.to)
    }
    return null
  }


}