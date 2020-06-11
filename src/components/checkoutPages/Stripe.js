import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "../../styles/Stripe.css";

export default function Stripe(props) {
    const {
        activeStep,
        setActiveStep,
        setPaymentSubmitted,
        setShoppingCart,
        shoppingCart
    } = props;

    const handleToken = (token, addresses) => {
        console.log({ token, addresses });
        setActiveStep(activeStep + 1);
        setPaymentSubmitted(true);
        shoppingCart.map(product => (product.quantity = 1));
        setShoppingCart([]);
    };

    return (
        <div>
            <StripeCheckout
                className="stripe"
                stripeKey="pk_test_51GsJLXAAc67suevO3aMIeQsubPYAiRawpoNi6pCQtOhEqRTjZr5ddwAOgGD28nEzENOdVQmhmptu74Ej2Pj8h9DW00CV9pXH69"
                token={handleToken}
            />
        </div>
    );
}
