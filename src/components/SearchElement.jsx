import React, {useEffect, useState} from "react";
import './SearchElement.css';

function SearchElement ({onClickSearch = f=>f, inputRef = {}}) {

    return (
        <form className="searchContainer">
            <input className="inputField" type="number" ref={inputRef} placeholder="chose an episode" min="1" max="33" />
            <button type="button" onClick={onClickSearch}>search</button>
        </form>
    )
}

export default SearchElement;