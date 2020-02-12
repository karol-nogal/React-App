import React from 'react';
import {Route, Switch} from "react-router";
import Github from '../github/Github.js';
import Counter from "../Counter/Counter.js";
import Burgers from "../Burgers/Burgers.js"
import BurgerDetails from "../Burgers/BurgersDetails"
import SignUp from "../SignUp/SignUp"
import Profile from  "../Profile/Profile.js"
import Chat from "../chat/Chat"
import PageWrapper from '../components/PageWrapper.js';
export default ({onAvatarUpdate}) => (
    <Switch>
        <Route exact path="/">
            <PageWrapper>
               <h1>Welcome use menu above to navigate :) </h1>
               <div>don't forget to sign in !</div>
            </PageWrapper>
            
        </Route>
        <Route path="/github">
            <Github />
        </Route>
        <Route path="/counter">
            <Counter/>
        </Route>
        <Route exact path="/burgers">
            <Burgers/>
        </Route>
        <Route exact path="/burgers/:id" component={BurgerDetails}>
        </Route>
        <Route path="/login" component={SignUp}>

        </Route>
        <Route path="/chat" component={Chat}>

        </Route>
        <Route path="/register" component={SignUp}>
            
        </Route>
        
        <Route path="/profile" component={()=> <Profile onAvatarUpdate={onAvatarUpdate}/>}>
            
        </Route>
        
    </Switch>
)
