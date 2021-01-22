import React, {useEffect, useState} from 'react';
import "../assets/styles/ItemDetail.scss";
import BreadCrumb from "../components/BreadCrumb";
import {useParams} from "react-router-dom";

function ItemDetail(props) {

    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState([]);
    const {id} = useParams();

    useEffect(() => {

        const getItem = async () => {
            try {
                const resultsData = await fetch(`http://localhost:8000/api/items/${id}`);
                const resultJson = await resultsData.json();

                setProduct(resultJson.item);
                setCategories(resultJson.item.category);
            } catch (e) {
                console.log(`An error happened obtaining the results: ${e}`)
            }
        };
        getItem();
    },[useParams]);

    return (
        <>
            <BreadCrumb categories={categories}/>
            {product !== undefined &&
            <div className="ItemDetailContainer">
                <div className="ItemDetailColumnA">
                    <img className="ItemDetailPicture" src={product.picture} alt=""></img>
                    <div className="ItemDetailDescription">
                        <h2>Descripción del producto</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="ItemDetailColumnB">
                    <p>{product.condition ===  "new" ? "Nuevo" : "Usado"} - {product.sold_quantity} vendidos</p>
                    <h2>{product.title}</h2>
                    {product.price !== undefined && <h1>$ {product.price.amount}</h1>}
                    <button className="ItemDetailBuyButton">Comprar</button>
                </div>
            </div>
            }
        </>
    )
}

export default (ItemDetail);