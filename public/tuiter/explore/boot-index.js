import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";



function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row mt-2">
  
  <div class="col-sm-2 col-lg-1 col-xl-2 mt-2">
    ${NavigationSidebar()}
  </div>

   <div class="col-sm-10 col-lg-7 col-xl-6 mt-2">
    ${ExploreComponent()}
   </div>
   <div class="d-none d-lg-block col-md-4 mt-2">
    ${WhoToFollowList()}
   </div>
  </div>
   `);
}
$(exploreComponent);