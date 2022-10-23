import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const  NavigationSidebar = () =>{
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <>
            <ul className="list-group">

                <li className="list-group-item list-group-item-action text-decoration-none ps-3 pe-3"><a
                        href="#"><i
                        className="fa-brands fa-twitter"></i></a></li>
                <Link to="/tuiter/home" className= {`list-group-item ps-3 pe-3 ${active === 'home'?'active':''}`}><a
                        className="text-dark text-decoration-none"><i
                        className="me-2 fa-solid fa-house "></i><span className="d-none d-xl-inline-block">Home</span></a>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item ps-3 pe-3 ${active === 'explore'?'active':''}`}><a
                        className="text-dark text-decoration-none"><i
                        className="me-2 fa-sharp fa-solid fa-hashtag "></i><span
                        className="d-none d-xl-inline-block"
                        id="#explore">Explore</span></a>
                </Link>
                <li className="list-group-item list-group-item-action ps-3 pe-3"><a
                        className="text-dark  text-decoration-none" href="#"><i
                        className="me-2 fa-sharp fa-solid fa-bell "></i><span
                        className=" d-none d-xl-inline-block">Notifications</span></a></li>
                <li className="list-group-item list-group-item-action ps-3 pe-3"><a
                        className="text-dark  text-decoration-none"
                        href="#"><i className="me-2 fa-solid fa-envelope "></i><span
                        className=" d-none d-xl-inline-block">Messages</span></a>
                </li>
                <li className="list-group-item list-group-item-action ps-3 pe-3"><a
                        className="text-dark  text-decoration-none"
                        href="#"><i className="me-2 fa-solid fa-bookmark "></i><span
                        className=" d-none d-xl-inline-block">Bookmarks</span></a>
                </li>
                <li className="list-group-item list-group-item-action ps-3 pe-3"><a
                        className="text-dark  text-decoration-none"
                        href="#"><i className="me-2 fa-solid fa-list "></i><span
                        className=" d-none d-xl-inline-block">Lists</span></a>
                </li>
                <li className="list-group-item list-group-item-action ps-3 pe-3"><a
                        className="text-dark  text-decoration-none"
                        href="#"><i className="me-2 fa-solid fa-user "></i><span
                        className="d-none d-xl-inline-block">Profile</span></a>
                </li>
                <li className="list-group-item list-group-item-action ps-3 pe-3">
                    <a className="text-dark  text-decoration-none"
                       href="#"><i className="me-2 fa-sharp fa-solid fa-circle-chevron-down "></i><span
                            className="d-none d-xl-inline-block">More</span></a>
                </li>
            </ul>

            <button className="w-100 btn btn-primary rounded-pill mt-2">Tuit</button>
        </>
        )
};

export default NavigationSidebar;