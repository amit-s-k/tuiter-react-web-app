import React, {useEffect} from "react";
import TuitItem from "./TuitItem.js";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";
const TuitList = () => {
    // const Tuits = useSelector(state => state.tuits);
    const {tuits,loading} = useSelector(state => state.tuitsData)

    console.log("currently tuits are ",tuits)
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(findTuitsThunk())
    });

    return (
        <ul className={"list-group"}>
            {
                loading &&
                <li className="list-group-item">
                    Loading
                </li>
            }
            {
                tuits.map(item => <TuitItem tuitItem={item}/>)
            }
        </ul>
    );
};
export default TuitList;