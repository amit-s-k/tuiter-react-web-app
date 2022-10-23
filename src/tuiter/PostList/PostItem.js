import React from "react";
import "./index.css"
const PostItem = (

    {
        postItem ={
            avatarIcon:"../bookmarks/rocky.jpg",
            username:"Elon Musk",
            handle:"@elonmusk",
            postContent:"Amazing show about @inspiration4x mission!",
            time:"23h",
            postImage:"../bookmarks/kgf2.jpg",
            postImageCaption:"Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            postImageText:"From training to launch to landing, this all access docuseries rides along with the Inspiration4 crew on the first crew on the first all-civilian orbital space ...",


        }
    }
    
) => {


    return (
            <div className="row pt-2 wd-post-border border-secondary">
            
                <div className="col-1 mt-2">
                    <img className="wd-avatar-image" src={`${postItem.avatarIcon}`}/>
                </div>
                <div className="col-10 ms-2">
                    <div className="row mt-2">
                        <h6>{postItem.username} <i className="fa-sharp fa-solid fa-circle-check"></i> <span className="text-secondary"> {postItem.handle} &#x2022; {postItem.time}</span></h6>
                        <p className="text-dark">{postItem.postContent}</p>
                    </div>
                    <div className="row wd-image-caption-div border-secondary ms-2">

                            <img className="wd-image border-secondary mb-2 ps-0 pe-0" src={`${postItem.postImage}`}/>

                        <p className="text-dark">{postItem.postImageCaption}</p>
                        <p>{postItem.postImageText}</p>
                    </div>
                    <div className="row mt-3 mb-3">
                    
                        <div className="col-3">
                           <i className="fa-regular fa-comment"><span className="ms-3">4.2K</span> </i>
                        </div>
                        <div className="col-3">
                            <i className="fa-solid fa-retweet"><span className="ms-3">3.5K</span> </i>
                        </div>
                        <div className="col-3">
                            <i className="fa-regular fa-heart"><span className="ms-3">37.5K</span> </i>
                        </div>
                        <div className="col-3">
                            <i className="fa-solid fa-upload"></i>
                        </div>
                    </div>
                </div>
            </div>
    )


};

export default PostItem;