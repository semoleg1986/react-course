import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { BsSearch } from 'react-icons/bs';

interface SearchBarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

const SearchBar = ({ searchQuery, onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState(searchQuery);
  const [searchOnType, setSearchOnType] = useState(false);

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setQuery(value);
    if (searchOnType) {
      onSearch(value);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(query);
    }
  };

  const handleButtonClick = () => {
    onSearch(query);
  };

  const toggleSearchOnType = () => {
    setSearchOnType(!searchOnType);
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
          onKeyPress={handleKeyPress}
          placeholder="Search bar"
          value={query}
        />
        <button type="button" onClick={handleButtonClick}>
          Search
        </button>
        <label>
          <input type="checkbox" checked={searchOnType} onChange={toggleSearchOnType} />
          Search on type
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
