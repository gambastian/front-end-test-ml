import React from 'react';
import {useHistory} from "react-router-dom";
import '../assets/styles/SearchBar.scss';

function SearchBar(props) {

    let history = useHistory();
    let query = "";

    function onChange(e) {
        query = e.target.value;
    }

    function onClick() {
        history.push(`/items?q=${query}`)
    }

    return (
        <header className="SearchBar">
            <a className="SearchBarLogo" href="/">FrontEnd app</a>
            <input type="text" className="SearchBarInput" placeholder="Nunca dejes de buscar" onChange={onChange}/>
            <button type="submit" className="SearchBarButton" onClick={onClick}/>
        </header>
    );
}

export default SearchBar;