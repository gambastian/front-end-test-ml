import React from 'react';
import "../assets/styles/ProductCard.css";

function ProductCard(props) {

    const product = props.product;

    return (
        product !== undefined &&
        <>
            <div className="ProductCardContainer">
                <a href="/"><img src={product.picture} className="ProductCardImage"/></a>
                <div className="ProductInfo">
                    <div className="ProductPrice">$ {product.price.amount} {product.free_shipping &&
                    <img src="ic_shipping.png"/>}</div>
                    <p className="ProductDescription">{product.title}</p>
                </div>
                <div className="ProductStatus">
                    {product.condition !== undefined && <p>{product.condition === "new" ? "Nuevo" : "Usado"}</p>}
                </div>
            </div>
        </>
    )
}

export default ProductCard