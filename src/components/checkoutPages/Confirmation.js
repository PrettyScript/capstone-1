import React from "react";
import "../../styles/Confirmation.css";

export default function Confirmation() {
    const generateOrderReferenceNumber = () => {
        let min = 10000;
        let max = 99999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const handleTodaysDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0");
        let yyyy = today.getFullYear();
        return (today = mm + "/" + dd + "/" + yyyy);
    };
    return (
        <div>
            <h1>Thank You!</h1>
            <p>
                We are getting started on your order right away, you will
                recieve an order confirmation shortly.
            </p>
            <h2>Order Details - {generateOrderReferenceNumber()}</h2>

            <div className="orderContainer">
                <div>
                    <h3>Email</h3>
                    <p>janedoe@gmail.com</p>
                    <h3>Payment Method</h3>
                    <p>Stripe</p>
                    <h3>Order Date</h3>
                    <p>{handleTodaysDate()}</p>
                </div>
                <div>
                    <h3>Delivery Options</h3>
                    <p>Standard</p>
                    <h3>Delivery Address</h3>
                    <p>1725 Slough Avenue Scranton, PA</p>
                    <h3>Contact Number</h3>
                    <p>(123)456-9898</p>
                </div>
            </div>
        </div>
    );
}
