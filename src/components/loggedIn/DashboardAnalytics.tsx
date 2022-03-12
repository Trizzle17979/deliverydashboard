import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { Line } from "react-chartjs-2";
import { DataArray } from "../../types";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface ChartData {
  labels: any[];
  datasets: any[];
}

interface Category {
  title: string;
  key: string;
}

const DashboardAnalytics: React.FC = () => {
  const [dataArr, setDataArr] = useState<DataArray[]>([]);
  const [category, setCategory] = useState<Category>({
    title: "Total Pay",
    key: "totalPay",
  });

  let chartDataset: ChartData = {
    labels: [],
    datasets: [
      {
        label: category.title,
        data: [],
        backgroundColor: "#51cf66",
        borderColor: "#51cf66",
      },
    ],
  };

  const getData = async () => {
    const { data, error } = await supabase.from("deliveries").select("*");
    if (error) {
      console.log("ERROR: ", error);
    } else if (data) {
      setDataArr(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (category.key === "totalPay") {
    for (let key in dataArr) {
      console.log(dataArr[key]);
      chartDataset.labels.push(dataArr[key].delivery_date);
      chartDataset.datasets[0].data.push(dataArr[key].total_pay);
    }
  }
  if (category.key === "netPay") {
    for (let key in dataArr) {
      chartDataset.labels.push(dataArr[key].delivery_date);
      chartDataset.datasets[0].data.push(dataArr[key].net_pay);
    }
  }
  if (category.key === "netPayPerHour") {
    for (let key in dataArr) {
      chartDataset.labels.push(dataArr[key].delivery_date);
      chartDataset.datasets[0].data.push(dataArr[key].net_pay_per_hour);
    }
  }

  const allButtons = "py-2 px-4 rounded-md";
  const active = "text-white bg-green-500";
  const inactive =
    "text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-around">
        <button
          onClick={() => {
            setCategory({ title: "Total Pay", key: "totalPay" });
          }}
          className={`${allButtons} ${
            category.key === "totalPay" ? active : inactive
          }`}
        >
          Total Pay
        </button>
        <button
          onClick={() => {
            setCategory({ title: "Net Pay", key: "netPay" });
          }}
          className={`${allButtons} ${
            category.key === "netPay" ? active : inactive
          }`}
        >
          Net Pay
        </button>
        <button
          onClick={() => {
            setCategory({ title: "Net Pay per Hour", key: "netPayPerHour" });
          }}
          className={`${allButtons} ${
            category.key === "netPayPerHour" ? active : inactive
          }`}
        >
          Net Pay per Hour
        </button>
      </div>
      <div>
        <Line
          data={chartDataset}
          options={{
            plugins: {
              // responsive: true,
              // maintainAspectRatio: false,
              title: {
                display: true,
                text: category.title,
                // fontSize: 25,
                position: "top",
              },
              legend: {
                display: false,
                position: "right",
              },
            },
            scales: {
              y: {
                suggestedMin: 0,
                suggestedMax: 100,
                grid: {
                  display: false,
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
          }}
        ></Line>
      </div>
    </div>
  );
};

export default DashboardAnalytics;
