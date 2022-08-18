import React, { useState } from "react";
import { SearchNav, Input, ButtonSearch } from "../style";
const SearchBar = (props) => {
  const [search, setSearch] = useState("thor");
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <SearchNav>
      <Input
        type="text"
        placeholder="Buscar Héroi"
        onChange={onChangeHandler}
      />
      <ButtonSearch onClick={onButtonClickHandler}>Procurar</ButtonSearch>
    </SearchNav>
  );
};

export default SearchBar;
