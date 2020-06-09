import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
import Checkout from "./components/Checkout";

function App() {
    const [products, setProducts] = useState([
        {
            name: "apple",
            serialNumber: 12345,
            price: 1,
            manufacturer: "CC",
            cateogory: "clothing",
            quantity: 1
        },
        {
            name: "bananas",
            serialNumber: 23456,
            price: 1,
            manufacturer: "CC",
            cateogory: "clothing",
            quantity: 1
        },
        {
            name: "carrots",
            serialNumber: 34567,
            price: 1,
            manufacturer: "CC",
            cateogory: "clothing",
            quantity: 1
        },
        {
            name: "donuts",
            serialNumber: 45678,
            price: 1,
            manufacturer: "CC",
            cateogory: "clothing",
            quantity: 1
        },
        {
            name: "eggplant",
            serialNumber: 56789,
            price: 1,
            manufacturer: "CC",
            cateogory: "clothing",
            quantity: 1
        }
    ]);

    const [shoppingCart, setShoppingCart] = useState([
        {
            name: "productName4",
            serialNumber: 45678,
            price: 1,
            manufacturer: "CC",
            cateogory: "clothing",
            quantity: 5
        },
        {
            name: "productName5",
            serialNumber: 56789,
            price: 1,
            manufacturer: "CC",
            cateogory: "clothing",
            quantity: 5
        }
    ]);

    const [inputValue, setInputValue] = useState("");
    const [filteredProducts, setFilteredProduct] = useState([]);
    const [isFiltered, setIsFiltered] = useState(true);

    const productFilter = () => {
        // console.log("Hey from App js", e.target.value);

        setFilteredProduct(
            products.filter(product => product.name.includes(inputValue))
        );
        setIsFiltered(true);
    };

    const handleSetInputValue = () => {
        if (inputValue !== document.getElementById("searchBar").value) {
            setIsFiltered(false);
            setInputValue(document.getElementById("searchBar").value);
        }
    };

    useEffect(() => {
        handleSetInputValue();
        if (!isFiltered) {
            productFilter();
        }
    });

    const handleAddingItemsToCart = product => {
        // update the cart badge
        console.log("added");
        if (shoppingCart.includes(product)) {
            if (product.quantity < 5) {
                product.quantity++;
                setShoppingCart(shoppingCart);
            } else {
                setMaxQuantityReached(true);
                console.log("You reached your max!!");
            }
        } else {
            setShoppingCart([...shoppingCart, product]);
        }
    };

    const [maxQuantityReached, setMaxQuantityReached] = useState(false);

    // useEffect(() => {
    //     searchProductRequest();
    // });

    // const searchProductRequest = () => {
    //     console.log("searching...");
    //     products.filter(product => product.name === inputValue);
    // };

    return (
        <Router>
            <div className="App">
                <Navbar
                    productFilter={productFilter}
                    inputValue={inputValue}
                    handleSetInputValue={handleSetInputValue}
                    // searchProductRequest={searchProductRequest}
                />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Home
                                shoppingCart={shoppingCart}
                                setShoppingCart={setShoppingCart}
                                products={products}
                                setProducts={setProducts}
                                filteredProducts={filteredProducts}
                                handleAddingItemsToCart={
                                    handleAddingItemsToCart
                                }
                                maxQuantityReached={maxQuantityReached}
                                setMaxQuantityReached={setMaxQuantityReached}
                                inputValue={inputValue}
                            />
                        )}
                    />
                    <Route
                        path="/cart"
                        render={() => (
                            <ShoppingCart
                                shoppingCart={shoppingCart}
                                setShoppingCart={setShoppingCart}
                                products={products}
                                setProducts={setProducts}
                            />
                        )}
                    />

                    <Route
                        path="/products/:name"
                        render={props => (
                            <ProductDetails
                                {...props}
                                shoppingCart={shoppingCart}
                                setShoppingCart={setShoppingCart}
                                products={products}
                                setProducts={setProducts}
                            />
                        )}
                    />
                    <Route path="/checkout" component={Checkout} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
