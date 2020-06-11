import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Product from "../Product";
import "../../styles/ShoppingCart.css";
import "../../styles/Summary.css";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    },
    summaryItem: {
        display: "flex",
        justifyContent: "space-between"
    },
    expansion: {
        backgroundColor: "#F7EDE2"
    }
}));

export default function Summary(props) {
    const classes = useStyles();

    const { products, shoppingCart } = props;

    return (
        <div className={classes.root}>
            {shoppingCart.map(product => (
                <ExpansionPanel className={classes.expansion}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            <div className="shoppingCartProduct">
                                <Product
                                    key={product.id}
                                    product={product}
                                    products={products}
                                />
                                <p>x {product.quantity} </p> <span />
                                <p>${product.price * product.quantity}</p>
                            </div>
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
        </div>
    );
}
