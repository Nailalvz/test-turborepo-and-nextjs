"use client";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];

const Performance = () => {
  return (
    <div className="ui-bg-white ui-p-4 ui-rounded-md ui-h-80 ui-relative">
      <div className="ui-flex ui-items-center ui-justify-between">
        <h3 className="ui-text-xl ui-font-semibold">Performance</h3>
        <img src="/moreDark.png" alt="" width={16} height={16} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="ui-absolute ui-top-1/2 ui-left-1/2 ui-transform ui--translate-x-1/2 ui--translate-y-1/2 ui-text-center">
        <h4 className="ui-text-3xl ui-font-bold ">9.2</h4>
        <p className="ui-text-xs ui-text-gray-300">of 10 max LTS</p>
      </div>
      <h5 className="ui-font-medium ui-absolute ui-bottom-16 ui-left-0 ui-right-0 ui-m-auto ui-text-center ">1st Semester - 2nd Semester</h5>
    </div>
  );
};

export default Performance;
