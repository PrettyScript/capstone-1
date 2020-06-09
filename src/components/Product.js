import React from "react";
import "../Product.css";

export default function Product(props) {
    const { products, setproducts, product } = props;

    return (
        <div>
            <p className="product">{product.name}</p>
        </div>
    );
}
