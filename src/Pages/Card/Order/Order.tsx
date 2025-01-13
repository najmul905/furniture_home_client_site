import DeliveryAddress from "./DeliveryAdress";
import ReviewOrder from "./ReviewOrder";
import SelectPaymentMethod from "./SelectPaymentMethod";

const Order = () => {
    return (
        <div className="pt-20 bg-[#f7b054]">
            <div>
                <h1 className="uppercase text-[20px] font-semibold text-white text-center">Secure CheckOut</h1>
            </div>
           <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:mx-12  py-8 px-2">
            <div className=""><ReviewOrder></ReviewOrder></div>
            <div className=""><DeliveryAddress></DeliveryAddress></div>
            <div className=""><SelectPaymentMethod></SelectPaymentMethod></div>
           </div>
        </div>
    );
};

export default Order;