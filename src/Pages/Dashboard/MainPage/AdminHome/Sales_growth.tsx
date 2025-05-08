import { LineChart } from "@mui/x-charts";
import { useGetSalesGrowthQuery } from "../../../../Redux/features/api/baseApi";

const Sales_growth = () => {
    const {data: sales_growth, isLoading} = useGetSalesGrowthQuery();
    const cleanedData = sales_growth?.filter(
        (d) => d?.month && typeof d?.sales === "number" && !isNaN(d.sales)
    ) || [];
    const Dates = cleanedData?.map((d) => d.month) || [];
    const Sales = cleanedData?.map((d) => d.sales) || [];
    return (
        <div className="card-body w-full bg-base-100 h-[350px] border rounded shadow-xl">
            {
                isLoading ?<p>Loading...</p>:
                <LineChart
                xAxis={[
                    {
                        id: "months",
                        data: Dates, 
                        scaleType: "point", 
                     
                    },
                ]}
                yAxis={[
                    {
                        id: "sales",
                      
                    },
                ]}
                series={[
                    {
                        data: Sales,
                        label: "Sales Growth",
                        area: true, 
                        color: "#2fa6b4", 
                    },
                ]}
                height={300}
                  width={450} 
            ></LineChart>
            }
        </div>
    );
};

export default Sales_growth;