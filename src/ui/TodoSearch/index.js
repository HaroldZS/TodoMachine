import React, { useEffect } from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, params, setParams }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    setParams({ search: event.target.value });
  };

  useEffect(() => {
    const search = params.get("search") ?? "";
    setSearchValue(search);
  }, [params]);

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      // disabled={loading}
    />
  );
}

export { TodoSearch };
