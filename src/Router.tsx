import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LatestFurniture from "./Pages/LatestFurniture/LatestFurniture";
import AddProducts from "./Pages/Dashboard/MainPage/AddProducts";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'shope',
                element:<Shop></Shop>
            },
           {
            path:'dashboard',
            element:<Dashboard></Dashboard>,
            children:[
                {
                    path:"addProducts",
                    element:<AddProducts></AddProducts>
                }
            ]
           },
           {
            path:'latestFurniture',
            element:<LatestFurniture></LatestFurniture>
           }
        ]
    }
])