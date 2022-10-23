import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whoArray from "./who.json";

import React from "react";


const WhoToFollowList = () => {

    return (
    <ul className="list-group">
       <li className="list-group-item list-group-item-action text-decoration-none pb-1"><a
                        className="text-decoration-none text-dark fw-bold" href="/some">Who
                    to follow</a>
       </li>
        {
            whoArray.map(item =>
                <WhoToFollowListItem who={item}/>
            )
        }


    </ul>
    )
}

export default WhoToFollowList;