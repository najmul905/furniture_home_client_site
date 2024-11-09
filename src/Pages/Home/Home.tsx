import Footer from '../../Components/Footer/Footer';
import Banner from './Banner';
import BestSelling from './BestSelling';
import FurnitureProducts from './FurnitureProducts';
import LatestProducts from './LatestProducts';
import Testimonial from './Testimonial';

const Home = () => {
   
    return (
        <div className=''>
            <Banner></Banner>
            <BestSelling></BestSelling>
            <FurnitureProducts></FurnitureProducts>
            <Testimonial></Testimonial>
            <LatestProducts></LatestProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;