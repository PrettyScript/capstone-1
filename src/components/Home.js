import React, { useState } from "react";
import "../Home.css";
import Product from "./Product";

export default function Home() {
    const [products, setproducts] = useState([
        "product 1",
        "product 2",
        "product 3",
        "product 4"
    ]);

    const handleProductPage = () => {
        console.log(`Redirect to product's page`);
    };
    return (
        <div>
            <header className="App-header">
                <h1>[Place Ad here]</h1>
            </header>
            {products.map(product => (
                <Product
                    key={product}
                    productName={product}
                    products={products}
                    setproducts={setproducts}
                />
            ))}
        </div>
    );
}
