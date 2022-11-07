import "./index.css"
import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Profile = ()=>{
    const profileItem = useSelector(state => state.profile);
return (
    <>
        <div className={"row"}>
            <div className={"fw-bold col-2"}>
                <Link to={"/tuiter/home"}><h4><i className=" bi bi-arrow-left"></i></h4></Link>

            </div>
            <div className={"col-10"}>
                <p className={"fw-bold mb-0"}>{profileItem.name}</p>
                <p className={"text-secondary"}>{profileItem.tuits} Tuits</p>
            </div>

        </div>
        <div className={"row wd-row-height"}>
            <div className={"col-12"}>
                <img alt={""} src={profileItem.bannerPicture} className={"wd-banner"}/>
                <img alt={""} src={profileItem.profilePicture} className={"rounded-circle wd-user"}/>
                <Link to={"/tuiter/profile/editprofile"}>
                    <button className={"btn btn-light float-end mt-2 rounded-pill fw-bold"}>Edit Profile</button>
                </Link>

            </div>

        </div>
        <div className={"row ms-2"}>

            <p className={"fw-bold mb-0"}>{profileItem.firstName} {profileItem.lastName}</p>
            <p className={"text-secondary"}>{profileItem.handle}</p>
            <p></p>

            <div className="row text-secondary">

                <div className="col-4">
                    <i className="bi bi-geo-alt"><span className="ms-3">{profileItem.location}</span> </i>
                </div>
                <div className="col-4">
                    <i className="bi bi-balloon"><span className="ms-3">{profileItem.dateOfBirth}</span> </i>
                </div>
                <div className="col-4">
                    <i className="bi bi-calendar-month"><span className="ms-3">{profileItem.dateJoined}</span> </i>
                </div>
            </div>
            <div className={"row mt-3"}>
                <div className={"col-3"}>
                    <span className={"me-2 fw-bold"}>{profileItem.followingCount}</span>
                    <span className={"text-secondary"}>Following</span>
                </div>
                <div className={"col-2"}>
                    <span className={"me-2 fw-bold"}>{profileItem.followersCount}</span>
                    <span className={"text-secondary"}>Followers</span>
                </div>

            </div>
        </div>
    </>


);
}
export default Profile;