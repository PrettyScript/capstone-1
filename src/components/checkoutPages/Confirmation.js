import React from "react";

export default function Confirmation() {
    const generateOrderReferenceNumber = () => {
        let min = 10000;
        let max = 99999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return (
        <div>
            <h1>Thank You!</h1>
            <p>
                We are getting started on your order right away, you will
                recieve an order confirmation shortly.
            </p>

            <div>
                <h3>Order Details - {generateOrderReferenceNumber()}</h3>
                <div>
                    <h2>Email</h2>
                    <p>janedoe@gmail.com</p>
                    <h2>Payment Method</h2>
                    <p>Stripe</p>
                    <h2>Order Date</h2>
                    <p>Todays Date</p>
                </div>
                <div>
                    <h2>Delivery Options</h2>
                    <p>Standard</p>
                    <h2>Delivery Address</h2>
                    <p>1725 Slough Avenue Scranton, PA</p>
                    <h2>Contact Number</h2>
                    <p>1234569898</p>
                </div>
            </div>
        </div>
    );
}
