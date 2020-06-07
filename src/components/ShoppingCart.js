import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
    const [cart, setCart] = useState([
        { name: "product1", id: 1, price: 4, quantity: 1 },
        { name: "product2", id: 2, price: 2, quantity: 2 },
        { name: "product3", id: 3, price: 10, quantity: 3 }
    ]);

    const [total, setTotal] = useState(38);

    const handleTotalPrice = () => {
        let newTotal = 0;
        cart.map(product => {
            newTotal += product.price * product.quantity;
        });
        setTotal(newTotal);
    };

    const handleDeleteProduct = itemToBeRemoved => {
        setCart(cart.filter(product => product.name !== itemToBeRemoved.name));
        setTotal(total - itemToBeRemoved.price * itemToBeRemoved.quantity);
    };

    const handleChangeQuantity = (productId, product) => {
        let selectedValue = document.getElementById(productId).value;
        product.quantity = parseInt(selectedValue);
        setCart(cart);
        handleTotalPrice();
        console.log(`You have ${product.quantity} in your cart.`);
    };

    const handleCartTotalQuanity = () => {
        let cartTotal = 0;
        cart.map(product => {
            cartTotal += product.quantity;
        });
        return cartTotal;
    };

    const handleCartItems = () => {
        if (cart.length == 0) {
            return <p>Your cart is empty, go shopping!</p>;
        } else {
            return (
                <div>
                    <p>{`Your cart has ${handleCartTotalQuanity()} items in it!`}</p>{" "}
                    {cart.map(product => (
                        <div>
                            <p>{product.name}</p>
                            <p>{`$${product.price}`}</p>
                            <select
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
                            <button
                                onClick={() => {
                                    handleDeleteProduct(product);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    <p>{`Your total is $${total}`}</p>
                    <Link to="/checkout">Proceed to Checkout</Link>
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
