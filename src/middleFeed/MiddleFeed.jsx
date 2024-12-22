import React from "react";
import DiagnosisHistoryChart from "../DiagnosisHistoryChart/DiagnosisHistoryChart";

function MiddleFeed() {
  return (
    <div className="bg-white w-1/2 rounded-xl h-dvh">
      <p className="p-2">Diagnosis History</p>
      <DiagnosisHistoryChart />
    </div>
  );
}

export default MiddleFeed;
