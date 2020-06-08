import React, { useEffect } from "react";

export default function ProductDetails(props) {
    const { products, match } = props;

    //TODO: how can I get the page to dynamically display different data?

    useEffect(() => {
        // Update the document title using the browser API
        console.log(match);
    });

    let product = products[0];

    return (
        <div>
            <h2>Details for: {product.name} </h2>
            <p>{`Price: $${product.price}`}</p>
            <p>{`Serial Number:${product.serialNumber}`}</p>
            <p>{`Manufacturer: ${product.manufacturer}`}</p>
            <p>{`Cateogory: ${product.cateogory}`}</p>
        </div>
    );
}
