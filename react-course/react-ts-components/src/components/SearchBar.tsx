// eslint-disable-next-line import/no-extraneous-dependencies
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="box">
      <div className="searchBar">
        <i>
          <BsSearch />
        </i>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default SearchBar;
