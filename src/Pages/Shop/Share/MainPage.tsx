import CarouselPage from './CarouselPage';
import AllProducts from './AllProducts';

const MainPage = () => {
    return (
        <div className='pt-20 ml-[20vw] px-12'>
            <CarouselPage></CarouselPage>
            <div className='mt-12'>
            <AllProducts></AllProducts>
            </div>
        </div>
    );
};

export default MainPage;