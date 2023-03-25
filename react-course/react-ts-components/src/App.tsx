import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/HomePage';
import { Forms } from './pages/Form/FormPage';
import { About } from './pages/About/AboutPage';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { Layout } from './components/Layout';
import { IStatePage } from './components/Header/Header.props';
import React from 'react';
class App extends React.Component<Record<string, never>, IStatePage> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      title: 'test',
    };
    this.setTitle = this.setTitle.bind(this);
  }

  private setTitle(title: IStatePage) {
    this.setState(title);
  }

  render(): React.ReactNode {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout title={this.state.title} />}>
            <Route index element={<Home title="Home" callback={this.setTitle} />} />
            <Route path="form" element={<Forms title="Form" callback={this.setTitle} />} />
            <Route path="about" element={<About title="About" callback={this.setTitle} />} />
            <Route path="*" element={<NotFoundPage title="404" callback={this.setTitle} />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
