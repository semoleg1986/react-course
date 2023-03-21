import React from 'react';
import { IRouter } from '../../type';

class About extends React.Component<IRouter> {
  constructor(props: IRouter) {
    super(props);
    this.props.callback(this.props);
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}

export { About };
