import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navebar/Navbar";
import { useAppDispatch } from "./Redux/store";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Components/Firebase/Firebase";
import { setUser } from "./Redux/features/userSlice/userSlice";


const App = () => {
 
  const dispatch = useAppDispatch();

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
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
            )} 
      });
      return () => unsubscribe(); 
  }, [dispatch]);
  return (
    <div>
      <Navbar></Navbar>
      <div >
      <Outlet></Outlet>
      </div>
   
    </div>
  );
};

export default App;