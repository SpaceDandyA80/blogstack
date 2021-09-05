import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import TopBar from "./components/topbar/TopBar";
import Settings from "./pages/settings/Settings";
import Register from "./pages/register/Register";
import About from "./components/about/About";
import { useContext } from "react";
import { Context } from "./context/Context";

//Link needs to be added soon
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />

      <Switch>
        <Route exact path="/gh-pages-url">
          <Home />
        </Route>
        <Route path="/gh-pages-url/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/gh-pages-url/register">
          {" "}
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/gh-pages-url/about">
          <About />
        </Route>
        <Route path="/gh-pages-url/Write">
          {user ? <Write /> : <Register />}{" "}
        </Route>
        <Route path="/gh-pages-url/settings">
          {" "}
          {user ? <Settings /> : <Register />}{" "}
        </Route>
        <Route path="/gh-pages-url/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
