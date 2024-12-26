"use client";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 30,
  },
  {
    name: "Tue",
    present: 70,
    absent: 20,
  },
  {
    name: "Wed",
    present: 90,
    absent: 35,
  },
  {
    name: "Thu",
    present: 70,
    absent: 10,
  },
  {
    name: "Fri",
    present: 130,
    absent: 50,
  },
];

const AttendanceChart = () => {
  return (
    <div className="ui-bg-white ui-rounded-lg ui-p-4 ui-h-full">
      <div className="ui-flex ui-justify-between ui-items-center">
        <span className="ui-text-lg ui-font-semibold">Atendance</span>
        <img src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20} >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{fill: "#D1D5DB"}} tickLine={false}/>
          <YAxis  axisLine={false}/>
          <Tooltip contentStyle={{borderRadius: "10px", borderColor: "lightgray"}}/>
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#C3EBFA"
            activeBar={<Rectangle fill="#C3EBFA" />}
            legendType="circle"
            radius={[10,10,0,0]}
          />
          <Bar
            dataKey="absent"
            fill="#FAE27C"
            activeBar={<Rectangle fill="#FAE27C" />}
            legendType="circle"
            radius={[10,10,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
