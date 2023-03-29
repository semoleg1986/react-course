import React, { useState, useEffect } from 'react';
import { SearchInput } from './SearchInput';
import './SearchBar.css';

const SearchBar = () => {
  const [value, setValue] = useState<string>(() => localStorage.getItem('search') ?? '');

  useEffect(() => {
    localStorage.setItem('search', value);
  }, [value]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <div className="box">
      <SearchInput type="text" onChange={handleChange} placeholder="Search bar" value={value} />
    </div>
  );
};

export default SearchBar;
