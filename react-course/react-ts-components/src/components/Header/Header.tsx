import React from 'react';
import { NavLink } from 'react-router-dom';
import { IRouter, IStatePage } from './Header.props';

class Header extends React.Component<IStatePage> {
  constructor(props: IRouter) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/form">Form</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
    );
  }
}

export { Header };
