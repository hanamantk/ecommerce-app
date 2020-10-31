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
const googleIcon = "../../images/google_icon.svg";

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

export default function SignUp(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resitration, setResitration] = useState(false);
  const [pwdErrText, setpwdErrText] = useState("");
  const [errorStatus, seterrorStatus] = useState(false);
  const userInfo = useSelector((state) => state.userInfo);
  const { user, error, loading } = userInfo;

  useEffect(() => {
    if (user && !error) {
      setResitration(true);
    }
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(signUp(name, email, password));
  }

  function handleError(cpassword) {
    if (password !== cpassword) {
      seterrorStatus(true);
      setpwdErrText("password mismatch");
    } else {
      seterrorStatus(false);
      setpwdErrText("");
    }
  }
  return (
    <React.Fragment>
      <div
      className={`${classes.center}`}
        style={{ display: resitration ? "" : "none",marginTop:32 }}
      >
        {" "}
        <Alert severity="success">Rigitration done successfully!</Alert>
        <Link style={{ textDecoration: "none" }} to="/login">
          {" "}
          <Typography variant="subtitle2" color="primary" align="center">
            Login
          </Typography>
        </Link>
      </div>
      <div className={` ${classes.login_form} `}>
        <div className={classes.center}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Typography variant="subtitle1">Sign Up</Typography>
            <TextField
              label="Name"
              size="small"
              fullWidth={true}
              variant="outlined"
              required={true}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <TextField
              id="email"
              label="Email"
              type="email"
              size="small"
              required={true}
              fullWidth={true}
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              type="password"
              label="Password"
              size="small"
              fullWidth={true}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
            />

            <TextField
              classes={{ root: classes.mgBottom }}
              type="password"
              error={errorStatus}
              label="Confirm password"
              helperText={pwdErrText}
              size="small"
              fullWidth={true}
              onChange={(e) => {
                handleError(e.target.value);
              }}
              variant="outlined"
            />

            <Button
              type="submit"
              fullWidth={true}
              variant="contained"
              color="primary"
            >
              Create account
            </Button>
            <Button fullWidth={true} variant="outlined">
              <img style={{ marginRight: 8 }} src={googleIcon} />
              Continue with google
            </Button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
