// import Posts from "./posts.json";
import PostSummaryListItem from "./PostSummaryListItem.js";
import {useSelector} from "react-redux";
const PostSummaryList = () =>{
    const Posts = useSelector(state => state.tuits)
    return (
    <ul className="list-group">
        {
            Posts.map(item => <PostSummaryListItem post={item}/>)

        }


    </ul>

    )
}
export default PostSummaryList;