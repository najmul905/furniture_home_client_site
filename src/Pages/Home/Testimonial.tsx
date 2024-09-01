
const Testimonial = () => {
    return (
        <div className="mt-10">
             <title className="flex items-center justify-center gap-10 my-10">
                <hr className="w-52  border-2 border-slate-400" /><h1 className="uppercase text-[25px] text-slate-600">Testimonial</h1><hr className="w-52 border-2 border-slate-400"/>
            </title>
            <div className="bg-slate-100 mx-10 rounded">
            <div className=" mx-[200px] p-10 text-center">
            <img className="h-20 mx-auto rounded-full" src="https://i.postimg.cc/W4Rt601B/de3f99a1-9894-4e4c-921d-ffb323c8a0a0.png" alt="" />
            <p className="my-5 text-[14px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus odit, excepturi maxime quod, deleniti voluptatem dolor odio consectetur non, error reprehenderit laudantium blanditiis. Officiis corrupti minus, fuga molestiae delectus eos!</p>
            <h1 className=" mb-5 text-[15px] font-semibold">Name of client</h1>
            <h3 className="text-[18px] font-bold text-slate-600">Position</h3>
            </div>
            </div>
        </div>
    );
};

export default Testimonial;