
import React from "react";


const PostSummaryList = (

    {
        post =     {
            topic: "Web Development",
            userName: "ReactJS",
            time: "2h",
            image: "../../images/react.svg",
            title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        }
    }






) =>{

    let tweets;
    let  webDevText;
    if(post.topic!==undefined){
        webDevText = <p className='text-secondary mb-0'>{post.topic}</p>;
    }else{
        webDevText = "";
    }

    if(post.tweets!==undefined){
        tweets = <p className='text-secondary'>{post.tweets}</p>;
    }else{
        tweets = "";
    }



    return (
    
            <li className="list-group-item">
                    <div className="row">
                        <div className="col-10">
                        
                            {webDevText}
                           
                            <p className="mb-0">
                                <span className="fw-bold">
                                    {post.userName} <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    <span className="text-secondary"> - {post.time}</span>
                                </span>
                            </p>
                            <p className="fw-bold mb-0">
                            {post.title}
                            </p>
                            {tweets}

                        </div>
                        <div className="col-2">
                            <img alt="" className="wd-react rounded" src={`${post.image}`}/>
                        </div>
                    </div>

            </li>
    
    );

}

export default PostSummaryList;