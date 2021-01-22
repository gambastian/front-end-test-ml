import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SearchResult from "../containers/SearchResult"
import ItemDetail from "../containers/ItemDetail"
import SearchBar from "../components/SearchBar"
import '../assets/styles/Apps.scss';

function App() {
    return (
        <div className="App">
            <div className="Container">
                <BrowserRouter>
                    <SearchBar/>
                    <Switch>
                        <Route exact path="/items" component={SearchResult}/>
                        <Route exact path="/items/:id" component={ItemDetail}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
