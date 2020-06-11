import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Product from "./Product";
import Button from "@material-ui/core/Button";

export default function Home(props) {
    const {
        products,
        setProducts,
        filteredProducts,
        handleAddingItemsToCart,
        inputValue
    } = props;

    // Home: the search bar is displayed on this page(component), the first if check
    // is to check the input value, if input value is greater than 0 and the products that are filtered equal 0 (that product is not available). If the product name is available then the corresponding products will display.

    // Home: listOfProducts (inventory) is mapped by the product, the product component wrapped in
    // a dynamic link will display the image, the price and an add to cart button.
    const displayProducts = listOfProducts => {
        return inputValue.length > 0 && filteredProducts.length === 0 ? (
            <p>That product is not available</p>
        ) : (
            <div className="productContainer">
                {listOfProducts.map(product => (
                    <div className="products">
                        <Link
                            to={`/products/${product.name}`}
                            className="products"
                        >
                            <Product
                                key={product.id}
                                product={product}
                                products={products}
                                setProducts={setProducts}
                            />
                        </Link>
                        <p>${product.price.toFixed(2)}</p>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                handleAddingItemsToCart(product);
                            }}
                        >
                            Add to cart
                        </Button>
                    </div>
                ))}
            </div>
        );
    };

    // search bar & home: first function is if the search bar is in use if not, then the products are
    // displayed normally
    return (
        <div>
            {(filteredProducts.length > 0 &&
                displayProducts(filteredProducts)) ||
                displayProducts(products)}
        </div>
    );
}
