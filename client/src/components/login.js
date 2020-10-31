import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/user";
import { Alert } from "@material-ui/lab";

const googleIcon = "../../images/google_icon.svg";
const CLIENT_ID =
  "310396441184-8i0plfrjmu3f892n9heesmnrovtberk3.apps.googleusercontent.com";

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
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const logedInUser = useSelector((state) => state.loginInfo);
  const { loginInfo, error, loading } = logedInUser;

  useEffect(() => {
    if (loginInfo) {
      window.localStorage.setItem('token',loginInfo.token);
      props.history.push("/");
    }
  }, [loginInfo]);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(login(email, password));
  }

  function onFailure(response) {
    console.log("response=", response);
  }
  function onSuccess(response) {
    console.log("response=", response);
  }

  return (
    <React.Fragment>
      {error ? (
        <div className={`${classes.center} `} style={{marginTop:32 }}>
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
            <Typography variant="subtitle2" align="center">
              OR
            </Typography>
            <GoogleLogin
              clientId={CLIENT_ID}
              render={(renderProps) => (
                <Button
                  onClick={renderProps.onClick}
                  fullWidth={true}
                  variant="outlined"
                >
                  <img style={{ marginRight: 8 }} src={googleIcon} />
                  Continue with google
                </Button>
              )}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
            />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
