import TuitList from "../tuits/TuitList"
import WhoToFollowList from "../WhoToFollowList";
import WhatsHappening from "./whats-happening";
import React from "react";
const HomeComponent = ()=>{
    return (
        <>


            <div className="col-sm-10 col-lg-7 col-xl-6 mt-2 rounded-2">
                <WhatsHappening></WhatsHappening>
                <TuitList></TuitList>
            </div>
            <div className="d-none d-lg-block col-md-4 mt-2">
                <WhoToFollowList></WhoToFollowList>
            </div>
        </>
    );
}
export default HomeComponent;