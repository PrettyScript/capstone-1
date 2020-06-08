import React, { useState } from "react";
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
            name: "productName1",
            serialNumber: 12345,
            price: 10,
            manufacturer: "CC",
            cateogory: "clothing",
            quantity: 0
        },
        {
            name: "productName2",
            serialNumber: 23456,
            price: 8,
            manufacturer: "CC",
            cateogory: "clothing",
            quantity: 0
        },
        {
            name: "productName3",
            serialNumber: 34567,
            price: 4,
            manufacturer: "CC",
            cateogory: "clothing",
            quantity: 0
        },
        {
            name: "productName4",
            serialNumber: 45678,
            price: 23,
            manufacturer: "CC",
            cateogory: "clothing",
            quantity: 0
        },
        {
            name: "productName5",
            serialNumber: 56789,
            price: 16,
            manufacturer: "CC",
            cateogory: "clothing",
            quantity: 0
        }
    ]);

    const [shoppingCart, setShoppingCart] = useState([
        {
            name: "productName4",
            serialNumber: 45678,
            price: 23,
            manufacturer: "CC",
            cateogory: "clothing",
            quantity: 5
        },
        {
            name: "productName5",
            serialNumber: 56789,
            price: 16,
            manufacturer: "CC",
            cateogory: "clothing",
            quantity: 5
        }
    ]);

    return (
        <Router>
            <div className="App">
                <Navbar
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                    products={products}
                    setProducts={setProducts}
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
                        render={() => <ProductDetails products={products} />}
                    />
                    <Route path="/checkout" component={Checkout} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
