import React from "react";
import "../Product.css";

export default function Product(props) {
    const { products, setproducts, product } = props;

    const displayProduct = products.map(product => <p>{product.name}</p>);

    return (
        <div>
            <p className="product">{product.name}</p>
        </div>
    );
}
