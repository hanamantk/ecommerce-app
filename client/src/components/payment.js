import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { signUp } from "../actions/user";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "@material-ui/lab";
import Checkbox from "@material-ui/core/Checkbox";
import { verifyUser } from "../actions/user";
const googleIcon = "../../images/google_icon.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(2),
    borderRadius: theme.spacing(0.5),
    width: theme.spacing(22),
    padding: theme.spacing(2),
    height: "auto",
    margin: "auto",
  },
  center: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export default function PaymentMethod(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = React.useState(true);
  const userInfo = useSelector((state) => state.loginInfo);
  const { verifiedUser, error, loading } = userInfo;

  useEffect(() => {
    dispatch(verifyUser());
    console.log(error);
    if (error) {
      console.log(error);
      props.history.push("/login");
    }
  }, [verifiedUser]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <React.Fragment>
      <div className={` ${classes.container} `}>
        <div className={classes.center}>
          <h2>Select a payment method</h2>
          <Checkbox
            color="primary"
            checked={checked}
            onChange={handleChange}
            label="Use default address"
          />
          <span> Pay by Paypal</span>
          <Link style={{ textDecoration: "none" }} to="/payment/order">
            <Button
              type="submit"
              fullWidth={true}
              style={{ marginTop: 32 }}
              variant="contained"
              color="primary"
            >
              continue
            </Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
