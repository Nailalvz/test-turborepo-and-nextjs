"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    expense: 4000,
    income: 2400,
  },
  {
    name: 'Feb',
    expense: 3000,
    income: 1398,
  },
  {
    name: 'Mar',
    expense: 2000,
    income: 6800,
  },
  {
    name: 'Apr',
    expense: 2780,
    income: 3908,
  },
  {
    name: 'May',
    expense: 1890,
    income: 4800,
  },
  {
    name: 'Jun',
    expense: 2390,
    income: 3800,
  },
  {
    name: 'Jul',
    expense: 4678,
    income: 4300,
  },
  {
    name: 'Ago',
    expense: 3490,
    income: 4300,
  },
  {
    name: 'Sep',
    expense: 5432,
    income: 5987,
  },
  {
    name: 'Oct',
    expense: 3495,
    income: 6543,
  },
  {
    name: 'Nov',
    expense: 4567,
    income: 5675,
  },
  {
    name: 'Dec',
    expense: 5678,
    income: 6437,
  },
];

// * MINUTO 1:03:02 https://www.youtube.com/watch?v=myYlGLFxZas

const FinanceChart = () => {
  return (
    <div className="ui-bg-white ui-rounded-xl ui-w-full ui-p-4 ui-h-full">
      <div className="ui-flex ui-justify-between ui-items-center">
        <span className="ui-text-lg ui-font-semibold">Finance</span>
        <img src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db"}} tickLine={false} tickMargin={10} />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db"}} tickLine={false} tickMargin={10} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
