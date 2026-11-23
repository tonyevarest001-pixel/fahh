import { BrowserRouter, Routes, Route } from "react-router-dom";
// import User from "./user";
import Pwd from "./pwd";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                 {/* <Route path="/user" element={<User/>}/>  */}
                <Route path="/" element={<Pwd/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}