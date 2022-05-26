import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
//import { Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <>
      <div>
      
      {/*<Routes>*/}
      <Switch>
          <Route exact path="/"> <Homepage /></Route>
          <Route exact path="/Welcome"> <Welcome /></Route>
          <Route exact path="/CreateAccount"> <CreateAccount/></Route>
          <Route exact path="/ForgetPassword"><ForgetPassword/></Route>
          <Route exact path="/Search"><Search/></Route>
          <Route exact path="/Play"><Play/></Route>
          <Route exact path="/ResourceLibrary"><ResourceLibrary/></Route>
          <Route exact path="/InputQuestion"><InputQuestion/></Route>
          <Route exact path="/Leaderboard"><Leaderboard/></Route>
          <Route exact path="/AdminLogin"><AdminLogin/></Route>
          <Route exact path="/ChangePassword"><ChangePassword/></Route>
      </Switch>
{/*}
          
          <Route path="/" element={<Homepage />}></Route>
          <Route exact path="/Welcome" element={<Welcome />}></Route>
          <Route exact path="/CreateAccount" element={<CreateAccount/>}></Route>
          <Route exact path="/ForgetPassword" element={<ForgetPassword/>}></Route>
          <Route exact path="/Search" element={<Search/>}></Route>
          <Route exact path="/Play" element={<Play/>}></Route>
          <Route exact path="/ResourceLibrary" element={<ResourceLibrary/>}></Route>
          <Route exact path="/InputQuestion" element={<InputQuestion/>}></Route>
          <Route exact path="/Leaderboard" element={<Leaderboard/>}></Route>
          <Route exact path="/AdminLogin" element={<AdminLogin/>}></Route>

        */}
          

          {/*</Routes><Route path="/InputQn" element={<InputQn/>}</Route> */}
      
      </div>

      {/*<Routes/>*/}
    </>
  );
}

export default App;
