import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route
                        exact
                        path="/shoppingcart"
                        component={ShoppingCart}
                    />
                    <Route path="/" component={Home} />
                    <Route
                        path="/products/:id"
                        // component={ProductDetails}
                        render={() => <ProductDetails />}
                    />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
