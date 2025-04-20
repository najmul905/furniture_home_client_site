import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../Redux/store";
import { MdDelete } from "react-icons/md";
import { removeProduct } from "../../Redux/features/addCard/addCard";
import Swal from "sweetalert2";


const ProductsDetails = () => {
    const Data=useSelector((state:RootState)=>state.addCardSlice.products)
    const dispatch=useAppDispatch()

    const handelDelete=(data:string|number|undefined=undefined)=>{
        if(data!=undefined){
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(removeProduct(data))
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
        }
        else{
            console.log("Your data is Undefined")
        }
        
    }

    return (
        <div className="bg-slate-700 text-white h-screen overflow-y-scroll">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-white">
       
        <th>Name</th>
        <th>Details</th>
        <th>Price</th>
        <th>Delete</th>
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
            <button onClick={()=>handelDelete(data._id)} className="text-red-600">< MdDelete size={20} />
            </button>
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