import Explore from "./explore";
import HomeComponent from "./HomeScreen";
import {Route, Routes} from "react-router";
import NavigationSidebar from "./NavigationSidebar";
import React from "react";

function Tuiter() {
    return(
        <>
            <div className="row mt-2">

                <div className="col-sm-2 col-lg-1 col-xl-2 mt-2">
                    <NavigationSidebar></NavigationSidebar>
                </div>
                <Routes>

                    <Route  index path="home" element={<HomeComponent/>}></Route>
                    <Route path="explore" element={<Explore/>}></Route>

                </Routes>
            </div>

        </>

    );
}
export default Tuiter;