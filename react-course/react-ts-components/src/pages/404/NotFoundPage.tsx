import React from 'react';
import { IRouter } from '../../components/Header/Header.props';

class NotFoundPage extends React.Component<IRouter> {
  constructor(props: IRouter) {
    super(props);
    this.props.callback(this.props);
  }

  render(): React.ReactNode {
    return <h2>Page not found</h2>;
  }
}

export { NotFoundPage };
