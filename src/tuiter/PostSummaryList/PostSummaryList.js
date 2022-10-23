import Posts from "./posts.json";
import PostSummaryListItem from "./PostSummaryListItem.js";
import React from "react";
const PostSummaryList = () =>{
    return (
    <ul className="list-group">
        {
            Posts.map(item => <PostSummaryListItem post={item}/>)

        }
    

    </ul>
    
    )
}
export default PostSummaryList;