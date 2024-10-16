import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

interface formData{
    Email:string,
    Password:number
}
const LogIn = () => {
    const {register, handleSubmit}=useForm<formData>()
    const onSubmit:SubmitHandler<formData>=data=>{
        console.log(data)
    }
    return (
        <div className='h-screen flex items-center justify-center '>
        <form onSubmit={handleSubmit(onSubmit)} className=' bg-slate-200 p-5 rounded-md shadow-lg w-1/3 flex flex-col '  action="">
            <h1 className='text-2xl font-semibold mb-2 text-center'>Log In </h1>
            <label className='text-[18px] mb-1'>Email</label>
            <input {...register("Email")} required className='py-1 border border-slate-600 rounded-md' type="email" name="Email" id="1" />
            <label className='text-[18px] mb-1 mt-2'>Password</label>
            <input {...register("Password")} required className='py-1 border border-slate-600 rounded-md' type="password" name="Password" id="2" />
            <button className='text-[14px] font-semibold rounded bg-slate-700 text-white p-2 mt-4 w-1/4 mx-auto'>LogIn</button>
            <span className='font-semibold text-center my-2 text-green-700'>Or</span>
            <button className='text-[16px] font-semibold rounded bg-slate-700 text-white p-2  w-1/2 mx-auto flex items-center justify-center gap-2'>LogIn with Google <FcGoogle />
            </button>
            <Link to="/singUp" className='text-[14px] font-semibold underline cursor-pointer text-green-900 text-center mt-3 ' >Create a new account</Link>

        </form>
    </div>
    );
};

export default LogIn;