import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { Line } from "react-chartjs-2";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { DataArray } from "../../types";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface chartData {
  labels: any[];
  datasets: any[];
}

const DashboardAnalytics: React.FC = () => {
  const [dataArr, setDataArr] = useState<DataArray[]>([]);
  const [category, setCategory] = useState({
    key: "totalPay",
    title: "Total Pay",
  });

  let chartDataset: chartData = {
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

  const categoryOptions = [
    { key: "totalPay", value: "totalPay", text: "Total Pay" },
    { key: "netPay", value: "netPay", text: "Net Pay" },
    { key: "netPayPerHour", value: "netPayPerHour", text: "Net Pay per Hour" },
  ];

  const categorySelectionHandler = (event: any, data: any) => {
    let dataValue = data.value;
    let dataTitle = data.options
      .filter((option: any) => {
        if (option.key === dataValue) {
          return true;
        } else {
          return false;
        }
      })
      .map((option: any) => {
        return option.text;
      });
    console.log(dataValue);
    console.log(dataTitle);
    setCategory({ key: dataValue, title: dataTitle });
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

  return (
    <div className="">
      <div className="">
        <div className="">
          <Dropdown
            className=""
            placeholder="Select Category"
            defaultValue={category.key}
            fluid
            selection
            options={categoryOptions}
            onChange={categorySelectionHandler}
          />
        </div>
      </div>
      <div className="">
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
