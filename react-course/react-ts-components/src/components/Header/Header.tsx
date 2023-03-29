import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        <Routes>
          <Route path="/" element={'Home'} />
          <Route path="/form" element={'About Us'} />
          <Route path="/about" element={'About Us'} />
          <Route path="*" element={'Not Found'} />
        </Routes>
      </h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/form">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>
  );
};

export default Header;
