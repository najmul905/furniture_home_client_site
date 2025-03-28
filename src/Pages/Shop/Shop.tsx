import Category from './Share/Category';
import MainPage from './Share/MainPage';
import BackDrop from '../../Components/Backdrop/Backdrop';

const Shop = () => {
    return (
        <div>
            <div className=' flex '>
            <Category ></Category>
           <MainPage></MainPage>
        </div>
        <div>
            <BackDrop></BackDrop>
        </div>
        </div>
    );
};

export default Shop;