import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";

function SearchResult() {

    const categories = ["category 1", "category 2"];
    const products = [{
        id: "MLA745144023",
        title: "Juliana Sin Papa 1 Kg / Kenko Dieteticas Urbanas / Almagro",
        price: {
            currency: "ARS",
            amount: 934,
            decimals: 0
        },
        picture: "http://http2.mlstatic.com/D_867855-MLA30358667565_052019-I.jpg",
        condition: "new",
        free_shipping: false
    },{
        id: "MLA621904623",
        title: "Cortapapas Vertical Spolu Chico Corte Papa Baston 10x10mm",
        price: {
            currency: "ARS",
            amount: 3288,
            decimals: 0
        },
        picture: "http://http2.mlstatic.com/D_798048-MLA31010183121_062019-I.jpg",
        condition: "new",
        free_shipping: true
    }];

    return (
        <>
            <BreadCrumb categories={categories}/>
            {products.map(product => <ProductCard product={product}/>)}
        </>
    );
}

export default SearchResult;