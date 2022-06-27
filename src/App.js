import "./App.css";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Welcome from "./Welcome";
import Homepage from "./Homepage";
import CreateAccount from "./CreateAccount";
import ForgetPassword from "./ForgetPassword";
import Search from "./Search";
import Play from "./Play";
import ResourceLibrary from "./ResourceLibrary";
import InputQuestion from "./InputQuestion";
import Leaderboard from "./Leaderboard";
import AdminLogin from "./AdminLogin";
import ChangePassword from "./ChangePassword";
import UpdateProfile from "./UpdateProfile";
import ModuleSelection from "./ModuleSelection";
import CompiledQuestions from "./CompiledQuestions";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <>
      <div>
        {authIsReady && (
          <Switch>
            <Route exact path="/">
              {!user && <Homepage />}
              {user && <Redirect to="/Welcome" />}
            </Route>
            <Route exact path="/Welcome">
              {user && <Welcome />}
              {!user && <Redirect to="/" />}
            </Route>
            <Route exact path="/CreateAccount">
              {!user && <CreateAccount />}
              {user && <Redirect to="/UpdateProfile" />}
            </Route>
            <Route exact path="/ForgetPassword">
              <ForgetPassword />
            </Route>
            <Route exact path="/Search">
              {user && <Search />}
              {!user && <Redirect to="/" />}
            </Route>
            <Route exact path="/Play">
              {user && <Play />}
              {!user && <Redirect to="/" />}
            </Route>
            <Route exact path="/ResourceLibrary">
              {user && <ResourceLibrary />}
              {!user && <Redirect to="/" />}
            </Route>
            <Route exact path="/InputQuestion">
              {user && <InputQuestion />}
              {!user && <Redirect to="/" />}
            </Route>
            <Route exact path="/Leaderboard">
              {user && <Leaderboard />}
              {!user && <Redirect to="/" />}
            </Route>
            <Route exact path="/AdminLogin">
              {!user && <AdminLogin />}
              {user && <Redirect to="/Welcome" />}
            </Route>
            <Route exact path="/ChangePassword">
              <ChangePassword />
            </Route>
            <Route exact path="/UpdateProfile">
              {user && <UpdateProfile />}
              {!user && <Redirect to="/" />}
            </Route>
            <Route exact path="/ModuleSelection">
              {user && <ModuleSelection />}
              {!user && <Redirect to="/" />}
            </Route>
            <Route exact path="/CompiledQuestions">
              {user && <CompiledQuestions />}
              {!user && <Redirect to="/" />}
            </Route>
          </Switch>
        )}
      </div>
    </>
  );
}

export default App;
