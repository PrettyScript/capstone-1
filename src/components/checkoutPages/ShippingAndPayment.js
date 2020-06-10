import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function ShippingAndPayment() {
    return (
        <div>
            <Fragment>
                <Typography variant="h6" gutterBottom>
                    Tell Us About Yourself
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            fullWidth
                            autoComplete="billing address-line1"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="billing address-level2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="zip"
                            name="zip"
                            label="Zip / Postal Code"
                            fullWidth
                            autoComplete="billing postal-code"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="billing country"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="password"
                            name="password"
                            label="Choose a Password"
                            fullWidth
                            autoComplete="password"
                            type="password"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="validatePassword"
                            name="validatePassword"
                            label="Re-Enter Password"
                            fullWidth
                            autoComplete="password"
                            type="password"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="SSN"
                            name="SSN"
                            label="Social Security Number"
                            fullWidth
                            autoComplete="SSN"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="verifySSN"
                            name="verifySSN"
                            label="Re-Enter Social Security Number"
                            fullWidth
                            autoComplete="SSN"
                        />
                    </Grid>
                </Grid>
            </Fragment>
        </div>
    );
}
