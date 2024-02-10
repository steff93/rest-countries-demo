import React, { useRef } from "react";

interface SearchProps {
  onSearchSubmit: (searchValue: string) => void;
}

export const Search = ({ onSearchSubmit }: SearchProps) => {
  const searchValue = useRef("");

  const handleChange = (e: React.ChangeEvent) => {
    searchValue.current = (e.target as HTMLInputElement).value;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSearchSubmit(searchValue.current);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input type="search" onChange={handleChange} />
    </form>
  );
};
