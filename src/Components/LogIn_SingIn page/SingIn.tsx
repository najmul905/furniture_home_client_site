import { useEffect, useState } from 'react';
import {SubmitHandler, useForm, useWatch} from 'react-hook-form';
import { useAppDispatch } from '../../Redux/store';
import { createUser } from '../../Redux/features/userSlice/userSlice';

interface FormData{
    Name:string,
    Email:string,
    Password:string,
    ConfirmPassword:string,
    Image:string
}


const SingUp = () => {
    const [disable,setDisable]=useState(true)
    const {register,control,handleSubmit,formState:{errors},}=useForm<FormData>({
        defaultValues:{
            Password:'',
            ConfirmPassword:''
        }
    })
    console.log(errors)
    const password=useWatch<FormData>({control,name:"Password"})
    const confirmPassword=useWatch<FormData>({control,name:"ConfirmPassword"})

    useEffect(()=>{
       if(password!==undefined&&
        password!==''&&
        confirmPassword!==undefined&&
        confirmPassword!==''&&
        password==confirmPassword
       ){
        setDisable(false)
       }else{
        setDisable(true)
       }       
    },[password,confirmPassword])

    const imageUploadingUrl: string = import.meta.env.VITE_image_hosting_url

    const dispatch= useAppDispatch()
    const onSubmit:SubmitHandler<FormData>=(data)=>{
        const email=data.Email
        const password=data.Password
        const name=data.Name
        const Image=data.Image
        const formData=new FormData()
        formData.append("image",Image[0])
        fetch(imageUploadingUrl,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(imgURL=>{
            const image:string=imgURL.data.display_url

         dispatch(createUser({email,password,name,image}))
        })



    }
    return (
        <div className='h-screen flex items-center justify-center '>
            <form onSubmit={handleSubmit(onSubmit)} className=' bg-slate-200 p-5 rounded-md shadow-lg w-1/3 flex flex-col '  action="">
                <h1 className='text-2xl font-semibold mb-2 text-center'>Log In </h1>
                <label className='text-[18px] mb-1'>Name</label>
                <input className='ps-4 py-1 border border-slate-600 rounded-md' {...register("Name")} type="text" name="Name" id="name" />
                <label className='text-[18px] mb-1'>Email</label>
                <input className='ps-4 py-1 border border-slate-600 rounded-md' {...register("Email")} type="email" name="Email" id="email" />
                <label className='text-[18px] mb-1 mt-2'>Password</label>
                <input className='ps-4 py-1 border border-slate-600 rounded-md' {...register("Password")} type="password" name="Password" id="password" />
                <label className='text-[18px] mb-1 mt-2' >Confirm Password</label>
                <input className='ps-4 py-1 border border-slate-600 rounded-md' {...register("ConfirmPassword")} type="password" name="ConfirmPassword" id="confirmPassword" />
                <input type="file"  className="my-4 mx-auto file:bg-gradient-to-b file:from-[#bc7c28] file:to-[#5c3b10] file:border-none file:rounded-full file:px-4 file:py-2 file:shadow-inner file:shadow-white  file:font-semibold file:text-white bg-slate-700 shadow-inner shadow-white p-4 rounded-full text-white" {...register("Image")} name="Image" id="" />
                <button disabled={disable} className={`text-[14px] font-semibold rounded  ${disable?"bg-slate-300":"bg-slate-800"} text-white p-2 mt-4 w-1/4 mx-auto`}>SingUp</button>
               
               
            </form>
        </div>
    );
};

export default SingUp;