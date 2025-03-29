import { useDeleteUserMutation, useGetUsersQuery } from "../../../Redux/features/api/baseApi";

const AllUsers = () => {
    const {data,isLoading}=useGetUsersQuery()
    const [DeleteUser]=useDeleteUserMutation()
    console.log(data,isLoading)

    const handelUpdateUserStatus=(id:string|number)=>{
        console.log(id)
    }
    const DeleteUer=(id:string|number)=>{
        DeleteUser(id)
    }
    return (
        <div className="pt-20">
            
         
            <div className=" w-full p-4">
      <table className="w-full border border-gray-200 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Image</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Status</th>
            <th className="p-3">Update User Status</th>
            <th className="p-3">Delete User</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {data?.map((user) => (
            <tr key={user._id} className="border-t w-full hover:bg-gray-50">
              <td className="p-3">
                <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" />
              </td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className={`p-3 font-semibold ${user.userStatus === "Admin" ? "text-green-600" : user.userStatus === "Inactive" ? "text-red-600" : "text-yellow-500"}`}>
                {user.userStatus}
              </td>
              <td className="p-3"><button onClick={()=>handelUpdateUserStatus(user._id)} className="hover:underline">Make admin</button></td>
              <td className="p-3"><button onClick={()=>DeleteUer(user._id)} className="text-red-600 hover:underline">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
           
        </div>
    );
};

export default AllUsers;