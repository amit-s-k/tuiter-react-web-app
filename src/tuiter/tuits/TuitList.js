import React from "react";
import TuitItem from "./TuitItem.js";
import {useSelector} from "react-redux";
const TuitList = () => {
    const Tuits = useSelector(state => state.tuits);

    return (

        Tuits.map(item => <TuitItem tuitItem={item}/>)

    );

};

export default TuitList;