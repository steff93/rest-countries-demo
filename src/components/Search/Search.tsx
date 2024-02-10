import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Search.scss";

interface SearchProps {
  onSearchSubmit: (searchValue: string) => void;
}

export const Search = ({ onSearchSubmit }: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");
  const isAnythingInSearch = !!searchValue.length;
  const placeholderText = "Search for a country...";
  const inputIcon = isAnythingInSearch ? faXmark : faMagnifyingGlass;
  const clearSearchClass = isAnythingInSearch ? "search__icon--clear" : "";

  const handleChange = (e: React.ChangeEvent) => {
    setSearchValue((e.target as HTMLInputElement).value);
  };

  const handleSearchClear = () => {
    if (!isAnythingInSearch) return;

    setSearchValue("");
    onSearchSubmit("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSearchSubmit(searchValue);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <FontAwesomeIcon
        icon={inputIcon}
        className={`search__icon ${clearSearchClass}`}
        onClick={handleSearchClear}
      />
      <input
        type="search"
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholderText}
      ></input>
    </form>
  );
};
