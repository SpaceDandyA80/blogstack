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
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />

      <HashRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register"> {user ? <Home /> : <Register />}</Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Write">{user ? <Write /> : <Register />} </Route>
        <Route path="/settings"> {user ? <Settings /> : <Register />} </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </HashRouter>
    </Router>
  );
}

export default App;
