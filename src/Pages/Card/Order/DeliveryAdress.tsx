
const DeliveryAddress = () => {
    return (
        <div className="border bg-white rounded-md py-4">
            <form className="flex flex-col gap-y-4" action="">
                <h1 className="uppercase font-semibold text-[15px] ms-4">2. Delivery Address</h1>
                <p className="ms-4 text-[13px] text-slate-500">*All Field Required</p>
                <div className="mx-4">
                    <label className="text-[14px] font-semibold">
                        Email address*
                    </label>

                    <input placeholder="Email Address" className="border outline-none w-full shadow-2xl ps-2" type="email" name="" id="" />
                </div>
                <div className="mx-4">
                    <label className="text-[14px] font-semibold">
                        Name*
                    </label>

                    <input placeholder="Fast Name" className="border outline-none w-full ps-2" type="text" name="" id="" />
                </div>
               
                <div className="mx-4">
                    <label className="text-[14px] font-semibold">
                        Phone number*
                    </label>

                    <input placeholder="Phone number" className="border outline-none w-full ps-2" type="number" name="" id="" />
                </div>
                <div className="mx-4">
                    <label className="text-[14px] font-semibold">
                        Home town*
                    </label>

                    <input placeholder="Home town" className="border outline-none w-full ps-2" type="text" name="" id="" />
                </div>
                <div className="mx-4">
                    <label className="text-[14px] font-semibold">
                        Delivery Address*
                    </label>

                    <input placeholder="Delivery Address" className="border outline-none w-full ps-2" type="text" name="" id="" />
                </div>
                <div className="ms-4 flex gap-1 items-center ">
                    <input type="checkbox" name="accept_terms" id="accept_terms" />
                    <label className="text-[12px] text-slate-500 font-semibold">Same Building Address</label>
                </div>
            </form>
        </div>
    );
};

export default DeliveryAddress;
