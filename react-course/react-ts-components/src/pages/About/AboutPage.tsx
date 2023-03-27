import React from 'react';
import { IRouter } from '../../components/Header/Header.props';

class About extends React.Component<IRouter> {
  constructor(props: IRouter) {
    super(props);
    this.props.callback(this.props);
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>About</h1>
        <p>Some text</p>
      </div>
    );
  }
}

export { About };
