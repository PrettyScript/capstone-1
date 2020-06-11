import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "../styles/ShoppingCart.css";

export default function ShoppingCart(props) {
    const {
        shoppingCart,
        setShoppingCart,
        products,
        setProducts,
        handleTotalPrice,
        handleChangeQuantity,
        handleCartTotalQuanity,
        total,
        setTotal,
        totalItems,
        setTotalItems
    } = props;

    useEffect(() => {
        handleTotalPrice();
    });

    const handleDeleteProduct = itemToBeRemoved => {
        setShoppingCart(
            shoppingCart.filter(
                product => product.name !== itemToBeRemoved.name
            )
        );
        setTotal(total - itemToBeRemoved.price * itemToBeRemoved.quantity);
        setTotalItems(totalItems - itemToBeRemoved.quantity);
    };

    const handleCartItems = () => {
        if (shoppingCart.length == 0) {
            return <p>Your cart is empty, go shopping!</p>;
        } else {
            return (
                <div className="shoppingCartContainer">
                    <p className="cartTotalQuantity">{`Your cart has ${handleCartTotalQuanity()} items in it!`}</p>{" "}
                    {shoppingCart.map(product => (
                        <div className="products">
                            <Link
                                // style={{ textDecoration: "none" }}
                                to={`/products/${product.name}`}
                                className="shoppingCartProduct"
                            >
                                <Product
                                    key={product.id}
                                    product={product}
                                    products={products}
                                    setProducts={setProducts}
                                />
                            </Link>
                            <p>{`$${product.price}`}</p>
                            <select
                                className="cartSelect"
                                id={`${product.name}-select`}
                                onChange={() =>
                                    handleChangeQuantity(
                                        `${product.name}-select`,
                                        product
                                    )
                                }
                            >
                                {[1, 2, 3, 4, 5].map(value =>
                                    value !== product.quantity ? (
                                        <option>{value}</option>
                                    ) : (
                                        <option selected>{value}</option>
                                    )
                                )}
                            </select>
                            <Button
                                color="primary"
                                className="selectButton"
                                onClick={() => {
                                    handleDeleteProduct(product);
                                }}
                            >
                                Delete
                            </Button>
                        </div>
                    ))}
                    <p>{`Your total is $${total}`}</p>
                    <Button variant="contained" color="primary">
                        <Link className="proceedToCheckbox" to="/checkout">
                            Proceed to Checkout
                        </Link>
                    </Button>
                </div>
            );
        }
    };

    return (
        <div>
            <h1>Your Shopping Cart</h1>
            {handleCartItems()}
        </div>
    );
}
