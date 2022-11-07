import React, {useState} from "react";

const TuitStats = ()=>{

    let  [toggleHeart,setToggle] = useState(false);
    const  likeHandler=()=>{
        toggleHeart = !toggleHeart;
        setToggle(toggleHeart)
        console.log("Toggle value is ",toggleHeart)
    }
    return (
        <div className="row mt-3 mb-3">

            <div className="col-3">
                <i className="fa-regular fa-comment"><span className="ms-3">4.2K</span> </i>
            </div>
            <div className="col-3">
                <i className="fa-solid fa-retweet"><span className="ms-3">3.5K</span> </i>
            </div>
            <div className="col-3">


                {toggleHeart && <i className="bi bi-heart-fill text-danger" onClick={likeHandler}></i>}
                {!toggleHeart && <i className="bi bi-heart" onClick={likeHandler}></i>}

                <span className="ms-3">37.5K</span>
            </div>
            <div className="col-3">
                <i className="fa-solid fa-upload"></i>
            </div>
        </div>
    );
}

export default TuitStats;