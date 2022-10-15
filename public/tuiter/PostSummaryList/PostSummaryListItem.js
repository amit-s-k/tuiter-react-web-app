const PostSummaryList = (post) =>{

    let tweets;
    let  webDevText;
    if(post.topic!==undefined){
        webDevText = `<p class='text-secondary mb-0'>${post.topic}</p>`;
    }else{
        webDevText = "";
    }

    if(post.tweets!==undefined){
        tweets = `<p class='text-secondary'>${post.tweets}</p>`;
    }else{
        tweets = "";
    }



    return (`
    
            <li class="list-group-item">
                    <div class="row">
                        <div class="col-10">
                        
                            ${webDevText}
                           
                            <p class="mb-0">
                                <span class="fw-bold">
                                    ${post.userName} <i class="fa-sharp fa-solid fa-circle-check"></i>
                                    <span class="text-secondary"> - ${post.time}</span>
                                </span>
                            </p>
                            <p class="fw-bold mb-0">
                            ${post.title}
                            </p>
                            ${tweets}

                        </div>
                        <div class="col-2">
                            <img class="wd-react rounded" src='${post.image}'>
                        </div>
                    </div>

            </li>
    
    `);

}

export default PostSummaryList;