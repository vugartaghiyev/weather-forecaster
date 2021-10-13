import React, { useState, useContext } from "react";
import { Context } from "../context/Context";

import { SET_CITY_NAME } from "../context/actions";

const SearchBar = () => {
  const [city, setCity] = useState("");

  const { dispatch } = useContext(Context);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: SET_CITY_NAME, payload: city });
  };

  return (
    <form className="Search-Bar" onSubmit={submitHandler}>
      <input
        placeholder="City name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">get</button>
    </form>
  );
};

export default SearchBar;
