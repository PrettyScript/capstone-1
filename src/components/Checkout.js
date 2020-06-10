import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Summary from "./checkoutPages/Summary";
import ShippingAndPayment from "./checkoutPages/ShippingAndPayment";
import Confirmation from "./checkoutPages/Confirmation";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    backButton: {
        marginRight: theme.spacing(1)
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    container: {
        margin: "1rem"
    },
    paper: {
        width: "60vw",
        // height: "60vh",
        margin: "auto",
        padding: theme.spacing(2)
    }
}));

function getSteps() {
    return ["Summary", "Shipping/Payment", "Confirmation"];
}

function getStepContent(stepIndex, products, shoppingCart) {
    switch (stepIndex) {
        case 0:
            return <Summary products={products} shoppingCart={shoppingCart} />;
        case 1:
            return <ShippingAndPayment />;
        case 2:
            return <Confirmation />;
        default:
            return "Unknown stepIndex";
    }
}

export default function Checkout(props) {
    const {
        handleInventory,
        shoppingCart,
        setShoppingCart,
        products,
        setProducts,
        handleTotalPrice,
        handleChangeQuantity,
        handleCartTotalQuanity,
        total,
        setTotal,
        totalItems,
        setTotalItems
    } = props;

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            handleInventory();
        }
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <div className={classes.container}>
                            <Paper className={classes.paper} elevation={3}>
                                All steps completed
                            </Paper>
                        </div>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <div className={classes.container}>
                            <Paper className={classes.paper} elevation={3}>
                                {getStepContent(
                                    activeStep,
                                    products,
                                    shoppingCart
                                )}
                            </Paper>
                        </div>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                            >
                                {activeStep === steps.length - 1
                                    ? "Finish"
                                    : "Next"}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
