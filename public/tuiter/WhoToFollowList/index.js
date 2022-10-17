import WhoToFollowListItem from "./WhoToFollowListItem.js";
import Who from "./who.js";


const WhoToFollowList = () => {

    return (`
    <ul class="list-group">
       <li class="list-group-item list-group-item-action text-decoration-none pb-1"><a
                        class="text-decoration-none text-dark fw-bold text-white"
                        href="#">Who
                    to follow</a></li>
                    
       ${Who.map(item => WhoToFollowListItem(item)).join('')}                 
    </ul>
    `)
}

export default WhoToFollowList;