import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Navigation from "./components/Navigation";
import { english, dutch } from "./content.js";
import UserProfile from "./pages/UserProfile";
import axios from "axios";
import HomesPage from "./pages/HomesPage";
import DetailsPage from "./pages/DetailsPage";
function App() {
  let loggedUser = JSON.parse(localStorage.getItem("user"));
  let [lang, setLang] = useState(english);
  let [user, setUser] = useState(loggedUser);

  let history = useHistory();
  let [houses, setHouses] = useState([]);

  useEffect(() => {
    const getAllHomes = async () => {
      let res = await axios.get("/api/homes/");
      console.log(res);
      setHouses(res.data.houses);
    };

    getAllHomes();
  }, []);

  // useEffect(() => {
  //   const getAllHomes = async () => {
  //     let res = await axios.get("/api/homes/");
  //     setHouses(res.data.houses);
  //   };

  //   getAllHomes();
  // });

  let logNewUser = (user) => {
    setUser(user);
  };

  const setLanguage = (lang) => {
    setLang(lang);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    history.push("/");
  };

  return (
    <div className="App">
      <Navigation setLanguage={setLanguage} user={user} logout={logout} />
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <Homepage {...props} lang={lang} />}
        />
        <Route
          exact
          path="/homes"
          component={(props) => (
            <HomesPage {...props} lang={lang} houses={houses} />
          )}
        />
        <Route
          exact
          path={lang === english ? "/signup" : "/registreren"}
          component={(props) => (
            <SignupPage {...props} logNewUser={logNewUser} />
          )}
        />
        <Route
          exact
          path={lang === english ? "/login" : "/inloggen"}
          component={(props) => (
            <LoginPage {...props} logNewUser={logNewUser} />
          )}
        />
        <Route
          exact
          path="/profile/:id"
          component={(props) => <UserProfile {...props} user={user} />}
        />
      </Switch>
    </div>
  );
}

export default App;
