import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import Forms from './pages/Form/FormPage';
import About from './pages/About/AboutPage';
import NotFoundPage from './pages/404/NotFoundPage';
import Layout from './components/Layout';
import React from 'react';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<Forms />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
