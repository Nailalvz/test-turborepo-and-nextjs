"use client";

import { count } from "console";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Total",
        count: 108,
        fill: "white",
      },
  {
    name: "Girls",
    count: 50,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 58,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* Title */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">Students</span>
        <img src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* Chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="80%"
            barSize={42}
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/maleFemale.png" alt="" width={50} height={50}/>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#C3EBFA] rounded-full" />
          <span className="font-bold">1.234</span>
          <span className="text-xs text-gray-300">Boys 55%</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#FAE27C] rounded-full" />
          <span className="font-bold">1.234</span>
          <span className="text-xs text-gray-300">Girls 45%</span>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
