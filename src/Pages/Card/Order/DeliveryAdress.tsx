import { useSelector } from "react-redux";
import { setConfirmValue, setDetailsConfirmValue } from "../../../Redux/features/confirmOrderSlice/confirmOrderSlice";
import { RootState, useAppDispatch } from "../../../Redux/store";
import { SubmitHandler, useForm, useWatch} from "react-hook-form";
import { useEffect } from "react";
import { useAddOrderProductsMutation } from "../../../Redux/features/api/baseApi";
import { clearCard } from "../../../Redux/features/addCard/addCard";
import Swal from "sweetalert2";


interface formData{
    Name:string,
    Email:string,
    PhonNumber:number,
    HomeTown:string,
    DeliveryAddress:string
}
const DeliveryAddress = () => {
    const dispatch=useAppDispatch()
    const {register,handleSubmit,control,reset}=useForm<formData>()
    const onSubmit:SubmitHandler<formData>=data=>{
     console.log(data)
    }
    const [addOrderProducts]=useAddOrderProductsMutation()
    const{DetailsConfirm,Confirm}=useSelector((state:RootState)=>state.confirmOrderSlice)
    const cardData=useSelector((state:RootState)=>state.addCardSlice.products)
    const SubTotalAmount: string = (cardData || []).reduce((sum, item) => sum + (Number(item.Price) || 0), 0).toFixed(2);

    const Email=useWatch<formData>({control,name:"Email"})
    const Name=useWatch<formData>({control,name:"Name"})
    const PhonNumber=useWatch<formData>({control,name:"PhonNumber"})
    const HomeTown=useWatch<formData>({control,name:"HomeTown"})
    const DeliveryAddress=useWatch<formData>({control,name:"DeliveryAddress"})
    console.log(Confirm)
    
    useEffect(()=>{
        if(Confirm){
            const data={Email,Name,PhonNumber,HomeTown,DeliveryAddress,Data:cardData,OrderDetails:{Amount:SubTotalAmount,TotalProducts:cardData.length}}
            addOrderProducts(data)
            dispatch(setConfirmValue(false))
            dispatch(setDetailsConfirmValue(false))
            dispatch(clearCard())
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            reset()
        }
    },[Email,Name,PhonNumber,HomeTown,DeliveryAddress,cardData,Confirm,SubTotalAmount,addOrderProducts,dispatch,reset])

    // console.log(Email,Name,PhonNumber,HomeTown,DeliveryAddress)
    

    const handelCheckbox=(data:boolean)=>{
        dispatch(setDetailsConfirmValue(data))


    }
    return (
        <div className="border bg-white rounded-md py-4">
            <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4" action="">
                <h1 className="uppercase font-semibold text-[15px] ms-4">2. Delivery Address</h1>
                <p className="ms-4 text-[13px] text-slate-500">*All Field Required</p>
                <div className="mx-4">
                    <label className="text-[14px] font-semibold">
                        Email address*
                    </label>

                    <input required disabled={cardData.length==0} {...register("Email")} placeholder="Email Address" className="border outline-none w-full shadow-2xl ps-2" type="email" name="Email" id="" />
                </div>
                <div className="mx-4">
                    <label className="text-[14px] font-semibold">
                        Name*
                    </label>

                    <input required disabled={cardData.length==0} {...register("Name")} placeholder="Fast Name" className="border outline-none w-full ps-2" type="text" name="Name" id="" />
                </div>
               
                <div className="mx-4">
                    <label className="text-[14px] font-semibold">
                        Phone number*
                    </label>

                    <input required disabled={cardData.length==0} {...register("PhonNumber")} placeholder="Phone number" className="border outline-none w-full ps-2" type="number" name="PhonNumber" id="" />
                </div>
                <div className="mx-4">
                    <label className="text-[14px] font-semibold">
                        Home town*
                    </label>

                    <input required disabled={cardData.length==0} {...register("HomeTown")} placeholder="Home town" className="border outline-none w-full ps-2" type="text" name="HomeTown" id="" />
                </div>
                <div className="mx-4">
                    <label className="text-[14px] font-semibold">
                        Delivery Address*
                    </label>

                    <input required disabled={cardData.length==0} {...register("DeliveryAddress") } placeholder="Delivery Address" className="border outline-none w-full ps-2" type="text" name="DeliveryAddress" id="" />
                </div>
                <div className="ms-4 flex gap-1 items-center ">
                    <input disabled={cardData.length==0} onClick={()=>handelCheckbox(!DetailsConfirm)} type="checkbox" name="accept_terms" id="accept_terms" />
                    <label className="text-[12px] text-slate-500 font-semibold">Same Building Address</label>
                </div>
            </form>
        </div>
    );
};

export default DeliveryAddress;
