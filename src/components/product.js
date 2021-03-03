import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { productList } from "../actions/product";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { addToCart } from "../actions/cart";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    width: 1000,
    padding: theme.spacing(2),
    height: "100vh",
    textAlign: "center",
    margin: "auto",
  },
  product: {
    listStyleType: "none",
    display: "flex",
    flexWrap: "wrap",
    padding: 0,
    justifyContent: "space-between",
  },
  list: {
    width: theme.spacing(18),
    height: theme.spacing(22),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
    flexDirection: "column",
    borderBottom: `1px solid ${theme.palette.common.lightGrey}`,
    boxShadow: `2px 2px 5px 2px ${theme.palette.common.lightGrey}`,
  },
  cartBox: {
    width: "70%",
    height: "4.5rem",
    margin: "auto",
    display: "flex",
    padding: "1rem",
    justifyContent: "space-between",
    alignItems: "center",
    border: `1px solid ${theme.palette.common.lightGrey}`,
  },
  cart: {
    width: "10%",
    height: "2.5rem",
    lineHeight: "2.5rem",
    cursor: "pointer",
    fontWeight: theme.typography.fontWeightMedium,
    border: `1px solid ${theme.palette.common.lightGrey}`,
  },
  subTotal: {
    fontSize: "1.2rem",
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

export default function Product() {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const { Qty, cartItems ,totalPrice} = useSelector((state) => state.cart);

  useEffect(() => {
    if (Qty===0)
     dispatch(productList());
  }, []);

  function addCart(product) {
    dispatch(addToCart(product));
  }
  
  return (
    <div className={classes.container}>
      <div>{loading && <Typography variant="h5">Loading...</Typography>}</div>
      {Qty ? (
        <div className={classes.cartBox}>
          <div className={classes.subTotal}>
            {`Cart subtotal  ( ${Qty}  item ):`}
            <span style={{ color: theme.palette.common.darkRed }}>
              {" "}
              {`₹ ${totalPrice}.00`}
            </span>
          </div>
          <div className={classes.cart}>
            <Link style={{ textDecoration: "none" }} to="/cart">
              Cart
            </Link>
          </div>
          <Link style={{ textDecoration: "none" }} to="/payment/checkout">
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            {`Proceed to Checkout  ( ${Qty}  item )`}
          </Button>
            </Link>
         
        </div>
      ) : null}
      <ul className={classes.product}>
        {!loading && products.length
          ? products.map((product, idx) => (
              <li className={classes.list} key={idx}>
                <img
                  src={product.img}
                  style={{ width: "265px", marginBottom: 8 }}
                />
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="subtitle2">
                  Price: Rs {product.price}
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={(e) => addCart(product)}
                >
                  Add to cart
                </Button>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
