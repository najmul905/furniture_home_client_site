import { Outlet } from "react-router-dom";

const MainPage = () => {
    return (
        <div className="pt-20 ">
           <Outlet></Outlet>
        </div>
    );
};

export default MainPage;