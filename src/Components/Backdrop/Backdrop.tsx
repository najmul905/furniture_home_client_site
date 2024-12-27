import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import CircularWithValueLabel from '../Progress/Progress';
const BackDrop = () => {
    const  {isLoading}=useSelector((state:RootState)=>state.userdataSlice)

    return (
        <div>
            
<Backdrop
  sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
  open={isLoading}
  
>
  {/* <CircularProgress color="inherit" /> */}
  <CircularWithValueLabel></CircularWithValueLabel>
</Backdrop>
        </div>
    );
};

export default BackDrop;