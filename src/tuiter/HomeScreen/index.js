import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import PostList from "../PostList/PostList.js";
import React from "react";

function HomeComponent() {

    return (
        <>
            <div className="col-sm-10 col-lg-7 col-xl-6 mt-2 rounded-2">
                <PostList></PostList>
            </div>
            <div className="d-none d-lg-block col-lg-4 mt-2">
                <PostSummaryList></PostSummaryList>
            </div>
        </>

    );
}

export default HomeComponent;