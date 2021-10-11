import { useContext } from "react";
import { authContext } from "../Context/AuthProvider.js";

const UseAuth = () =>{
    return useContext(authContext);
}
export default UseAuth;