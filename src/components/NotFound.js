import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>
                Sorry, we couldn't find this page. But don't worry you can find
                plenty of other things on our{" "}
                <span>
                    <Link to="/">Homepage</Link>
                </span>
            </p>
        </div>
    );
}
