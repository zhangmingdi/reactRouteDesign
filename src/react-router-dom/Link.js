import React, { Component } from 'react';
import RouterContext from './RouterContext';


export default class extends Component {

  static contextType = RouterContext


  _handerHash = () => {

    this.context.history.push(this.props.to)
  
  }


  render() {


    return (
      <a onClick={this._handerHash}>{this.props.children}</a>
    )

  }

}

