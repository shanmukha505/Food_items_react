import React, { useState } from "react";
import { Route } from "react-router-dom";
import style from "./App.module.css";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import Navigation from "./Components/Navigation/Navigation";
import Shopping from "./Components/Shopping/Shopping";

const App = () => {
  const [user, setuser] = useState("User");

  return (
    <div className={style.App}>
      <Route
        exact
        path="/"
        component={(props) => <Login setuser={setuser} />}
      />

      <Route
        path="/shopping"
        component={(props) => (
          <>
            <Navigation user={user} />
            <Shopping />
          </>
        )}
      />

      <Route
        path="/cart"
        component={(props) => (
          <>
            <Navigation user={user} />
            <Cart />
          </>
        )}
      />
    </div>
  );
};

export default App;
