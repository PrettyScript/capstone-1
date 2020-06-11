import React from "react";
import Product from "./Product";
import Button from "@material-ui/core/Button";
import "../styles/ProductDetails.css";

export default function ProductDetails(props) {
    const { products, match, handleAddingItemsToCart, product } = props;

    const { name } = match.params;
    console.log(name, products);

    const displayProduct = products.map(product => {
        if (name == product.name)
            return (
                <div className="productDetails">
                    <Product
                        key={product.id}
                        product={product}
                        products={products}
                    />
                    <div className="info">
                        <p>Serial Number: {product.serialNumber}</p>
                        <p>Manufacturer: {product.manufacturer}</p>
                        <p>Cateogory: {product.cateogory}</p>
                    </div>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            handleAddingItemsToCart(product);
                        }}
                    >
                        Add to Cart
                    </Button>
                </div>
            );
    });

    return (
        <div>
            <p>{displayProduct}</p>
        </div>
    );
}
