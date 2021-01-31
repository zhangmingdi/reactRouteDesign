import { pathToRegexp } from 'path-to-regexp';
import React, { Component } from 'react';
import RouterContext from './RouterContext';



export default class Switch extends Component {

  static contextType = RouterContext
  render() {

    let pathname = this.context.location.pathname

    if (this.props.children) {

      let children = Array.isArray(this.props.children) ? this.props.children : [this.props.children]

      for (let i = 0; i < children.length; i++) {

        let child = children[i]
        let { path = '/', component: RouteComponent, exact = false } = child.props;
        let regexp = pathToRegexp(path, [], { end: exact });
        let result = pathname.match(regexp)
        if (result) return child
      }

      return null
    }



  }
}