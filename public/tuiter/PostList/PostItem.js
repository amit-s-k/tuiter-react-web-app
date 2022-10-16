const PostItem = (postItem) => {


    return (`
            <div class="row pt-2 bg-light wd-post-border border-secondary">
            
                <div class="col-1 mt-2">
                    <img class="wd-avatar-image" src='${postItem.avatarIcon}'>
                </div>
                <div class="col-10 ms-2">
                    <div class="row mt-2">
                        <h6>${postItem.username} <i class="fa-sharp fa-solid fa-circle-check"></i> <span class="text-secondary"> ${postItem.handle} &#x2022; ${postItem.time}</span></h6>
                        <p class="text-white">${postItem.postContent}</p>
                    </div>
                    <div class="row wd-image-caption-div border-secondary ms-2">

                            <img class="wd-image border-secondary mb-2 ps-0 pe-0" src='${postItem.postImage}'>

                        <p class="text-white">${postItem.postImageCaption}</p>
                        <p>${postItem.postImageText}</p>
                    </div>
                    <div class="row mt-3 mb-3">
                    
                        <div class="col-3">
                           <i class="fa-regular fa-comment"><span class="ms-3">4.2K</span> </i>
                        </div>
                        <div class="col-3">
                            <i class="fa-solid fa-retweet"><span class="ms-3">3.5K</span> </i>
                        </div>
                        <div class="col-3">
                            <i class="fa-regular fa-heart"><span class="ms-3">37.5K</span> </i>
                        </div>
                        <div class="col-3">
                            <i class="fa-solid fa-upload"></i>
                        </div>
                    </div>
                </div>
            </div>
    `)


};

export default PostItem;