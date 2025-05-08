import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosArrowRoundForward } from "react-icons/io";
import Swal from "sweetalert2";
import { useAddLatestProductMutation } from "../../../Redux/features/api/baseApi";

const AddLatestProducts = () => {
    const[addLatestProducts]=useAddLatestProductMutation()
    const [loading,setLoading]=useState(false)
    const imageUploadingUrl: string = import.meta.env.VITE_image_hosting_url

    interface input {
        Name: string,
        About: string,
        Price: number,
        Image: string,
        Date:string
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm<input>()
    const onSubmit: SubmitHandler<input> = data => {
        setLoading(true)
        const Image = data.Image
        console.log(errors)
        const formData = new FormData()
        formData.append("image", Image[0])
        fetch(imageUploadingUrl, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(ImageUrl => {
                const Image: string = ImageUrl.data.display_url
                const { Name, Price, About,Date  } = data
                const Data = { Name, Price, About, Image,Date }
                addLatestProducts(Data)
                
                setLoading(false)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500

                });
                reset()
            })
        //   console.log(data)
    }
    return (
    <div className="mx-10">
        <div className=" w-full   pt-20">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full rounded-lg bg-slate-300 p-8" action="">
            <div className="flex mb-2 items-center justify-between gap-6">
                <div className="w-full">
                    <label className="block">Name</label>
                    <input className="w-full bg-white p-2 border-2 rounded-md" required {...register("Name")} placeholder="Name" type="text" />
                </div>
               
            </div>
            <div className=" mb-2  ">
                <div className="w-full">
                    <label className="block">Price</label>
                    <input className="w-full p-2 border-2 bg-white rounded-md" required {...register("Price")} placeholder="Price" type="number" />
                </div>
                
            </div>
            <div className=" mb-2  ">
                <div className="w-full">
                    <label className="block">Date</label>
                    <input className="w-full p-2 border-2 bg-white rounded-md" required {...register("Date")} placeholder="Date" type="date" />
                </div>
                
            </div>
            <div className="mb-2">
                <label className="block">About</label>
                <textarea className="border-2 rounded w-full" required {...register("About")} name="About" rows={5} id=""></textarea>
            </div>
            <div className="text-center mb-6">
                <input
                    type="file" required {...register("Image")}
                    className="file-input file-input-bordered file-input-success w-full max-w-xs" />
            </div>
            <div className="flex justify-center font-semibold text-slate-800">
                <button disabled={loading} className={`border-2 shadow-2xl border-white rounded-full px-3 text-[18px] text-center flex items-center justify-center hover:text-[#bc7c28] active:text-white "}`}>{loading ? "working" : "Submit"} <IoIosArrowRoundForward className="h-5 w-5" /></button>
            </div>
        </form>
    </div>

    </div>
    );
};

export default AddLatestProducts;