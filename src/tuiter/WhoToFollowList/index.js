import WhoToFollowListItem from "./WhoToFollowListItem.js";

import React from "react";
import {useSelector} from "react-redux";


const WhoToFollowList = () => {

    const whoArray = useSelector(state => state.who);

    return (
    <ul className="list-group">
       <li className="list-group-item list-group-item-action text-decoration-none pb-1"><a
                        className="text-decoration-none text-dark fw-bold" href="/some">Who
                    to follow</a>
       </li>
        {
            whoArray.map(item => <WhoToFollowListItem key={item} who={item}/>)
        }


    </ul>
    )
}

export default WhoToFollowList;