import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navebar/Navbar";


const App = () => {
 
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;