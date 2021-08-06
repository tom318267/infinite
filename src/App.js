import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SpinnerLoad from "./components/SpinnerLoad";
const Home = lazy(() => import("./components/Home"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const Search = lazy(() => import("./components/Search"));
const ShowHero = lazy(() => import("./components/ShowHero"));

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Suspense fallback={<SpinnerLoad />}>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/search" component={Search} />
            <Route path="/hero/:id" component={ShowHero} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
