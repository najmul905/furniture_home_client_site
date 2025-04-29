import Sales_growth from "./AdminHome/Sales_growth";
import UsersChart from "./AdminHome/UsersChart";

const AdminHome = () => {
    return (
        <div className="pt-20">
            <div className="md:flex md:items-center md:gap-4 md:justify-between">
            <UsersChart></UsersChart>
            <Sales_growth></Sales_growth> 
            </div>
           
        </div>
    );
};

export default AdminHome;