import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IRouter, IStatePage } from './Header/Header.props';

class Layout extends React.Component<IStatePage> {
  constructor(props: IRouter) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <>
        <header>
          <h1>{this.props.title}</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/form">Form</NavLink>
          <NavLink to="/about">About</NavLink>
        </header>
        <main className="container">
          <Outlet />
        </main>
      </>
    );
  }
}

export { Layout };
