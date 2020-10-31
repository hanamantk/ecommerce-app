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

export default function Address(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resitration, setResitration] = useState(false);
  const [pwdErrText, setpwdErrText] = useState("");
  const [checked, setChecked] = React.useState(true);

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

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <React.Fragment>
      <div
        className={`${classes.center}`}
        style={{ display: resitration ? "" : "none", marginTop: 32 }}
      >
        {" "}
        <Alert severity="success">Rigitration done successfully!</Alert>
      </div>
      <Link style={{ textDecoration: "none" }} to="/payment/method">
        <Button
          type="submit"
          style={{ float: "right", marginRight: "5rem", width: "10%" }}
          fullWidth={true}
          variant="contained"
          color="primary"
        >
          continue
        </Button>
      </Link>

      <div className={` ${classes.container} `}>
        <div className={classes.center}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Typography variant="subtitle1">Add new address</Typography>
            <TextField
              label="Name"
              size="small"
              fullWidth={true}
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Mobile number"
              type="number"
              size="small"
              required={true}
              fullWidth={true}
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Pin Code"
              size="small"
              fullWidth={true}
              variant="outlined"
              required={true}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Area, Colony, Street, Sector, Village"
              size="small"
              fullWidth={true}
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Landmark"
              size="small"
              fullWidth={true}
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Town/City"
              size="small"
              fullWidth={true}
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <Checkbox
              color="primary"
              checked={checked}
              onChange={handleChange}
              label="Use default address"
            />
            Use default address
            <Button
              type="submit"
              fullWidth={true}
              variant="contained"
              color="primary"
            >
              Add address
            </Button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
