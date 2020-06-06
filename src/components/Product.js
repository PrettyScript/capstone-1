import React from "react";
import "../Product.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import ProductDetails from "./ProductDetails";
import NotFound from "./NotFound";

export default function Product(props) {
    const { products, setproducts, product } = props;

    const handleProductPage = () => {
        // console.log(`Redirect to product's page`);
        // return <Redirect to="/key" />;
    };

    const { match } = props;

    const renderProducts = () => {
        let productId = parseInt(match.params.id);
        let foundProduct = products.find(product => product.id === productId);
        return foundProduct ? (
            <ProductDetails product={foundProduct} />
        ) : (
            <NotFound />
        );
    };

    return (
        <div>
            <Link to={`/products/${product.name}`}>
                <p className="product">{product.name}</p>
            </Link>
        </div>
    );
}
