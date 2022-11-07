import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {editProfile} from "./profile-reducer"
import {Link} from "react-router-dom";
import "./index.css"

const EditProfile = ()=>{
    let profileItem = useSelector(state => state.profile);
    const [updatedName,setUpdatedName] = useState(profileItem.name);
    const [updatedLocation,setUpdatedLocation] = useState(profileItem.location);
    const [updatedBio,setUpdatedBio] = useState(profileItem.bio);
    const [updatedBirthdate,setUpdatedBirthdate] = useState(profileItem.dateOfBirth);

    const  dispatch = useDispatch();

    const editProfileHandler = ()=>{
        profileItem = {
            ...profileItem,
            name:updatedName,
            location:updatedLocation,
            bio:updatedBio,
            dateOfBirth:updatedBirthdate
        };
        dispatch(editProfile(profileItem))
    }

    const nameChangeHandler = (event)=> {
        setUpdatedName(event.target.value)
    }
    const locationChangeHandler = (event)=> {
        setUpdatedLocation(event.target.value)
    }
    const bioChangeHandler = (event)=> {
        setUpdatedBio(event.target.value)
    }
    const birthDateChangeHandler = (event)=> {
        setUpdatedBirthdate(event.target.value)
    }

    return (
        <>
            <div className={"row"}>
                <div className={"col-1"}>
                    <Link to={"/tuiter/profile"}>
                        <h3><i className="bi bi-x-circle"></i></h3>
                    </Link>
                </div>

                <div className={"col-9"}>
                    <span className={"fw-bold"}>Edit Profile</span>
                </div>

                <div className={"col-2"}>
                    <Link to={"/tuiter/profile"}>
                        <button type="button" className="rounded-pill btn btn-dark" onClick={editProfileHandler}>Save</button>
                    </Link>

                </div>
            </div>

            <div className={"row wd-row-edit-height"}>
                <div className={"col-12"}>
                    <img alt={""} src={"../../images/niagara.jpg"} className={"wd-banner"}/>
                    <img alt={""} src={"../../images/oswald.jpg"} className={"rounded-circle wd-user"}/>
                </div>
            </div>
            <div className={"row"}>
<div className={"border rounded border-gray border-1 pb-2"}>
                <label form={"name"} className={"text-secondary"}>Name</label><br/>
                <input id={"name"} type={"text"}  className={" wd-widthSize border-0"} value={updatedName} onChange={nameChangeHandler}></input>
</div>
                <div className={"border rounded border-gray border-1 pb-2 mt-5"}>
                <label form={"name"} className={"text-secondary"}>Location</label>
                <input id={"name"} type={"text"} className={" wd-widthSize border-0"} value={updatedLocation} onChange={locationChangeHandler}></input>
                </div>
                <div className={"border rounded border-gray border-1 pb-2 mt-5"}>
                <label form={"name"} className={"text-secondary"}>Bio</label>
                <input id={"name"} type={"text"} className={" wd-widthSize border-0"} value={updatedBio} onChange={bioChangeHandler}></input>
                </div>
<div className={"mt-5"}>
                <label form={"name"} className={"text-secondary"}>Birthdate</label> <span className={"text-secondary"}>&#x2022;</span> <span className={"text-primary"}>Edit</span>
                <input id={"name"} type={"text"} className={" wd-widthSize border-0"} value={updatedBirthdate} onChange={birthDateChangeHandler}></input>
</div>
                <div className={"mt-5"}>
                    <span>Switch to professional</span><i className={"bi bi-chevron-right text-secondary float-end"}></i>
                </div>
                </div>
        </>

    )
}
export default EditProfile;