import React, { useEffect } from "react";

export default function ProductDetails(props) {
    const { product } = props;

    // useEffect(() => {});

    const { match } = props;
    const productId = match.params.id;

    return (
        <div>
            <h2>Details for: {productId}</h2>
        </div>
    );
}
