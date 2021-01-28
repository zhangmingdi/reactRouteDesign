import React, { Component } from 'react';
import RouterContext from './RouterContext'

export default class extends Component {

  state = {
    location: {
      pathname: window.location.hash.slice(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', e => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1)
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
          window.location.hash = to
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