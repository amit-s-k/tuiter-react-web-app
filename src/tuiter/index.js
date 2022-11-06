import Explore from "./explore";
import HomeComponent from "./home/index";
import {Route, Routes} from "react-router";
import NavigationSidebar from "./NavigationSidebar";
import React from "react";
import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer";
import {Provider} from "react-redux";
import tuitsReducer from "./tuits/tuits-reducer";
const store = configureStore({
                                 reducer:{
                                     who: whoReducer,
                                     tuits: tuitsReducer
                                 }
                             })
function Tuiter() {

    return(
        <Provider store={store}>
            <div className="row mt-2">

                <div className="col-sm-2 col-lg-1 col-xl-2 mt-2">
                    <NavigationSidebar></NavigationSidebar>
                </div>
                <Routes>

                    <Route path="home" element={<HomeComponent/>}></Route>
                    <Route path="explore" element={<Explore/>}></Route>

                </Routes>
            </div>
        </Provider>

    );
}
export default Tuiter;