import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navebar/Navbar";
import { useAppDispatch } from "./Redux/store";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Components/Firebase/Firebase";
import { setUser } from "./Redux/features/userdataSlice/userdataSlice";
// import BackDrop from "./Components/Backdrop/Backdrop";


const App = () => {
 
  const dispatch = useAppDispatch();

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
          if (currentUser) {
              dispatch(
                  setUser({
                      email: currentUser?.email ||  null,
                      displayName: currentUser?.displayName || null,
                      photoURL: currentUser?.photoURL || null,
                      isLoading:false
                  })
              );
          }else{
            dispatch(
              setUser({
                email:null,
                displayName:null,
                photoURL:null,
                isLoading:false
              })
            )
          } 
      });

      return () => unsubscribe(); // Cleanup on unmount
  }, [dispatch]);
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
      <Outlet></Outlet>
      </div>
      {/* <BackDrop></BackDrop> */}
    </div>
  );
};

export default App;