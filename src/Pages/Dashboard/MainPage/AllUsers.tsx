import { useDeleteUserMutation, useGetUsersQuery, useUpdateUserStatusMutation } from "../../../Redux/features/api/baseApi";

const AllUsers = () => {
  const { data, isLoading } = useGetUsersQuery()
  const [DeleteUser] = useDeleteUserMutation()
  const [UpdateUser] = useUpdateUserStatusMutation()
  console.log(data, isLoading)


  const DeleteUer = (id: string | number) => {
    DeleteUser(id)
  }
  const handelUpdateAdminStatus = (id: string | number) => {
    const status: string = "Admin"
    const data = { status }
    UpdateUser({ id, data })

  }
  const handelUpdateUserStatus = (id: string | number) => {
    const status: string = "user"
    const data = { status }
    UpdateUser({ id, data })
  }
  return (
    <div className="md:pt-20 pt-7">


      <div className=" w-full p-4">
        <table className="w-full border border-gray-200 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 text-[10px] md:text-[13px]">Image</th>
              <th className="p-3 text-[10px] md:text-[13px]">Name</th>
              <th className="p-3 text-[10px] md:text-[13px]">Email</th>
              <th className="p-3 text-[10px] md:text-[13px]">Status</th>
              <th className="p-3 text-[10px] md:text-[13px]">Update User Status</th>
              <th className="p-3 text-[10px] md:text-[13px]">Delete User</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {data?.map((user) => (
              <tr key={user._id} className="border-t w-full hover:bg-gray-50">
                <td className="p-3">
                  <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" />
                </td>
                <td className="p-3 text-[12px] md:text-[9px]">{user.name}</td>
                <td className="p-3 text-[12px] md:text-[9px]">{user.email}</td>
                <td className={`p-3 font-semibold text-[12px] md:text-[9px] ${user.userStatus === "Admin" ? "text-green-600" : user.userStatus === "Inactive" ? "text-red-600" : "text-yellow-500"}`}>
                  {user.userStatus}
                </td>
                {user.userStatus === "user" ? (
                  <td className="p-3 text-[12px] md:text-[9px]">
                    <button onClick={() => handelUpdateAdminStatus(user._id)} className="hover:underline">
                      {isLoading ? <span>Loading...</span> : <span>Make Admin</span>}
                    </button>
                  </td>
                ) : (
                  <td className="p-3 text-[12px] md:text-[9px]">
                    <button onClick={() => handelUpdateUserStatus(user._id)} className="hover:underline">
                      {isLoading ? <span>Loading...</span> : <span>Make User</span>}
                    </button>
                  </td>
                )}
                <td className="p-3 text-[12px] md:text-[9px]"><button onClick={() => DeleteUer(user._id)} className="text-red-600 hover:underline">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AllUsers;