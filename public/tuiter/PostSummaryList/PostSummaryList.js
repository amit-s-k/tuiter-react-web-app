import Posts from "./posts.js";
import PostSummaryListItem from "./PostSummaryListItem.js";

const PostSummaryList = () =>{
    return (`
    <ul class="list-group">
    
    ${Posts.map(item => PostSummaryListItem(item)).join('')}
    
    </ul>
    
    `)
}
export default PostSummaryList;