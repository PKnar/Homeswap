import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Navigation from "./components/Navigation";
import { english, dutch } from "./content.js";
import UserProfile from "./pages/UserProfile";
function App() {
  let [lang, setLang] = useState(english);

  const setLanguage = (lang) => {
    setLang(lang);
  };

  return (
    <div className="App">
      <Router>
        <Navigation setLanguage={setLanguage} />
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => <Homepage {...props} lang={lang} />}
          />
          <Route
            exact
            path={lang === english ? "/signup" : "/registreren"}
            component={SignupPage}
          />
          <Route
            exact
            path={lang === english ? "/login" : "/inloggen"}
            component={LoginPage}
          />
          <Route
            exact
            path="/profile/:id"
            component={(props) => <UserProfile {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
