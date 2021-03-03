import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: theme.spacing(15),
    margin: "auto",
  },
  cart: {
    padding: "1rem",
    border: `1px solid ${theme.palette.common.grey}`,
  },
}));

export default function OrderSummury(props) {
  const classes = useStyles();
  const [Total, setTotal] = useState(0);
  const userInfo = useSelector((state) => state.userInfo);
  const theme = useTheme();

  const { Qty, cartItems, totalPrice } = useSelector((state) => state.cart);
  useEffect(() => {
    if (userInfo && userInfo.token) {
      setTotal(totalPrice);
    } else {
      props.history.push("/login");
    }
  }, []);

  function makePayment(e) {}

  return (
    <React.Fragment>
      <div className={classes.center}>
        <h3
          style={{
            fontWeight: theme.typography.fontWeightBold,
            fontSize: 18,
          }}
        >
          ORDER SUMMARY
        </h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>{` Subtotal (${Qty} item):`}</li>
          <li>₹ {Total}.00</li>
          <li>
            <Button
              type="submit"
              fullWidth={true}
              style={{ marginTop: 32 }}
              variant="contained"
              color="primary"
              onClick={(e) => makePayment()}
            >
              Place Order
            </Button>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
