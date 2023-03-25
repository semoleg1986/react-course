import { SearchBar } from '../../components/SearchBar/SearchBar';
import React from 'react';
import { Card } from '../../components/Form/Card/Card';
import { IRouter } from '../../components/Header/Header.props';

class Home extends React.Component<IRouter> {
  constructor(props: IRouter) {
    super(props);
    this.props.callback(this.props);
  }

  render(): React.ReactNode {
    return (
      <>
        <SearchBar />
        <Card />
      </>
    );
  }
}

export { Home };
