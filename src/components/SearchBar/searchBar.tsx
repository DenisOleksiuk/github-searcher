import React from 'react';

import './searchBar.scss';

interface ISearchBar {
  placeholder: string;
  searchHandler: (str: string) => void;
}

export const SearchBar: React.FC<ISearchBar> = ({ placeholder, searchHandler }) => (
  <div className="wrap">
    <div className="search">
      <input
        className="searchTerm"
        placeholder={placeholder}
        onChange={(event) => searchHandler(event.target.value)}
      />
      <button type="submit" className="searchButton">
        <i className="fa fa-search"></i>
      </button>
    </div>
  </div>
);
