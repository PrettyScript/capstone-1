import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import Button from "@material-ui/core/Button";
import "../styles/ShoppingCart.css";

export default function ShoppingCart(props) {
    const {
        shoppingCart,
        setShoppingCart,
        products,
        setProducts,
        handleTotalPrice,
        handleChangeQuantity,
        handleCartTotalQuantity,
        total,
        setTotal,
        totalItems,
        setTotalItems
    } = props;

    // shoppingCart: resolves the totalPrice being reflected before you even get to the shopping cart page
    useEffect(() => {
        handleTotalPrice();
    });

    // shoppingCart: this is an onclick on a button that will remove a product from the shopping cart
    // the button takes in the parameter of the product that will be removed, that product is filtered by
    // its name and returns a "new" shoppingCart without that product. Because there is a change in the cart
    // the total and the total items' state have to be updated to reflect that change.
    const handleDeleteProduct = itemToBeRemoved => {
        setShoppingCart(
            shoppingCart.filter(
                product => product.name !== itemToBeRemoved.name
            )
        );
        setTotal(total - itemToBeRemoved.price * itemToBeRemoved.quantity);
        setTotalItems(totalItems - itemToBeRemoved.quantity);
    };

    // shoppingCart: the first if check shows a message to go shopping, if the shopping cart has no products
    // in it. If there are products in the cart then the shoppingCart is mapped by each product and
    // displays: the product wrapped in a dynamic link, product component(which displays the product name,
    // price of the product and a dropdown option to increase/decrease the amount of an individual product.

    const handleCartItems = () => {
        if (shoppingCart.length == 0) {
            return <p>Your cart is empty, go shopping!</p>;
        } else {
            return (
                <div className="shoppingCartContainer">
                    <p className="cartTotalQuantity">{`Your cart has ${handleCartTotalQuantity()} item(s) in it!`}</p>{" "}
                    {shoppingCart.map(product => (
                        <div className="products">
                            <Link
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
