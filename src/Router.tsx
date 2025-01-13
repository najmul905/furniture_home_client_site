import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Dashboard from "./Pages/Dashboard/Dashboard";
// import LatestFurniture from "./Pages/LatestFurniture/LatestFurniture";
import AddProducts from "./Pages/Dashboard/MainPage/AddProducts";
import AddLatestProducts from "./Pages/Dashboard/MainPage/AddLatestProducts";
// import AllProducts from "./Pages/Shop/Share/AllProducts";
import MainPage from "./Pages/Shop/Share/MainPage";
import Offer from "./Pages/Offer/Offer";
import LogIn from "./Components/LogIn_SingIn page/LogIn";
import SingUp from "./Components/LogIn_SingIn page/SingIn";
import {  Suspense } from "react";
// import SkeletonUI from "./Components/Skeleton/Skeleton";
import { LazyProducts, LazyHome, LazyLatestFurniture } from "./LazyComponents";
import CircularWithValueLabel from "./Components/Progress/Progress";
import AdminHome from "./Pages/Dashboard/MainPage/AdminHome";
import Card from "./Pages/Card/Card";
import Order from "./Pages/Card/Order/Order";



export const router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:(
                    <Suspense fallback={<CircularWithValueLabel></CircularWithValueLabel>}>
                       <LazyHome></LazyHome>
                    </Suspense>
                )
            },
            {
                path:'shope',
                element:<Shop></Shop>,
                children:[
                    {
                        path:'mainPage/:category',
                        element:<MainPage></MainPage>
                    }
                ]
            },
            {
                path:"Products/:name",
                element:(
                    <Suspense fallback={<CircularWithValueLabel></CircularWithValueLabel>}>
                        <LazyProducts></LazyProducts>
                    </Suspense>
                )
            },
           {
            path:'dashboard',
            element:<Dashboard></Dashboard>,
            children:[
                {
                    path:'/dashboard',
                    element:<AdminHome></AdminHome>
                },
                {
                    path:"addProducts",
                    element:<AddProducts></AddProducts>
                },
                {
                    path:"addLatestProducts",
                    element:<AddLatestProducts></AddLatestProducts>
                }
            ]
           },
           {
            path:'latestFurniture',
            element:(
                <Suspense fallback={<CircularWithValueLabel></CircularWithValueLabel>}>
                    <LazyLatestFurniture></LazyLatestFurniture>
                </Suspense>
            )
           },
           {
            path:"offer",
            element:<Offer></Offer>
           },
           {
            path:"card",
            element:<Card></Card>
           },
           {
            path:"order",
            element:<Order></Order>
           }
           
        ]
    },
    {
        path:"logIn",
        element:<LogIn></LogIn>
    },
    {
        path:"singUp",
        element:<SingUp></SingUp>
    }
])