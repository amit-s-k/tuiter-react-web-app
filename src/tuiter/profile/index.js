
import React from "react";
import WhoToFollowList from "../WhoToFollowList";
import Profile from "./profile"
import {Route, Routes} from "react-router";
import Editprofile from "./editprofile";
import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import {Provider} from "react-redux";
const store = configureStore({
                                 reducer:{
                                     profile: profileReducer,
                                 }
                             })
const ProfileComponent = ()=> {

    return (
        <>

            <Provider store={store}>
                <div className="col-sm-10 col-lg-7 col-xl-6 mt-2">
                    <Routes>
                        <Route index element={<Profile/>}></Route>
                        <Route path={"/editprofile"} element={<Editprofile/>}></Route>
                    </Routes>

                </div>
            </Provider>
            <div className="d-none d-lg-block col-md-4 mt-2">
                <WhoToFollowList></WhoToFollowList>
            </div>
        </>



);
}


export default ProfileComponent;