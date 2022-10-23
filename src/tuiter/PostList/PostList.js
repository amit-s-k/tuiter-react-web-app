import PostsHome from "./PostsHome.json";
import PostItem from "./PostItem.js";
import React from "react";
const PostList = () => {

    return (
    
    PostsHome.map(item => <PostItem postItem={item}/>)

    );

};

export default PostList;