import React, {useState} from "react";
import "./index.css"
import {useDispatch} from "react-redux";
import {addTuit} from "../tuits/tuits-reducer"

const WhatsHappening = ()=>{

let [whatsHappening,setWhatsHappening] = useState("");

const textAreaHandler =(event)=>{
    let text= event.target.value;
    setWhatsHappening(text);
}
const  disPatch = useDispatch();
const tuitClickHandler = ()=>{
    disPatch(addTuit(whatsHappening));

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

        </div>
    );

}
export default WhatsHappening;