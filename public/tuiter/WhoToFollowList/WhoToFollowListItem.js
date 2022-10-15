const WhoToFollowListItem = (who) => {


return (`
    <li class="list-group-item pb-0">
                        <div class="row">
                        <img class="wd-java col-lg-3 col-xl-2 col-xxl-2 ps-lg-0 pe-lg-0 ms-lg-0 me-lg-2 ps-xl-1 pe-xl-1"
                             src='${who.avatarIcon}'>

                        <div class="col-lg-6 col-xl-6 ps-lg-0 pe-lg-0 ps-xl-1 pe-xl-1">
                            <span class="fw-bold">${who.userName} <i
                                    class="fa-sharp fa-solid fa-circle-check"></i>
                                <p class="fw-normal">${who.handle}</p>
                            </span>
                        </div>
                        <div class="col-lg-3 col-xl-3 ps-lg-0 pe-lg-0">
                            <button class="ms-lg-2 ms-xl-4 rounded-pill btn btn-primary"
                                    type="button">Follow
                            </button>
                        </div>
                    </div>
    </li>

`)
};

export default WhoToFollowListItem;