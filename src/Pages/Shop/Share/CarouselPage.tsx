import { useEffect, useState, useCallback } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const CarouselPage = () => {
  const [cur, setCur] = useState<number>(0);
  
  // auto slide element
  const autoSlide: boolean = true;
  const autoSlideTime: number = 3000;

  interface Data {
    _id: string;
    image: string;
  }

  const [data, setData] = useState<Data[]>([]);

  // Data fetching
  useEffect(() => {
    fetch('BestSelling.json')
      .then((res) => res.json())
      .then((dt: Data[]) => setData(dt))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  const pre = useCallback(() => {
    setCur((cur) => (cur === 0 ? data.length - 1 : cur - 1));
  }, [data]);

  const next = useCallback(() => {
    setCur((cur) => (cur === data.length - 1 ? 0 : cur + 1));
  }, [data]);

  // Auto Slide
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideTime);
    return () => clearInterval(slideInterval);
  }, [autoSlide, next, autoSlideTime]);

 

  return (
    <div className="overflow-hidden rounded-lg relative">
      <div
        className="= flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${cur * 100}%)` }}
      >
        {data?.map((item) => (
          <div className="w-full h-60 flex-shrink-0" key={item._id}>
            <img className="w-full h-60 object-cover" src={item.image} alt="" />
           
          </div>

        ))}
      </div>

      {/* arrow buttons */}
      <div className="absolute inset-0 flex items-center justify-between mx-8">
        <button onClick={pre}>
          <IoIosArrowDropleftCircle size={25} className="text-white active:text-black" />
        </button>
        <button onClick={next}>
          <IoIosArrowDroprightCircle size={25} className="text-white active:text-black" />
        </button>
      </div>
    </div>
  );
};

export default CarouselPage;
