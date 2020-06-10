import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
import Checkout from "./components/Checkout";

import inventory from "./inventory";

function App() {
    const [products, setProducts] = useState(inventory);

    const [shoppingCart, setShoppingCart] = useState([]);

    const [inputValue, setInputValue] = useState("");
    const [filteredProducts, setFilteredProduct] = useState([]);
    const [isFiltered, setIsFiltered] = useState(true);
    const [totalItems, setTotalItems] = useState(0);

    const productFilter = () => {
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

    const [maxQuantityReached, setMaxQuantityReached] = useState(false);

    const [total, setTotal] = useState(0);

    const handleAddingItemsToCart = product => {
        // update the cart badge
        console.log("added");
        if (shoppingCart.includes(product)) {
            if (product.quantity < 5) {
                product.quantity++;
                setShoppingCart(shoppingCart);
                setTotalItems(totalItems + product.quantity);
            } else {
                setMaxQuantityReached(true);
                console.log("You reached your max!!");
            }
        } else {
            setShoppingCart([...shoppingCart, product]);
        }
    };

    const handleTotalPrice = () => {
        let newTotal = 0;
        shoppingCart.map(product => {
            newTotal += product.price * product.quantity;
        });
        setTotal(newTotal);
    };

    const handleChangeQuantity = (productId, product) => {
        let selectedValue = document.getElementById(productId).value;
        product.quantity = parseInt(selectedValue);
        setShoppingCart(shoppingCart);
        handleTotalPrice();
    };

    const handleCartTotalQuanity = () => {
        let cartTotal = 0;
        shoppingCart.map(product => {
            cartTotal += product.quantity;
        });
        return cartTotal;
    };

    const handleInventory = () => {
        shoppingCart.map(product => {
            if (product.quantity > product.avaiableUnits) {
                console.log("Item is sold out!");
            } else {
                product.avaiableUnits =
                    product.avaiableUnits - product.quantity;
                console.log(shoppingCart);
                setProducts(products);
                console.log(shoppingCart);
            }
        });
    };

    return (
        <Router>
            <div className="App">
                <Navbar
                    productFilter={productFilter}
                    inputValue={inputValue}
                    handleSetInputValue={handleSetInputValue}
                    shoppingCart={shoppingCart}
                    handleCartTotalQuanity={handleCartTotalQuanity}
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
                                handleTotalPrice={handleTotalPrice}
                                handleChangeQuantity={handleChangeQuantity}
                                handleCartTotalQuanity={handleCartTotalQuanity}
                                total={total}
                                setTotal={setTotal}
                                totalItems={totalItems}
                                setTotalItems={setTotalItems}
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
                                handleAddingItemsToCart={
                                    handleAddingItemsToCart
                                }
                            />
                        )}
                    />
                    <Route
                        path="/checkout"
                        render={() => (
                            <Checkout handleInventory={handleInventory} />
                        )}
                    />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
