import React from "react";
import "./index.css"
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer"
const TuitItem = (

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

        }
    }
    
) => {
    const  dispatch = useDispatch();
    const deleteTuitHandler = (id)=>{
        dispatch(deleteTuit(id))
    }


    return (
            <div className="row pt-2 wd-post-border border-secondary">
            
                <div className="col-1 mt-2">

                    <img alt="" className="wd-avatar-image" src={`${tuitItem.avatarIcon}`}/>
                </div>
                <div className="col-10 ms-2">
                    <div className="row mt-2">
                        <h6>{tuitItem.username}
                            <i className="fa-sharp fa-solid fa-circle-check"></i>
                            <span className="text-secondary"> {tuitItem.handle} &#x2022; {tuitItem.time}
                                <button onClick={()=>deleteTuitHandler(tuitItem._id)} className={"btn float-end"}>X</button>
                            </span>
                        </h6>
                        <p className="text-dark">{tuitItem.postContent}</p>
                    </div>
                    <TuitStats></TuitStats>

                </div>
            </div>
    )


};

export default TuitItem;