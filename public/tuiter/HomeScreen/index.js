import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import PostList from "../PostList/PostList.js";

function homeComponent() {
    let arr = window.location.pathname.split('/');
    let screenName = arr[arr.length-2];

    $('#wd-explore').append(`
  <div class="row mt-2">
  
      <div class="col-sm-2 col-lg-1 col-xl-2 mt-2">
        ${NavigationSidebar(screenName)}
      </div>
    
        <div class="bg-light col-sm-10 col-lg-7 col-xl-6 mt-2 rounded-2">
        ${PostList()}
        </div>
       <div class="d-none d-lg-block col-lg-4 mt-2">
        ${PostSummaryList()}
       </div>
  </div>
   `);
}

$(homeComponent);