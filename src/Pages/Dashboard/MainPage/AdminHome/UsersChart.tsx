import { LineChart } from '@mui/x-charts/LineChart';
import { useGetUserGrowthQuery } from '../../../../Redux/features/api/baseApi';

const UsersChart = () => {
   
    const { data, isLoading } = useGetUserGrowthQuery();
    const cleanedData = data?.filter(
        (d) => d?.month && typeof d?.users === 'number' && !isNaN(d.users)
    ) || [];

    const Dates = cleanedData?.map((d) => d.month) || [];
    const Users = cleanedData?.map((d) => d.users) || [];


    return (
        <div className='card-body w-full bg-base-100 h-[350px] border rounded shadow-xl'>
            {isLoading ? 
                <p>Loading...</p>
             
                :<LineChart
                xAxis={[
                    {
                      id: 'months',         
                      data: Dates,          
                      scaleType: 'point',    
                            
                    },
                  ]}
                  yAxis={[
                    {
                      id: 'users',
                     
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
             }
        </div>
    );
};

export default UsersChart;