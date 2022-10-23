import React from "react";

const WhoToFollowListItem = (

    {
        who = {
            avatarIcon: "../../images/java.png",
            userName: "Java",
            handle: "@java"
        }
    }


) => {
return (
    <li className="list-group-item pb-0">
                        <div className="row">
                        <img alt="" className="wd-java col-lg-3 col-xl-2 col-xxl-2 ps-lg-0 pe-lg-0 ms-lg-0 me-lg-2 ps-xl-1 pe-xl-1"
                             src={`${who.avatarIcon}`}/>

                        <div className="col-lg-6 col-xl-6 ps-lg-0 pe-lg-0 ps-xl-1 pe-xl-1">
                            <span className="fw-bold">{who.userName} <i
                                    className="fa-sharp fa-solid fa-circle-check"></i>
                                <p className="fw-normal">{who.handle}</p>
                            </span>
                        </div>
                        <div className="col-lg-3 col-xl-3 ps-lg-0 pe-lg-0">
                            <button className="ms-lg-2 ms-xl-4 rounded-pill btn btn-primary"
                                    type="button">Follow
                            </button>
                        </div>
                    </div>
    </li>

)
};

export default WhoToFollowListItem;