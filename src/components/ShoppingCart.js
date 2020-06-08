import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ShoppingCart(props) {
    const { shoppingCart, setShoppingCart, products, setProducts } = props;

    const [total, setTotal] = useState(0);

    const handleTotalPrice = () => {
        let newTotal = 0;
        shoppingCart.map(product => {
            newTotal += product.price * product.quantity;
        });
        setTotal(newTotal);
    };

    const handleDeleteProduct = itemToBeRemoved => {
        setShoppingCart(
            shoppingCart.filter(
                product => product.name !== itemToBeRemoved.name
            )
        );
        setTotal(total - itemToBeRemoved.price * itemToBeRemoved.quantity);
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

    const handleCartItems = () => {
        if (shoppingCart.length == 0) {
            return <p>Your cart is empty, go shopping!</p>;
        } else {
            return (
                <div>
                    <p>{`Your cart has ${handleCartTotalQuanity()} items in it!`}</p>{" "}
                    {shoppingCart.map(product => (
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
