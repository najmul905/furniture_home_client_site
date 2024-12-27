import { lazy } from "react";

export const LazyHome=lazy(()=> import("./Pages/Home/Home"))
export const LazyProducts=lazy(()=> import("./Pages/Shop/Share/Products"))
export const LazyLatestFurniture=lazy(()=> import("./Pages/LatestFurniture/LatestFurniture"))