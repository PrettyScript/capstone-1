import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
import Checkout from "./components/Checkout";

import inventory from "./inventory";

const AppTheme = createMuiTheme({
    palette: {
        primary: {
            main: red[200],
            contrastText: red[50]
        }
    }
});

function App() {
    const [products, setProducts] = useState(inventory);

    const [shoppingCart, setShoppingCart] = useState([]);

    const [inputValue, setInputValue] = useState("");
    const [filteredProducts, setFilteredProduct] = useState([]);
    const [isFiltered, setIsFiltered] = useState(true);
    const [totalItems, setTotalItems] = useState(0);
    const [consumerName, setConsumerName] = useState();
    const [consumerEmail, setConsumerEmail] = useState();
    const [consumerAddress, setConsumerAddress] = useState();
    const [consumerContactNumber, setConsumerContactNumber] = useState();
    const [maxQuantityReached, setMaxQuantityReached] = useState(false);
    const [total, setTotal] = useState(0);

    // search bar : useEffect took care of the lagging of input value
    // the product filter function will run when filter is false
    // isFilter initial state is true
    useEffect(() => {
        handleSetInputValue();
        // prevents infinite while loop
        if (!isFiltered) {
            productFilter();
        }
    });

    // search bar: sets the user input value when the input value state variable does not equal the search
    // bar value, this function keeps the inputValue and the searchbar value in sync.
    // input's initial state is an empty string
    const handleSetInputValue = () => {
        if (inputValue !== document.getElementById("searchBar").value) {
            setIsFiltered(false);
            setInputValue(document.getElementById("searchBar").value);
        }
    };

    // search bar: sets the FilteredProduct array to contain elements
    // that match the provided search input value. Added .toLowerCase()
    // to make the function case-insensitive. If no filter provided, ALL
    // products are shown
    const productFilter = () => {
        setFilteredProduct(
            products.filter(product =>
                product.name
                    .replace(/-/g, " ")
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
            )
        );
        setIsFiltered(true);
    };

    // shoppingCart: add products to the cart by an add to cart button that accounts for the,
    // product that is being added. There is a conditional to check if a product is
    // already in the cart, if a product is already
    // in the cart then that quantity is increased (+1), and there is additional check
    // that a user cannot exceed the alloted quantity of 5. If the max number of 5 is reached then
    // the additional products will not be added to the cart. For any product that hasn't been
    // added to cart will then be added to the cart.
    const handleAddingItemsToCart = product => {
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

    // shoppingCart: maps through the products in the shopping cart and multiples the price to the quantity of each product and the results of the multiplication is then added to the newTotal which then sets
    // the total
    const handleTotalPrice = () => {
        let newTotal = 0;
        shoppingCart.map(product => {
            newTotal += product.price * product.quantity;
        });
        setTotal(newTotal.toFixed(2));
    };

    // shoppingCart: takes care of the change in quantity in the cart, in the case of
    // adding/subtracting products from your cart, when this function run, the handleTotalPrice
    // also runs so that the total price is reflected as well
    const handleChangeQuantity = (productId, product) => {
        let selectedValue = document.getElementById(productId).value;
        product.quantity = parseInt(selectedValue);
        setShoppingCart(shoppingCart);
        handleTotalPrice();
    };

    // shoppingCart: displays the total products in the shopping cart
    // shopping cart is mapped and the product.quantity of each product is added to the cartTotal
    const handleCartTotalQuantity = () => {
        let cartTotal = 0;
        shoppingCart.map(product => {
            cartTotal += product.quantity;
        });
        return cartTotal;
    };

    //shoppingCart: shoppingCart is mapped by it's product, the first check is, if the amount of products exceeds
    // the available products in inventory then the names of the product(s) is pushed to a new array called soldOutItem
    // else the products that are being sold is subtracted from the inventory and the inventory is updated.  The second if check
    // is in the case that there are products in the soldOutItems array, depending on the length of the array the alert will
    // return a plural/non-plural sentence.
    const handleInventory = () => {
        let soldOutItems = [];
        shoppingCart.map(product => {
            if (product.quantity > product.availableUnits) {
                soldOutItems.push(product.name);
            } else {
                product.availableUnits =
                    product.availableUnits - product.quantity;

                setProducts(products);
                console.log(shoppingCart);
            }
        });
        if (soldOutItems.length > 1) {
            alert(`${soldOutItems.join(", ")} are sold out!`);
            shoppingCart.map(product => (product.quantity = 1));
            setShoppingCart([]);
        } else if (soldOutItems.length == 1) {
            alert(`${soldOutItems[0]} is sold out!`);
            shoppingCart.map(product => (product.quantity = 1));
            setShoppingCart([]);
        }
        soldOutItems = [];
        return true;
    };

    return (
        <ThemeProvider theme={AppTheme}>
            <Router>
                <div className="App">
                    <Navbar
                        productFilter={productFilter}
                        inputValue={inputValue}
                        handleSetInputValue={handleSetInputValue}
                        shoppingCart={shoppingCart}
                        handleCartTotalQuantity={handleCartTotalQuantity}
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
                                    setMaxQuantityReached={
                                        setMaxQuantityReached
                                    }
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
                                    handleCartTotalQuantity={
                                        handleCartTotalQuantity
                                    }
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
                                <Checkout
                                    handleInventory={handleInventory}
                                    shoppingCart={shoppingCart}
                                    setShoppingCart={setShoppingCart}
                                    products={products}
                                    setProducts={setProducts}
                                    handleTotalPrice={handleTotalPrice}
                                    handleChangeQuantity={handleChangeQuantity}
                                    handleCartTotalQuantity={
                                        handleCartTotalQuantity
                                    }
                                    total={total}
                                    setTotal={setTotal}
                                    totalItems={totalItems}
                                    setTotalItems={setTotalItems}
                                    consumerName={consumerName}
                                    consumerEmail={consumerEmail}
                                    consumerAddress={consumerAddress}
                                    consumerContactNumber={
                                        consumerContactNumber
                                    }
                                    handleInventory={handleInventory}
                                />
                            )}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
