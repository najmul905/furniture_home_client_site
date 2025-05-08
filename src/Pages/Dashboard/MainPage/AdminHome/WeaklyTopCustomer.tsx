import { useGetUsersQuery } from "../../../../Redux/features/api/baseApi";

const WeaklyTopCustomer = () => {
    const {data}=useGetUsersQuery()
    console.log(data)
    return (
        <div className="card-body w-full bg-base-100 h-[350px] border rounded overflow-y-scroll shadow-xl">
            <h1 className="font-TestimonialFont font-bold text-[22px]">Weakly Top Customer</h1>
            <div>
        {
            data?.map((user)=>(
                <div key={user._id} className="flex items-center space-x-2 p-2 border-b-2 border-gray-200">
                    <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" />
                    <div className="flex items-center justify-between w-full">
                    <h1 className="text-[13px] font-semibold">{user.name}</h1>
                    <button  className="border-b-2 text-[12px] cursor-not-allowed">View</button>
                    </div>
                </div>
            ))
        }
            </div>
        </div>
    );
};

export default WeaklyTopCustomer;