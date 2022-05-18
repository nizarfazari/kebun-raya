import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./search.scss";

const Search = () => {
  return (
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
