import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { increament_qty } from "../actions/cart";
import { decreament_qty } from "../actions/cart";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    width: "85%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "auto 2rem auto auto",
  },
  cartDetails: {
    padding: 16,
    width: "68%",
    display: "flex",
    justifyContent: "space-between",
    listStyleType: "none",
    alignItems: "center",
    border: `1px solid ${theme.palette.common.grey}`,
  },
  cart: {
    padding: "1rem",
    border: `1px solid ${theme.palette.common.grey}`,
  },
  mrgin: {
    margin: "16px",
  },
}));

export default function Cart(props) {
  const classes = useStyles();

  const theme = useTheme();
  const dispatch = useDispatch();
  const { Qty, cartItems, totalPrice } = useSelector((state) => state.cart);
  const [Total, setTotal] = useState(totalPrice);
  const userInfo = useSelector((state) => state.userInfo);
  useEffect(() => {
    setTotal(totalPrice);
  }, [totalPrice]);

  function proceedToBuy(product) {
    if (userInfo && userInfo.token) {
      //navigate to payment page
    } else {
      props.history.push("/login");
    }
  }
  function decQty(product) {
    dispatch(decreament_qty(product));
  }
  function incQty(product) {
    dispatch(increament_qty(product));
  }
  return (
    <React.Fragment>
      <div className={` ${classes.main} `}>
        {cartItems.map((product, i) => (
          <React.Fragment key={i}>
            <ul className={classes.cartDetails}>
              <li style={{ color: "blue", fontSize: 22 }}>
                <div>{product.name}</div>
                <span style={{ color: theme.palette.common.green1 }}>
                  {product.inStock ? " in stock" : " Out of stock"}
                </span>
              </li>

              <li style={{ fontSize: 22 }}>
                Qty :
                <Button
                  className={classes.mrgin}
                  onClick={(e) => decQty(product)}
                  variant="contained"
                  color="primary"
                >
                  -
                </Button>
                {product.selectedQty}
                <Button
                  className={classes.mrgin}
                  onClick={(e) => incQty(product)}
                  variant="contained"
                  color="primary"
                >
                  +
                </Button>
              </li>
              <li style={{ fontSize: 22 }}>Price : {product.qtyprice}</li>
            </ul>
            <br />
          </React.Fragment>
        ))}

        <div className={classes.cart}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
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
              <Button
                style={{ width: "100%", marginTop: 16 }}
                type="submit"
                variant="contained"
                color="primary"
                onClick={(e) => proceedToBuy()}
              >
                {`Proceed to Buy`}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
