import Category from "./Share/Category";
import Products from "./Share/Products";

const LayOut = () => {
    return (
        <div className="flex">
            <div className="h-screen sticky top-0  w-[20vw] "><Category></Category></div>
            <div className="flex-1 mx-5 md:mx-20"><Products></Products></div>
        </div>
    );
};

export default LayOut;