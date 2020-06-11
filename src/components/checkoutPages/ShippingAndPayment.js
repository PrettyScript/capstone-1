import React, { useState, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import StripeCheckout from "react-stripe-checkout";

export default function ShippingAndPayment() {
    const handleToken = (token, addresses) => {
        console.log({ token, addresses });
    };

    const [consumerInput, setConsumerInput] = useState({});

    const handleConsumerInformation = (key, value) => {
        let info = {};
        info[key] = value;
        setConsumerInput({ ...consumerInput, info });
        console.log(consumerInput);
    };

    return (
        <div>
            <Fragment>
                <Typography variant="h6" gutterBottom>
                    Contact Information
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                            onChange={e =>
                                handleConsumerInformation(
                                    "firstName",
                                    e.target.value
                                )
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="family-name"
                            onChange={e =>
                                handleConsumerInformation(
                                    "lastName",
                                    e.target.value
                                )
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            fullWidth
                            autoComplete="billing address-line1"
                            onChange={e =>
                                handleConsumerInformation(
                                    "deliveryAddress1",
                                    e.target.value
                                )
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            fullWidth
                            autoComplete="billing address-line2"
                            onChange={e =>
                                handleConsumerInformation(
                                    "deliveryAddress2",
                                    e.target.value
                                )
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="billing city"
                            onChange={e =>
                                handleConsumerInformation(
                                    "city",
                                    e.target.value
                                )
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            onChange={e =>
                                handleConsumerInformation(
                                    "state",
                                    e.target.value
                                )
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="zip"
                            name="zip"
                            label="Zip / Postal Code"
                            fullWidth
                            autoComplete="billing postal-code"
                            onChange={e =>
                                handleConsumerInformation(
                                    "postalCode",
                                    e.target.value
                                )
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="billing country"
                            onChange={e =>
                                handleConsumerInformation(
                                    "country",
                                    e.target.value
                                )
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="email"
                            onChange={e =>
                                handleConsumerInformation(
                                    "email",
                                    e.target.value
                                )
                            }
                        />
                    </Grid>
                </Grid>
            </Fragment>
        </div>
    );
}

// <StripeCheckout
//                         className="stripe"
//                         stripeKey="pk_test_51GsJLXAAc67suevO3aMIeQsubPYAiRawpoNi6pCQtOhEqRTjZr5ddwAOgGD28nEzENOdVQmhmptu74Ej2Pj8h9DW00CV9pXH69"
//                         token={handleToken}
//                     />
