import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddNews from "./components/admin/addNews/AddNews";
import NewsDescription from "./components/home/newsFeed/NewsDescription";
import Admin from "./components/admin/Admin";
import { createContext, useState } from "react";
import PrivateRoute from "./components/login/PrivateRoute";
import Login from "./components/login/Login";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/description/:id">
            <NewsDescription></NewsDescription>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>{" "}
    </UserContext.Provider>
  );
}

export default App;
