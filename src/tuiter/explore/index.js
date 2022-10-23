
import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";
import React from "react";

function Explore() {

    return (
        <>
            <div className="col-sm-10 col-lg-7 col-xl-6 mt-2">
                <ExploreComponent></ExploreComponent>
            </div>
            <div className="d-none d-lg-block col-md-4 mt-2">
                <WhoToFollowList></WhoToFollowList>
            </div>

        </>


    )
}
export default Explore;

