import React from "react";
import "./index.css"

import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {

    return (
        <>
            <div className="row">
                <div className="col-10 position-relative">
                    <i className="wd-search-icon fa-solid fa-magnifying-glass"></i>
                    <input aria-describedby="basic-addon1" aria-label="Username"
                           className="form-control rounded-pill ps-5" placeholder="Search Tuiter"
                           type="text"></input>
                </div>
                <i className="col-2 fa-solid fa-gear fa-2x float-right"></i>
            </div>

            <ul className="nav nav-tabs mt-2">
                <li className="nav-item"><a className="nav-link text-decoration-none active" href="/some">For
                    You</a></li>
                <li className="nav-item"><a className="nav-link text-decoration-none" href="/some">Trending</a>
                </li>
                <li className="nav-item"><a className="nav-link text-decoration-none" href="/some">News</a></li>
                <li className="nav-item"><a className="nav-link text-decoration-none" href="/some">Sports</a>
                </li>
                <li className="nav-item d-none d-sm-none d-md-block"><a
                    className=" nav-link text-decoration-none"
                    href="/some">Entertainment</a></li>
            </ul>

            <div className="position-relative">
                <img alt="" className="wd-main-img mt-2" src="../images/starship-lander.jpg"></img>
                    <h2 className="wd-text-overlay text-white">SpaceX's Starship</h2>
            </div>

            <PostSummaryList></PostSummaryList>


        </>
    );

}

export default ExploreComponent;