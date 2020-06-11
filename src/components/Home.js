import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Product from "./Product";
import Button from "@material-ui/core/Button";

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
            <div className="productContainer">
                {listOfProducts.map(product => (
                    <div className="products">
                        <Link
                            to={`/products/${product.name}`}
                            className="products"
                        >
                            <Product
                                key={product.id}
                                product={product}
                                products={products}
                                setProducts={setProducts}
                            />
                        </Link>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                handleAddingItemsToCart(product);
                            }}
                        >
                            Add to cart
                        </Button>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            {(filteredProducts.length > 0 &&
                displayProducts(filteredProducts)) ||
                displayProducts(products)}
        </div>
    );
}

// <header className="App-header">
//                 <h1>Limited Stock</h1>
//             </header>
