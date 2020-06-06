import React from "react";

export default function Product(props) {
    const { products, setproducts, productName } = props;
    return (
        <div>
            <p>{productName}</p>
        </div>
    );
}
