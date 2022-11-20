import PostSummaryListItem from "./PostSummaryListItem.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findTuitsThunk} from "../../services/tuits-thunks";
const PostSummaryList = () =>{
    //const Posts = useSelector(state => state.tuits)
    const {tuits} = useSelector(state => {
        console.log("posts are ",state.tuitsData)
        return state.tuitsData
    });
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(findTuitsThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
    <ul className="list-group">
        {
            tuits.map(item => <PostSummaryListItem post={item}/>)
        }
    </ul>
    )
}
export default PostSummaryList;