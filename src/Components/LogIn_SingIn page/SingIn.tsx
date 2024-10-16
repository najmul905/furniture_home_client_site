import {SubmitHandler, useForm} from 'react-hook-form';
interface FormData{
    Name:string,
    Email:string,
    Password:number,
    ConfirmPassword:number,
    Image:string
}


const SingUp = () => {
    const {register,handleSubmit,formState:{errors}}=useForm<FormData>()
    console.log(errors)
    const onSubmit:SubmitHandler<FormData>=(data)=>{
        console.log(data)
    }
    return (
        <div className='h-screen flex items-center justify-center '>
            <form onSubmit={handleSubmit(onSubmit)} className=' bg-slate-200 p-5 rounded-md shadow-lg w-1/3 flex flex-col '  action="">
                <h1 className='text-2xl font-semibold mb-2 text-center'>Log In </h1>
                <label className='text-[18px] mb-1'>Name</label>
                <input className='ps-4 py-1 border border-slate-600 rounded-md' {...register("Name")} type="text" name="Name" id="" />
                <label className='text-[18px] mb-1'>Email</label>
                <input className='ps-4 py-1 border border-slate-600 rounded-md' {...register("Email")} type="email" name="Email" id="" />
                <label className='text-[18px] mb-1 mt-2'>Password</label>
                <input className='ps-4 py-1 border border-slate-600 rounded-md' {...register("Password")} type="password" name="Password" id="" />
                <label className='text-[18px] mb-1 mt-2'>Confirm Password</label>
                <input className='ps-4 py-1 border border-slate-600 rounded-md' {...register("ConfirmPassword")} type="password" name="ConfirmPassword" id="" />
                <input type="file"  className="my-4 mx-auto file:bg-gradient-to-b file:from-[#bc7c28] file:to-[#5c3b10] file:border-none file:rounded-full file:px-4 file:py-2 file:shadow-inner file:shadow-white  file:font-semibold file:text-white bg-slate-700 shadow-inner shadow-white p-4 rounded-full text-white" {...register("Image")} name="Image" id="" />
                <button className='text-[14px] font-semibold rounded bg-slate-700 text-white p-2 mt-4 w-1/4 mx-auto'>SingUp</button>
               
               
            </form>
        </div>
    );
};

export default SingUp;