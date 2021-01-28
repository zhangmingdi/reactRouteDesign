import React, { Component } from 'react';
import RouterContext from './RouterContext';

export default class extends Component {

  state = {
    location: {
      pathname: window.location.hash.slice(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', e => {

      const hash = window.location.hash.slice(1)

      const index = hash.indexOf("?")

      const pathname = index !== -1 ? hash.slice(0, index) : hash
      const search = index !== -1 ? hash.slice(index) : ''

      
      this.setState({
        location: {
          ...this.state.location,
          pathname,
          search
        }
      })
    })
  }

  render() {

    let value = {
      location: this.state.location,
      history: {
        location: this.state.location,
        push(to) {

          if (typeof to === 'object') {
            window.location.hash = to.pathName

          } else {
            window.location.hash = to
          }

        }
      }
    }

    return (
      <RouterContext.Provider value={value}>
        {this.props.children}
      </RouterContext.Provider>
    )

  }

}