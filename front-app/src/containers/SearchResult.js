import React, {useEffect, useState} from 'react';
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";


function SearchResult(props) {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        const getResults = async () => {
            try {
                const resultsData = await fetch(`http://localhost:8000/api/items/${props.location.search}`);
                const resultJson = await resultsData.json();
                setProducts(resultJson.items);
                setCategories(resultJson.categories);
            } catch (e) {
                console.log(`An error happened obtaining the results: ${e}`)
            }
        };
        getResults();
    }, [props.location.search]);


    return (
        <>
            <BreadCrumb categories={categories}/>
            {products !== undefined &&
            products.map(product => <ProductCard key={product.id} product={product}/>)}
        </>
    );
}

export default (SearchResult);