import React from 'react';
import {Link, withRouter} from "react-router-dom";
import '../assets/styles/SearchBar.css';

function SearchBar() {

    let query = "";

    function onChange(e) {
        query = e.target.value
        console.log(query)
    }

    return (
        <header className="SearchBar">
            <a className="SearchBarLogo" href="/">FrontEnd app</a>
            <form>
                <input type="text" className="SearchBarInput" placeholder="Nunca dejes de buscar" onChange={onChange}/>
                <Link to={`/items?q=${query}`}>
                    <button type="submit" className="SearchBarButton"/>
                </Link>
            </form>
        </header>
    );
}


export default withRouter(SearchBar);