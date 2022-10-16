import PostsHome from "./PostsHome.js";
import PostItem from "./PostItem.js";

const PostList = () => {

    return (`
    
    ${PostsHome.map(item => PostItem(item)).join('')}

    `);

};

export default PostList;