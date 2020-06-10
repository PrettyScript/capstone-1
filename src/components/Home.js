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
        filteredProducts,
        handleAddingItemsToCart,
        maxQuantityReached,
        setMaxQuantityReached,
        inputValue
    } = props;

    const displayProducts = listOfProducts => {
        return inputValue.length > 0 && filteredProducts.length === 0 ? (
            <p>That product is not available</p>
        ) : (
            listOfProducts.map(product => (
                <div>
                    <Link to={`/products/${product.name}`}>
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
            ))
        );
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
