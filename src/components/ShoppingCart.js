import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        setTotal
    } = props;

    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        handleTotalPrice();
        console.log(total);
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
