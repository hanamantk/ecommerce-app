import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/user";
import { Link,useHistory  } from "react-router-dom";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  login_form: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(2),
    borderRadius: theme.spacing(0.5),
    width: theme.spacing(22),
    padding: theme.spacing(2),
    height: "auto",
    margin: "auto",
    border: `1px solid ${theme.palette.common.grey}`,
  },
  center: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const [error, setError] = useState("");
  const userInfo = useSelector((state) => state.loginInfo);
  const { Qty, cartItems, totalPrice } = useSelector((state) => state.cart);
  const { loading } = userInfo;

  useEffect(() => {
    if (userInfo.error) setError(userInfo.error);
    if (userInfo.login) {
      const { token } = userInfo.user;
      if (Qty) history.push("/cart");
      else history.push("/");
      
    } else {
      history.push("/login");
    }
  }, [userInfo]);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(login(email, password));
  }

  return (
    <React.Fragment>
      {error ? (
        <div className={`${classes.center} `} style={{ marginTop: 32 }}>
          {" "}
          <Alert severity="error">Invalid Credentials try again</Alert>
        </div>
      ) : null}
      <div className={` ${classes.login_form} `}>
        <div className={classes.center}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Typography variant="subtitle1">Login</Typography>
            <TextField
              label="Email"
              size="small"
              fullWidth={true}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            />
            <br />
            <TextField
              classes={{ root: classes.mgBottom }}
              type="password"
              label="Password"
              size="small"
              onChange={(e) => setpassword(e.target.value)}
              fullWidth={true}
              variant="outlined"
            />

            <Button
              type="submit"
              fullWidth={true}
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
