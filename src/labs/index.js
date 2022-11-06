import Assignment6 from "./a6/index.js";
import Nav from "../nav.js";
import Assignment7 from "./a7/index";
import {Route, Routes} from "react-router";
function Labs(){
    return (
        <div>
            <Nav/>
            <Routes>
                <Route index element={<Assignment6/>}></Route>
                <Route path={"/a7"} element={<Assignment7/>}></Route>
            </Routes>
        </div>


    );
}
export  default Labs;