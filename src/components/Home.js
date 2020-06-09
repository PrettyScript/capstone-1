import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";
import Product from "./Product";

export default function Home(props) {
    const {
        shoppingCart,
        setShoppingCart,
        products,
        setProducts,
        filteredProducts
    } = props;

    const handleAddingItemsToCart = product => {
        // click button and add items to cart
        // update the cart badge
        console.log("added");
        setShoppingCart([...shoppingCart, product]);
    };

    const displayProducts = listOfProducts => {
        return listOfProducts.map(product => (
            <div>
                <Link to={`/products/${product.name}`} product={product}>
                    <Product
                        key={product.id}
                        product={product}
                        products={products}
                        setProducts={setProducts}
                    />
                </Link>
                <button
                    onClick={() => {
                        handleAddingItemsToCart(product);
                    }}
                >
                    Add to cart
                </button>
            </div>
        ));
    };

    return (
        <div>
            <header className="App-header">
                <h1>[Place Ad here]</h1>
            </header>
            {(filteredProducts.length > 0 &&
                displayProducts(filteredProducts)) ||
                displayProducts(products)}
        </div>
    );
}
