import Labs from "./labs/index.js";
import './App.css';
import HelloWorld from "./labs/a6/hello-world.js";
import Tuiter from "./tuiter/index.js";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Explore from "./tuiter/explore";
import HomeComponent from "./tuiter/HomeScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index  element = {<Labs/>}></Route>
                    <Route path="/hello" element = { <HelloWorld/>}></Route>
                    <Route path="/tuiter/*" element = {<Tuiter/>}></Route>
                </Routes>

            </div>
        </BrowserRouter>



);
}
export default App;
