import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SearchResult from "../containers/SearchResult"
import Item from "../containers/Item"
import SearchBar from "../components/SearchBar"
import '../assets/styles/App.css';

function App() {
    return (
        <div className="App">
            <SearchBar/>
            <div className="Container">
                <BrowserRouter>
                    <Switch>
                        <Route path="/items" component={SearchResult}/>
                        <Route path="/items/:id" component={Item}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
