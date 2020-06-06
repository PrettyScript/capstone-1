import React, { useState } from "react";
import "../Home.css";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

export default function Home() {
    const [products, setproducts] = useState([
        { name: "product1", id: 1 },
        { name: "product2", id: 2 },
        { name: "product3", id: 3 }
    ]);

    return (
        <div>
            <header className="App-header">
                <h1>[Place Ad here]</h1>
            </header>
            {products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    products={products}
                    setproducts={setproducts}
                />
            ))}
        </div>
    );
}
