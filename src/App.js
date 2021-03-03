import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Product from "./components/product";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/login";
import Cart from "./components/cart";
import OrderSummury from "./components/order";
import Header from "./components/header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/payment/checkout" component={OrderSummury} />
            <Route path="/" exact={true} component={Product} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
