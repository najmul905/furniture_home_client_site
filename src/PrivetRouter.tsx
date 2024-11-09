// import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "./Redux/store";

const PrivetRouter = ({children}) => {
    
    const { }=useSelector((state:RootState)=>state.userSlice)
    const location=useLocation()
    if(isLoading){

        <Navigate to="/LogIn" state={{form:location}}></Navigate> ;
    }else{

    }
    return children
};

export default PrivetRouter;