import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withStyles } from "@material-ui/core/styles";
import { userLogOut } from "../actions/user";
const LOGO = "images/logo.jpg";

const useStyles = makeStyles((theme) => ({
  header_signin: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cursor: {
    cursor: "pointer",
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function Header(props) {
  const classes = useStyles();
  const [profileName, setProfileName] = useState("");
  const [fixed, setFixed] = useState(false);
  const userInfo = useSelector((state) => state.loginInfo);
  const { Qty } = useSelector((state) => state.cart);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo.login && isToken()) {
      const { name } = userInfo.user;
      setProfileName(name);
    } else {
      setProfileName("");
    }
    window.addEventListener("scroll", handleScroll);
  }, [userInfo]);

  function isToken() {
    let token = window.localStorage.getItem("token") || false;
    if (token === null) return undefined;
    return true;
  }

  function logOut() {
    localStorage.clear();
    dispatch(userLogOut());
    history.push("/");
  }

  function handleScroll(event) {
    if (window.scrollY >= 36) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  return (
    <div className="App">
      <nav className={`header ${fixed ? "header-fixed" : ""}`}>
        <div className="header_logo">
          <Link style={{ textDecoration: "none" }} to="/">
            <img src={LOGO} alt="logo" />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <div>HOME</div>
          </Link>
        </div>
        <div className={classes.header_signin}>
          {profileName ? (
            <Box m={2} onClick={(e) => logOut()} className={classes.cursor}>
              <Typography variant="subtitle2" color="primary">
                Log Out
              </Typography>
            </Box>
          ) : null}
          <Box m={2} className={classes.cursor}>
            {" "}
            <Typography variant="subtitle2" color="primary">
              {profileName ? (
                <React.Fragment>
                  <AccountCircle fontSize="small" />
                  <Box>{profileName}</Box>{" "}
                </React.Fragment>
              ) : (
                <Link style={{ textDecoration: "none" }} to="/login">
                  Login
                </Link>
              )}
            </Typography>
          </Box>

          <Link to="/cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={Qty} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </div>
      </nav>
    </div>
  );
}
