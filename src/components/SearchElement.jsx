import React, {useEffect, useState} from "react";
import './card.css';

function SearchElement ({onClickSearch = f=>f, inputRef = {}}) {

    return (
        <form>
            <input type="number" ref={inputRef} placeholder="chose an episode" min="1" max="33" />
            <button type="button" onClick={onClickSearch}>search</button>
        </form>
    )
}

export default SearchElement;