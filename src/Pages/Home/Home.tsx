import Banner from './Banner';
import BestSelling from './BestSelling';
import FurnitureFeature from './FurnitureFeature';
import LatestProducts from './LatestProducts';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BestSelling></BestSelling>
            <FurnitureFeature></FurnitureFeature>
            <Testimonial></Testimonial>
            <LatestProducts></LatestProducts>
        </div>
    );
};

export default Home;