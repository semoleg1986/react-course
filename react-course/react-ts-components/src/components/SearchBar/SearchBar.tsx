import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>(
    () => localStorage.getItem('search') ?? ''
  );
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('search', searchValue);
  }, [searchValue]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  return (
    <div className="box">
      <div className="searchBar">
        <i>
          <BsSearch />
        </i>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search bar"
          value={searchValue}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default SearchBar;
