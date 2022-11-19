import React, {useState} from "react";
import "./index.css"
import {useDispatch} from "react-redux";
import {createTuitThunk} from "../../services/tuits-thunks";

const WhatsHappening = ()=>{

let [whatsHappening,setWhatsHappening] = useState("");

const textAreaHandler =(event)=>{
    let text= event.target.value;
    setWhatsHappening(text);
}
const  disPatch = useDispatch();
const tuitClickHandler = ()=>{
            const obj = {
                _id: (new Date()).getTime(),
                topic: "",
                userName: "Javascript",
                image: "../../images/javascript.png",
                title: "Javascript is programming language that can run on browsers as well as desktops",
                tweets :"123k Tweets",
                avatarIcon:"../../images/rocky.jpg",
                username:"Elon Musk",
                handle:"@elonmusk",
                postContent:"",
                time:"23h",
                postImage:"../../images/kgf2.jpg",
                postImageCaption:"Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                postImageText:"From training to launch to landing, this all access docuseries rides along with the Inspiration4 crew on the first crew on the first all-civilian orbital space ...",
                liked : false,
                replies : 0,
                retuits: 0,
                likes: 0,
                tuit : "amit"
            }
    const newTuit = {
        ...obj,
        postContent: whatsHappening
    }
    disPatch(createTuitThunk(newTuit));

}
    return (
        <div className={"row wd-row-border"}>

            <div className={"col-2"}>
                <img alt="" className="wd-icon rounded-circle" src={"../../images/rocky.jpg"}/>
            </div>
            <div className={"col-10"}>
                <div className={"row"}>
                    <textarea onChange={textAreaHandler} className={"wd-text-area"} placeholder={"What's happening"} value={whatsHappening}></textarea>
                </div>
                <div className={"row"}>
                    <div className={"col-10 text-primary fs-2"}>
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className={"col-2"}><button onClick={tuitClickHandler} className={"btn btn-primary rounded-pill"}>Tuit</button></div>
                </div>
            </div>
            <hr className={"mt-2"}/>

        </div>
    );

}
export default WhatsHappening;