import React from 'react';
import '../assets/styles/SearchBar.css';

function SearchBar() {

    return (
        <header className="SearchBar">
            <a className="SearchBarLogo" href="/">FrontEnd app</a>
            <form>
                <input type="text" className="SearchBarInput" placeholder="Nunca dejes de buscar"/>
                <button type="submit" className="SearchBarButton"/>
            </form>
        </header>
    );
}

export default SearchBar;