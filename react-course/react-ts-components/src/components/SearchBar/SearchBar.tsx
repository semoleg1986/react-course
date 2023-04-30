import React from 'react';
import './SearchBar.css';

interface SearchBarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

const SearchBar = ({ searchQuery, onSearch }: SearchBarProps) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    onSearch(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="box">
      <div className="searchBar">
        <input
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Search bar"
          value={searchQuery}
        />
      </div>
    </div>
  );
};

export default SearchBar;
