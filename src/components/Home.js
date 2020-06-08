import React from "react";
import "../Home.css";
import Product from "./Product";

export default function Home(props) {
    const { shoppingCart, setShoppingCart, products, setProducts } = props;

    const handleAddingItemsToCart = product => {
        // click button and add items to cart
        // update the cart badge
        console.log("added");
        setShoppingCart([...shoppingCart, product]);
    };

    return (
        <div>
            <header className="App-header">
                <h1>[Place Ad here]</h1>
            </header>
            {products.map(product => (
                <div>
                    <Product
                        key={product.id}
                        product={product}
                        products={products}
                        setProducts={setProducts}
                    />
                    <button
                        onClick={() => {
                            handleAddingItemsToCart(product);
                        }}
                    >
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
}
