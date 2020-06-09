import React from "react";

export default function ProductDetails(props) {
    const { products, match } = props;

    const { name } = match.params;
    console.log(name, products);

    const displayProduct = products.map(product => {
        if (name == product.name)
            return (
                <div>
                    <p>{product.name}</p>
                    <p>{product.serialNumber}</p>
                    <p>{product.manufacturer}</p>
                    <p>{product.cateogory}</p>
                </div>
            );
    });

    return (
        <div>
            <p>{name}</p>
            <p>{displayProduct}</p>
        </div>
    );
}
