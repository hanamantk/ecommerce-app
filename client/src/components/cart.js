import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "@material-ui/lab";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const googleIcon = "../../images/google_icon.svg";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    width: "85%",
    justifyContent: "space-between",
    margin: "auto 2rem auto auto",
  },
  cartDetails: {
    padding: 16,
    width: "68%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: `1px solid ${theme.palette.common.grey}`,
  },
  cart: {
    padding: "1rem",
    border: `1px solid ${theme.palette.common.grey}`,
  },
}));

export default function Cart(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [Total, setTotal] = useState(0);
  const theme = useTheme();
  const { Qty, cartItems,totalPrice } = useSelector((state) => state.cart);
  useEffect(() => {
    setTotal(totalPrice);
  }, []);

  function proceedToBuy(product) {
    //dispatch(addToCart(Qty + 1));
  }
  return (
    <React.Fragment>
      <div className={` ${classes.main} `}>
        <div className={classes.cartDetails}>
          <ul style={{ listStyleType: "none" }}>
            {cartItems.map((itm) => (
              <div>
                <li style={{ color: "blue", fontSize: 22 }}>{itm.name}</li>
                <li style={{ color: theme.palette.common.green1 }}>
                  {itm.inStock ? "in stock" : "Out of stock"}
                </li>
              </div>
            ))}
          </ul>
          <span style={{ fontSize: 22 }}>Qty : {Qty}</span>
          <span
            style={{
              fontWeight: theme.typography.fontWeightMedium,
              color: theme.palette.common.darkRed,
              fontSize: 22,
            }}
          >
            ₹ {Total}.00
          </span>
        </div>
        <div className={classes.cart}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Alert severity="success">
                Your order is eligible for FREE delivery
              </Alert>{" "}
            </li>
            <li
              style={{ color: theme.typography.fontWeightMedium, fontSize: 22 }}
            >
              {` Subtotal (${Qty} item):`}
            </li>
            <li
              style={{
                fontWeight: theme.typography.fontWeightBold,
                fontSize: 22,
              }}
            >
              ₹ {Total}.00
            </li>
            <li>
             <Link style={{ textDecoration: "none" }} to="/buy/address"> <Button
                style={{ width: "100%", marginTop: 16 }}
                type="submit"
                variant="contained"
                color="primary"
                onClick={(e) => proceedToBuy()}
              >
                {`Proceed to Buy`}
              </Button></Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
