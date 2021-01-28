import { render } from '@testing-library/react';
import React, { Component } from 'react';
import RouterContext from './RouterContext';


export default function (props) {

  let { component: RouterComponent, path } = props

  return (
    <RouterContext.Consumer>
      {({ location }) => {
        if (location.pathname === path && RouterComponent) return <RouterComponent />
        return null
      }}
    </RouterContext.Consumer>
  )

}