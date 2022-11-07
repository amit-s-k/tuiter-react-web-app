import {createSlice} from "@reduxjs/toolkit";
import profiledata from "./profile.json"

const profileSlice = createSlice(
    {
             name: "profile",
             initialState: profiledata,
             reducers:{
                 editProfile(state,action){
                     state=action.payload;
                     return state;

                 }
             }
            })

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;