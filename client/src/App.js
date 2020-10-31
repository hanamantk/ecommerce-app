import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Typography from "@material-ui/core/Typography";
import Product from "./components/product";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SignUp from "./components/signup";
import Login from "./components/login";
import Cart from "./components/cart";
import Address from "./components/address";
import PaymentMethod from "./components/payment";
import OrderSummury from "./components/order";

function App() {
  const [profileName, setProfileName] = useState("");
  const [fixed, setFixed] = useState(false);
  const logedInUser = useSelector((state) => state.loginInfo);
  const { loginInfo, error, loading } = logedInUser;
  const { Qty } = useSelector((state) => state.cart);

  useEffect(() => {
    if (loginInfo && !error) {
      setProfileName(loginInfo.name);
    }
    window.addEventListener("scroll", handleScroll);
  }, [loginInfo]);

  function handleScroll(event) {
    if (window.scrollY >= 36) {
      setFixed(true);
      console.log(window.scrollY);
    } else {
      setFixed(false);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <nav className={`header ${fixed ? 'header-fixed' : ''}`}>
            <div className="header_logo">
              <Link style={{ textDecoration: "none" }} to="/">
                <img src="images/logo.jpg" alt="logo" />
              </Link>
            </div>
            <div className="header_signin">
              <ul>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/login">
                    {" "}
                    <Typography
                      variant="subtitle2"
                      color="primary"
                      align="center"
                    >
                      {profileName ? profileName : "Login"}
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    {" "}
                    <Typography
                      variant="subtitle2"
                      color="primary"
                      align="center"
                    >
                      Sign up
                    </Typography>{" "}
                  </Link>
                </li>
                <li>
                  <ShoppingCartIcon fontSize="large" />
                  <span className="cartCount">{Qty}</span>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/register" component={SignUp} />
            <Route path="/cart" component={Cart} />
            <Route path="/buy/address" component={Address} />
            <Route path="/login" component={Login} />
            <Route path="/payment/method" component={PaymentMethod} />
            <Route path="/payment/order" component={OrderSummury} />
            <Route path="/" exact={true} component={Product} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
