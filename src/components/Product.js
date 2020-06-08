import React from "react";
import "../Product.css";
import { Link } from "react-router-dom";

export default function Product(props) {
    const { products, setproducts, product } = props;

    return (
        <div>
            <Link to={`/products/${product.name}`} product={product}>
                <p className="product">{product.name}</p>
            </Link>
        </div>
    );
}
