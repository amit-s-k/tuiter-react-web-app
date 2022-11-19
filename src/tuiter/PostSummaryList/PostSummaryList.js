import PostSummaryListItem from "./PostSummaryListItem.js";
import {useSelector} from "react-redux";
const PostSummaryList = () =>{
    //const Posts = useSelector(state => state.tuits)
    const {tuits} = useSelector(state => {
        console.log("posts are ",state.tuitsData)
        return state.tuitsData
    })
    //console.log("posts are ",Posts)
    return (
    <ul className="list-group">
        {
            tuits.map(item => <PostSummaryListItem post={item}/>)
        }
    </ul>
    )
}
export default PostSummaryList;