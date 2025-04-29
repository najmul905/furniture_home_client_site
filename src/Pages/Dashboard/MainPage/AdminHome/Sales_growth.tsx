import { LineChart } from "@mui/x-charts";
import { useGetSalesGrowthQuery } from "../../../../Redux/features/api/baseApi";

const Sales_growth = () => {
    const {data: sales_growth, isLoading} = useGetSalesGrowthQuery();
    console.log(sales_growth, isLoading);
    const cleanedData = sales_growth?.filter(
        (d) => d?.month && typeof d?.sales === "number" && !isNaN(d.sales)
    ) || [];
    const Dates = cleanedData?.map((d) => d.month) || [];
    const Sales = cleanedData?.map((d) => d.sales) || [];
    return (
        <div>
            <LineChart
                xAxis={[
                    {
                        id: "months",
                        data: Dates, 
                        scaleType: "point", 
                        label: "Month",
                    },
                ]}
                yAxis={[
                    {
                        id: "sales",
                        label: "Sales", 
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
        </div>
    );
};

export default Sales_growth;