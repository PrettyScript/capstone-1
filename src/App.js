import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
import Checkout from "./components/Checkout";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cart" component={ShoppingCart} />

                    <Route
                        path="/products/:id"
                        render={() => <ProductDetails />}
                    />
                    <Route path="/checkout" component={Checkout} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
