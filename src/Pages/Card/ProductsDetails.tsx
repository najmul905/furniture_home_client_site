import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const ProductsDetails = () => {
    const Data=useSelector((state:RootState)=>state.addCardSlice.products)
    console.log(Data)
    return (
        <div className="bg-red-300">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Details</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
  {
    Data?.map(data=>
        <tbody key={data._id}>
        {/* row 1 */}
        <tr>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={data.Image}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold line-clamp-1">{data.Name}</div>
              </div>
            </div>
          </td>
          <td>
            <p className="line-clamp-1">{data.About}</p> 
          </td>
          <td className="">${data.Price}</td>
          <th>
            <button className="btn btn-ghost btn-xs">Delete</button>
          </th>
        </tr>
      </tbody>
    )
  }
  </table>
</div>
        </div>
    );
};

export default ProductsDetails;