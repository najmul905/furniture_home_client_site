import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../Redux/store";
import { MdDelete } from "react-icons/md";
import { decreaseQuantity, increaseQuantity, removeProduct } from "../../Redux/features/addCard/addCard";
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
          alert("Your data is Undefined") 
        }   
    }

    // Increase Quantity
    const handleIncrease=(id:string|number|undefined=undefined)=>{if(id!=undefined){ dispatch(increaseQuantity(id))}
        else{  alert("Your data is Undefined")} } 
    // Decrease Quantity 
    const handelDecrease=(id:string|number|undefined=undefined)=>{
        if(id!=undefined){ dispatch(decreaseQuantity(id))}
        else{  alert("Your data is Undefined")}
    }

    return (
        <div className="bg-slate-700 pt-14 text-white h-screen overflow-y-scroll">
            <div className="md:overflow-x-auto overflow-none">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-white">
       
        <th>Name</th>
        <th>Details</th>
        <th className="hidden md:block">Price</th>
        <th>Quantity</th>
        <th>Total Price</th>
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
                <div className="md:font-bold font-semibold text-[11px] line-clamp-1">{data.Name}</div>
              </div>
            </div>
          </td>
          <td>
            <p className="line-clamp-1 text-[10px]">{data.About}</p> 
          </td>
          <td className="text-[10px] hidden md:block">${data.Price}</td>
          <th className="text-[10px]"><td className=" flex items-center gap-2"><button disabled={data.Quantity==1} onClick={()=>handelDecrease(data._id)} className={`${data.Quantity==1?"cursor-no-drop":"cursor-pointer"} text-[20px] `}>-</button> {data.Quantity} <button onClick={()=>handleIncrease(data._id)} className="text-[20px]">+</button></td></th>
          <td className="text-[10px]">${data.TotalPrice}</td>
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