import { Backdrop } from '@mui/material';
import CarouselPage from './CarouselPage';
import Products from './Products';
import CircularWithValueLabel from '../../../Components/Progress/Progress';
import {  useGetProductsDataQuery } from '../../../Redux/features/api/baseApi';

const MainPage = () => {
    const { isLoading } = useGetProductsDataQuery()
    
    return (
        <div>
        <div className='pt-20 ml-[20vw] md:px-12 px-2 '>
            <CarouselPage></CarouselPage>
            <div className='mt-12'>
            <Products></Products>
            </div>
        </div>
        <div>
            <Backdrop
              sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
              open={isLoading && isLoading}
              
            >
              {/* <CircularProgress color="inherit" /> */}
                   <CircularWithValueLabel></CircularWithValueLabel>
              
            </Backdrop>
        </div>
        </div>
    );
};

export default MainPage;