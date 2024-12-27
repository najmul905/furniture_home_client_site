import { useSelector } from 'react-redux';
import Footer from '../../Components/Footer/Footer';
import Banner from './Banner';
import BestSelling from './BestSelling';
import FurnitureProducts from './FurnitureProducts';
import LatestProducts from './LatestProducts';
import Testimonial from './Testimonial';
import { RootState } from '../../Redux/store';
import BackDrop from '../../Components/Backdrop/Backdrop';

const Home = () => {
    const  {isLoading}=useSelector((state:RootState)=>state.userdataSlice)

    return (
        <div className=''>
           <div hidden={isLoading}>
             <Banner></Banner>
            <BestSelling></BestSelling>
            <FurnitureProducts></FurnitureProducts>
            <Testimonial></Testimonial>
            <LatestProducts></LatestProducts>
            <Footer></Footer>
            </div>
           <div>
        <BackDrop></BackDrop>
           </div>
        </div>
    );
};

export default Home;