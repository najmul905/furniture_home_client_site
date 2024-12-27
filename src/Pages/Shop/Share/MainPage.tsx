import CarouselPage from './CarouselPage';
import Products from './Products';

const MainPage = () => {
    return (
        <div className='pt-20 ml-[20vw] px-12'>
            <CarouselPage></CarouselPage>
            <div className='mt-12'>
            <Products></Products>
            </div>
        </div>
    );
};

export default MainPage;