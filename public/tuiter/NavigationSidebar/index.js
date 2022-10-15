const  NavigationSidebar = () =>{

    return `
            <ul class="list-group">
                <li class="list-group-item list-group-item-action text-decoration-none ps-3 pe-3"><a
                        href="#"><i
                        class="fa-brands fa-twitter"></i></a></li>
                <li class="list-group-item list-group-item-action ps-3 pe-3"><a
                        class="text-dark text-decoration-none" href="#"><i
                        class="me-2 fa-solid fa-house "></i><span class="d-none d-xl-inline-block">Home</span></a>
                </li>
                <li class="list-group-item active ps-3 pe-3"><a
                        class="text-decoration-none text-white" href="#"><i
                        class="me-2 fa-sharp fa-solid fa-hashtag "></i><span
                        class="d-none d-xl-inline-block"
                        id="#explore">Explore</span></a>
                </li>
                <li class="list-group-item list-group-item-action ps-3 pe-3"><a
                        class="text-dark text-decoration-none" href="#"><i
                        class="me-2 fa-sharp fa-solid fa-bell "></i><span
                        class=" d-none d-xl-inline-block">Notifications</span></a></li>
                <li class="list-group-item list-group-item-action ps-3 pe-3"><a
                        class="text-dark text-decoration-none"
                        href="#"><i class="me-2 fa-solid fa-envelope "></i><span
                        class=" d-none d-xl-inline-block">Messages</span></a>
                </li>
                <li class="list-group-item list-group-item-action ps-3 pe-3"><a
                        class="text-dark text-decoration-none"
                        href="#"><i class="me-2 fa-solid fa-bookmark "></i><span
                        class=" d-none d-xl-inline-block">Bookmarks</span></a>
                </li>
                <li class="list-group-item list-group-item-action ps-3 pe-3"><a
                        class="text-dark text-decoration-none"
                        href="#"><i class="me-2 fa-solid fa-list "></i><span
                        class=" d-none d-xl-inline-block">Lists</span></a>
                </li>
                <li class="list-group-item list-group-item-action ps-3 pe-3"><a
                        class="text-dark text-decoration-none"
                        href="#"><i class="me-2 fa-solid fa-user "></i><span
                        class="d-none d-xl-inline-block">Profile</span></a>
                </li>
                <li class="list-group-item list-group-item-action ps-3 pe-3">
                    <a class="text-dark text-decoration-none"
                       href="#"><i class="me-2 fa-sharp fa-solid fa-circle-chevron-down "></i><span
                            class="d-none d-xl-inline-block">More</span></a>
                </li>
            </ul>

            <button class="w-100 btn btn-primary rounded-pill mt-2">Tuit</button>
    `;

};

export default NavigationSidebar;