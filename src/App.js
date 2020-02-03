import React from 'react';
import { Navbar, Calendar } from './Components';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import './App.css';
import 'rc-calendar/assets/index.css';

const data = [
  {
    month: 'Jan',
    pv: 2400
  },
  {
    month: 'Feb',
    pv: 1398
  },
  {
    month: 'Mar',
    pv: 9800
  },
  {
    month: 'Apr',
    pv: 3908
  },
  {
    month: 'May',
    pv: 4800
  },
  {
    month: 'Jun',
    pv: 3800
  },
  {
    month: 'Jul',
    pv: 4300
  },
  {
    month: 'Aug',
    pv: 2400
  },
  {
    month: 'Sep',
    pv: 1398
  },
  {
    month: 'Okt',
    pv: 9800
  },
  {
    month: 'Nov',
    pv: 3908
  },
  {
    month: 'Dec',
    pv: 4800
  }
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Calendar />
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="rgb(var(--brand-primary))" />
      </BarChart>
    </div>
  );
}

export default App;
