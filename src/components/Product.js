import React from "react";
import "../styles/Product.css";
// import images from "../../public/images";

export default function Product(props) {
    const { products, setproducts, product } = props;

    return (
        // <div className="product">
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
