import { pathToRegexp } from "path-to-regexp";
import { Component } from "react";
import Link from "./Link";
import RouterContext from "./RouterContext";



export default class NavLink extends Component {

  static contextType = RouterContext

  render() {

    let { exact = false, to, children } = this.props

    let pathname = this.context.location.pathname
    let currentPath;
    if (typeof to === 'object') {
      currentPath = to.pathname
    } else {
      currentPath = to
    }

    const regexp = pathToRegexp(currentPath, [], { end: exact })
    const matched = pathname.match(regexp)

    return (
      <Link {...this.props} className={matched ? 'active' : ''}>{children}</Link>
    )

  }

}