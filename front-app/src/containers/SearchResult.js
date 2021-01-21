import React from 'react';
import BreadCrumb from "../components/BreadCrumb";

function SearchResult() {

    const categories = ["category 1", "category 2"];

    return (
        <>
            <BreadCrumb categories={categories}/>
        </>
    );
}

export default SearchResult;