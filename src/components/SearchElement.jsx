import React, {useEffect, useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import './SearchElement.css';
import Modal from "./Modal";

function SearchElement ({onClickSearch = f=>f, inputRef = {}}) {

    return (
        <form className="searchContainer">
            <Routes>
                <Route path="/" element={<Link to="/options" className="headerLink">opções</Link>} />
                <Route path="options" element={<Link to="/" className="headerLink">home</Link>} />
            </Routes>

            <input className="inputField" type="number" ref={inputRef} placeholder="chose an episode" min="1" max="33" />
            <button type="button" onClick={onClickSearch}>search</button>

            <Modal />

        </form>
    )
}

export default SearchElement;