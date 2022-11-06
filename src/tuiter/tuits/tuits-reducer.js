import {createSlice} from "@reduxjs/toolkit";
import tuits from "./tuits.json"

const tuitsSlice = createSlice({
    name:"tuits",
    initialState: tuits,
    reducers: {
        addTuit(state,action){
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
                postContent:action.payload,
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
            state.unshift(obj);

        },
        deleteTuit(state,action){
            state.splice(action.payload._id,1);
        }
    }
});
export const {addTuit,deleteTuit} = tuitsSlice.actions
export default tuitsSlice.reducer;


