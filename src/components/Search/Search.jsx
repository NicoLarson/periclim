import React from "react";
import './Search.css'

const Search = ({ setSearch, updatePageNumber }) => {
    let searchBtn = (e) => {
        e.preventDefault();
    };
    return (
        <form className="search-bar">
            <input
                onChange={(e) => {
                    updatePageNumber(1);
                    setSearch(e.target.value);
                }}
                className="form-control form-control-lg search-bar"
                placeholder="Rechercher..."
                type="text"
            />
            <input class="btn btn-primary" type="submit" value="Rechercher" onClick={searchBtn} />
        </form>
    );

};

export default Search