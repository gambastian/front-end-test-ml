import React from 'react';
import "../assets/styles/ItemDetail.css";
import BreadCrumb from "../components/BreadCrumb";
import {useParams, withRouter} from "react-router-dom";

function ItemDetail() {

    const categories = ["category Item"];
    const product = {
        id: "MLA745144023",
        title: "Juliana Sin Papa 1 Kg / Kenko Dieteticas Urbanas / Almagro",
        price: {
            currency: "ARS",
            amount: 934,
            decimals: 0
        },
        picture: "http://http2.mlstatic.com/D_716505-MLA31597842150_072019-O.jpg",
        condition: "new",
        free_shipping: false,
        sold_quantity: 500,
        description: "Pringles Crema&Cebolla x124g.\n\n\n\n180 días de caducidad. \n\n\n¿Hacemos factura A?Para que podamos emitir la factura A, necesitamos que la cuenta desde donde vayas a realizar la compra, esté registrada como IVA Responsable Inscripto o IVA Exento. De lo contrario, se va a emitir automáticamente una factura B."
    };

    let {id} = useParams();
    console.log(id);

    return (
        <>
            <BreadCrumb categories={categories}/>
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
                    <h1>$ {product.price.amount}</h1>
                    <button className="ItemDetailBuyButton">Comprar</button>
                </div>
            </div>
        </>
    )
}

export default (ItemDetail);