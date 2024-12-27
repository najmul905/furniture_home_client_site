import { lazy } from "react";

export const LazyHome=lazy(()=> import("./Pages/Home/Home"))
export const LazyAllProducts=lazy(()=> import("./Pages/Shop/Share/AllProducts"))
export const LazyLatestFurniture=lazy(()=> import("./Pages/LatestFurniture/LatestFurniture"))