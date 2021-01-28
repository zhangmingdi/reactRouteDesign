import { pathToRegexp } from 'path-to-regexp';
import React, { Component } from 'react';
import RouterContext from './RouterContext';

export default class extends Component {

  static contextType = RouterContext

  render() {

    let { component: RouterComponent, exact = false, path = "/", } = this.props
    const pathname = this.context.location.pathname
    const paramsNames = []
    const regexp = pathToRegexp(path, paramsNames, { exact })

    const isShow = pathname.match(regexp)

    const props = {
      location: this.context.location,
      history: this.context.history,
    }

    if (isShow) return (
      <RouterComponent {...props} />
    )
    return null
  }


}

// export default function (props) {



//   return (
//     <RouterContext.Consumer>
//       {({ location }) => {
//         if (location.pathname === path && RouterComponent) return <RouterComponent />
//         return null
//       }}
//     </RouterContext.Consumer>
//   )

// }