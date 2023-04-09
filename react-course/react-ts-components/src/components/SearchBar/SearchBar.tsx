<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
import { MyInput } from './SearchInput';
>>>>>>> parent of 8f3afe8 (Summary)
import './SearchBar.css';
import { BsSearch } from 'react-icons/bs';
import { useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState<string>(
    () => localStorage.getItem('search') ?? ''
  );

  useEffect(() => {
    const value = localStorage.getItem('search') ?? '';
    onSearch(value);
  }, [onSearch, searchValue]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

<<<<<<< HEAD
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      localStorage.setItem('search', searchValue);
      onSearch(searchValue);
    }
  };

  return (
    <div className="box">
      <div className="searchBar">
        <i>
          <BsSearch />
        </i>
        <input
=======
  render(): React.ReactNode {
    return (
      <div className="box">
        <MyInput
>>>>>>> parent of 8f3afe8 (Summary)
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Search bar"
          value={searchValue}
        />
      </div>
    </div>
  );
};

export default SearchBar;
