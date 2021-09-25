import React, { useCallback, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";

import {AuthContext} from "./shared/context/auth-context";

function App() {

  const [isLoggedIn,SetIsLoggedIn]=useState=useState(false)

  const login=useCallback(()=>{
    setIsLoggedIn(true)
  },[])

  const logout=useCallback(()=>{
    setIsLoggedIn(false)
  },[])

  return (
    <AuthContext.Provider value={{isLoggedIn:IsLoggedIn,login:login,logout:logout}}>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/places/:placeId" exact>
            <UpdatePlace />
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </AuthContext>
  );
}

export default App;
