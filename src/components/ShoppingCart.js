import React, { useState } from "react";

export default function ShoppingCart() {
    const [cart, setCart] = useState([
        { name: "product1", id: 1, price: 4, quantity: 1 },
        { name: "product2", id: 2, price: 2, quantity: 2 },
        { name: "product3", id: 3, price: 10, quantity: 3 }
    ]);

    const handleTotalPrice = () => {
        let total = 0;

        cart.map(product => {
            total += product.price;
        });
        return total;
    };

    const handleDeleteProduct = itemToBeRemoved => {
        setCart(cart.filter(product => product.name != itemToBeRemoved));
    };

    const handleChangeQuantity = (productId, product) => {
        let selectedValue = document.getElementById(productId).value;
        console.log(selectedValue);
        product.quantity = selectedValue;
    };

    const handleCartItems = () => {
        if (cart.length == 0) {
            return <p>Your cart is empty, go shopping!</p>;
        } else {
            return (
                <div>
                    <p>{`Your cart has ${cart.length} items in it`}</p>{" "}
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
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <button
                                onClick={() => {
                                    handleDeleteProduct(product.name);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    <p>{`Your total is $${handleTotalPrice()}`}</p>
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
