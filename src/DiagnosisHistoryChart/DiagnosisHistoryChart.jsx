import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import axios from "axios";

function DiagnosisHistoryChart() {
  const [chartData, setChartData] = useState([]);
  const [metrics, setMetrics] = useState({});

  // Fetch data from the API
  const fetchData = async () => {
    const url = "https://fedskillstest.coalitiontechnologies.workers.dev/";

    const username = "coalition";
    const password = "skills-test";
    const auth = `Basic ${btoa(`${username}:${password}`)}`; // Encodes the credentials

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: auth,
        },
      });

      // Extract and transform data for the chart
      const diagnosisHistory = response.data[0]?.diagnosis_history || [];
      const transformedData = diagnosisHistory.map((history) => ({
        date: history.date,
        systolic: history.systolic,
        diastolic: history.diastolic,
      }));
      console.log("diagnosisHistory: ", diagnosisHistory);
      console.log("transformedData: ", transformedData);

      setChartData(transformedData);

      // Extract additional metrics (Respiratory Rate, Temperature, Heart Rate)
      const { respiratory_rate, temperature, heart_rate } =
        response.data[0]?.vitals || {};
      setMetrics({
        respiratoryRate: respiratory_rate || "N/A",
        temperature: temperature || "N/A",
        heartRate: heart_rate || "N/A",
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Chart configuration
  const config = {
    data: chartData.flatMap((item) => [
      { date: item.date, value: item.systolic, type: "Systolic" },
      { date: item.date, value: item.diastolic, type: "Diastolic" },
    ]),
    xField: "date",
    yField: "value",
    seriesField: "type",
    color: ["#FF69B4", "#9370DB"], // Pink for Systolic, Purple for Diastolic
    smooth: true,
    lineStyle: { lineWidth: 2 },
    point: {
      size: 4,
      shape: "circle",
    },
    tooltip: {
      showMarkers: false,
    },
    animation: {
      appear: {
        animation: "path-in",
        duration: 2000,
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4">Diagnosis History</h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-gray-700 mb-2">Blood Pressure</h3>
        {chartData.length > 0 ? (
          <Line {...config} />
        ) : (
          <p className="text-center text-gray-500">Loading chart data...</p>
        )}
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <h3 className="text-lg font-bold">Respiratory Rate</h3>
          <p className="text-2xl font-semibold">
            {metrics.respiratoryRate} bpm
          </p>
          <p className="text-sm text-gray-600">Normal</p>
        </div>
        <div className="bg-pink-100 p-4 rounded-lg text-center">
          <h3 className="text-lg font-bold">Temperature</h3>
          <p className="text-2xl font-semibold">{metrics.temperature}°F</p>
          <p className="text-sm text-gray-600">Normal</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg text-center">
          <h3 className="text-lg font-bold">Heart Rate</h3>
          <p className="text-2xl font-semibold">{metrics.heartRate} bpm</p>
          <p className="text-sm text-gray-600">
            {metrics.heartRate > 100
              ? "Higher than Average"
              : "Lower than Average"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DiagnosisHistoryChart;



