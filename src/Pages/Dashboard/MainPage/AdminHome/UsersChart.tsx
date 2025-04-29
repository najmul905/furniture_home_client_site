import { LineChart } from '@mui/x-charts/LineChart';
import { useGetUserGrowthQuery } from '../../../../Redux/features/api/baseApi';

const UsersChart = () => {
   
    const { data, isLoading } = useGetUserGrowthQuery();
    console.log(data, isLoading);
    const cleanedData = data?.filter(
        (d) => d?.month && typeof d?.users === 'number' && !isNaN(d.users)
    ) || [];

    const Dates = cleanedData?.map((d) => d.month) || [];
    const Users = cleanedData?.map((d) => d.users) || [];
    console.log(Dates, Users);

    const isDataAvailable = Dates.length > 0 && Users.length > 0;

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : isDataAvailable ? (
                <LineChart
                xAxis={[
                    {
                      id: 'months',         
                      data: Dates,          
                      scaleType: 'point',    
                      label: 'Month',        
                    },
                  ]}
                  yAxis={[
                    {
                      id: 'users',
                      label: 'Number of Users',  
                    },
                  ]}
                  series={[
                    {
                      data: Users,             
                      label: 'User Growth',
                      area: true,            
                      color: '#2fa690',        
                    },
                  ]}
                  height={300}
                  width={450} 
                />
            ) : (
                <p>No data available</p> 
            )}
        </div>
    );
};

export default UsersChart;