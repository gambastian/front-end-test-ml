import React from 'react';
import "../assets/styles/ProductCard.scss";

function ProductCard(props) {

    const product = props.product;

    return (
        product !== undefined &&
        <>
            <div key={product.id} className="ProductCardContainer">
                <a href={`/items/${product.id}`}><img src={product.picture} className="ProductCardImage" alt=""/></a>
                <div className="ProductInfo">
                    <div className="ProductPrice">$ {product.price.amount} {product.free_shipping &&
                    <img src={"ic_shipping.png"} alt=""/>}</div>
                    <a href={`/items/${product.id}`} className="ProductDescriptionLink"><p className="ProductDescription">{product.title}</p></a>
                </div>
                <div className="ProductStatus">
                    {product.condition !== undefined && <p>{product.condition === "new" ? "Nuevo" : "Usado"}</p>}
                </div>
            </div>
        </>
    )
}

export default ProductCard