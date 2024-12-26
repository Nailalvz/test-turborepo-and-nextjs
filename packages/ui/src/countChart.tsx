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
    <div className="ui-bg-white ui-rounded-xl ui-w-full ui-h-full ui-p-4">
      {/* Title */}
      <div className="ui-flex ui-justify-between ui-items-center">
        <span className="ui-text-lg ui-font-semibold">Students</span>
        <img src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* Chart */}
      <div className="ui-relative ui-w-full ui-h-[75%]">
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
        <img className="ui-absolute ui-top-1/2 ui-left-1/2 ui--translate-x-1/2 ui--translate-y-1/2" src="/maleFemale.png" alt="" width={50} height={50}/>
      </div>
      {/* BOTTOM */}
      <div className="ui-flex ui-justify-center ui-gap-16">
        <div className="ui-flex ui-flex-col ui-gap-1">
          <div className="ui-w-5 ui-h-5 ui-bg-[#C3EBFA] ui-rounded-full" />
          <span className="ui-font-bold">1.234</span>
          <span className="ui-text-xs ui-text-gray-300">Boys 55%</span>
        </div>
        <div className="ui-flex ui-flex-col ui-gap-1">
          <div className="ui-w-5 ui-h-5 ui-bg-[#FAE27C] ui-rounded-full" />
          <span className="ui-font-bold">1.234</span>
          <span className="ui-text-xs ui-text-gray-300">Girls 45%</span>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
