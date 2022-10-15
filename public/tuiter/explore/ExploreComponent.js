import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {

    return (`
            <div class="row">
                <div class="col-10 position-relative">
                    <i class="wd-search-icon fa-solid fa-magnifying-glass"></i>
                    <input aria-describedby="basic-addon1" aria-label="Username"
                           class="form-control rounded-pill ps-5" placeholder="Search Tuiter"
                           type="text">
                </div>
                <i class="col-2 fa-solid fa-gear fa-2x float-right"></i>
            </div>

            <ul class="nav nav-tabs mt-2">
                <li class="nav-item"><a class="nav-link text-decoration-none active" href="#">For
                    You</a></li>
                <li class="nav-item"><a class="nav-link text-decoration-none" href="#">Trending</a>
                </li>
                <li class="nav-item"><a class="nav-link text-decoration-none" href="#">News</a></li>
                <li class="nav-item"><a class="nav-link text-decoration-none" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-sm-none d-md-block"><a
                        class=" nav-link text-decoration-none"
                        href="#">Entertainment</a></li>
            </ul>

            <div class="position-relative">
                <img class="wd-main-img mt-2" src="../../images/starship-lander.jpg">
                <h2 class="wd-text-overlay text-white">SpaceX's Starship</h2>
            </div>
            
             ${PostSummaryList()}
    
    
    `)

}

export default ExploreComponent;