import { useCallback, useEffect, useState } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import {motion} from "framer-motion"

const Testimonial = () => {
    interface Data {
        Name: string,
        Image: string,
        Position: string,
        About: string
    }
    const autoSlide: boolean = true;
  const autoSlideTime: number = 4000;
    const [cur,setCur]=useState<number>(0)
    const [data, setData] = useState<Data[]>([])
    useEffect(() => {
        fetch("Testimonial.json")
            .then(res => res.json())
            .then(item => {
                setData(item)
            })
    }, [])

    const pre = useCallback(() => {
        setCur((cur) => (cur === 0 ? data.length - 1 : cur - 1));
      }, [data]);
    
      const next = useCallback(() => {
        setCur((cur) => (cur === data.length - 1 ? 0 : cur + 1));
      }, [data]);
    
      useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideTime);
        return () => clearInterval(slideInterval);
      }, [autoSlide, next, autoSlideTime]);

    return (
        <div className="mt-10">
            <title className="flex items-center justify-center gap-10 my-10">
                <hr className="w-52  border-2 border-slate-400" /><h1 className="uppercase text-[25px] text-slate-600">Testimonial</h1><hr className="w-52 border-2 border-slate-400" />
            </title>
            <div className="overflow-hidden relative mx-14 rounded-md">
                <div className="flex transition-transform ease-out duration-500"
                 style={{ transform: `translateX(-${cur * 100}%)` }}
                >
                    {
                        data?.map((Data, index) => (
                            <motion.div
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{duration:2}}
                            key={index} className="h-64 w-full flex-shrink-0 bg-slate-500">
                                <img className="mx-auto h-20 w-20 rounded-full mt-3" src={Data.Image} alt="" />
                                <div className="px-36 text-center text-white">
                                    <p className="my-4 ">{Data.About}</p>
                                    <h1 className="text-[18px] font-bold">{Data.Name}</h1>
                                    <h1 className="mt-4 font-semibold">{Data.Position}</h1>
                                </div>

                            </motion.div>
                        ))
                    }
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
        </div>
    );
};

export default Testimonial;