import React from "react";
import "../styles/Product.css";

export default function Product(props) {
    const { product } = props;

    return (
        <div>
            <img
                key={product.name}
                src={require(`../assets/images/${product.name}.png`)}
                className="img-responsive"
            />
            <p className="product">{product.name.replace(/-/g, " ")}</p>
        </div>
    );
}
