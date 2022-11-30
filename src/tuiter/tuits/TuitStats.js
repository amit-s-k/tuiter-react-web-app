import React, {useState} from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";
const TuitStats = (

    {
        tuitItem = {
            avatarIcon: "../bookmarks/rocky.jpg",
            username: "Elon Musk",
            handle: "@elonmusk",
            postContent: "Amazing show about @inspiration4x mission!",
            time: "23h",
            postImage: "../bookmarks/kgf2.jpg",
            postImageCaption: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            postImageText: "From training to launch to landing, this all access docuseries rides along with the Inspiration4 crew on the first crew on the first all-civilian orbital space ...",
            likes: 0,
            unlike: 0

        }
    }



)=>{
    const dispatch= useDispatch();

    let  [toggleHeart,setToggle] = useState(false);
    const  likeHandler=()=>{
        toggleHeart = !toggleHeart;
        setToggle(toggleHeart)

        dispatch(updateTuitThunk({
                                     ...tuitItem,
                                     likes: tuitItem.likes+1
                                 }));
    }
    const  unlikeHandler=()=>{
        toggleHeart = !toggleHeart;
        setToggle(toggleHeart);

        dispatch(updateTuitThunk({
                                     ...tuitItem,
                                     unlike: tuitItem.unlike+1
                                 }));
    }
    return (
        <div className="row mt-3 mb-3">

            <div className="col-2">
                <i className="fa-regular fa-comment"><span className="ms-3">4200</span> </i>
            </div>
            <div className="col-2">
                <i className="fa-solid fa-retweet"><span className="ms-3">3500</span> </i>
            </div>
            <div className="col-2">


                <i className="bi bi-heart-fill text-danger" onClick={likeHandler}></i>


                <span className="ms-3">{tuitItem.likes}</span>
            </div>
            <div className="col-2">


                <i className="bi bi-heart" onClick={unlikeHandler}></i>


                <span className="ms-3">{tuitItem.unlike}</span>
            </div>
            <div className="col-2">
                <i className="fa-solid fa-upload"></i>
            </div>
        </div>
    );
}

export default TuitStats;