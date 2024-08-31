import Banner from './Banner';
import BestSelling from './BestSelling';
import FurnitureProducts from './FurnitureProducts';
import LatestProducts from './LatestProducts';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BestSelling></BestSelling>
            <FurnitureProducts></FurnitureProducts>
            <Testimonial></Testimonial>
            <LatestProducts></LatestProducts>
        </div>
    );
};

export default Home;