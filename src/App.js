import React from 'react';
import { Navbar, Calendar, WrapperContent, ProductCard } from './Components';
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
import { MODEL_CHART, MODEL_BEST_SELLING, MODEL_TOP_COMPETITOR } from './const';

import './App.css';
import 'rc-calendar/assets/index.css';

const dataChart = MODEL_CHART;
const dataBestSelling = MODEL_BEST_SELLING;
const dataTopCompetitor = MODEL_TOP_COMPETITOR;

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Calendar />
        <div className="homepage">
          <WrapperContent title="Average Purchase Value" grid="grid-6">
            <BarChart
              width={600}
              height={300}
              data={dataChart}
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
          </WrapperContent>
          <WrapperContent title="Best Selling SKU" grid="grid-3">
            {dataBestSelling.map((item, index) => (
              <div key={item.id}>
                <ProductCard
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  sold={item.sold}
                  top={index === 0 ? true : false}
                />
              </div>
            ))}
          </WrapperContent>
          <WrapperContent title="Top Competitor SKU" grid="grid-3">
            {dataTopCompetitor.map((item, index) => (
              <div key={item.id}>
                <ProductCard
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  sold={item.sold}
                  top={index === 0 ? true : false}
                />
              </div>
            ))}
          </WrapperContent>
        </div>
      </div>
    </div>
  );
}

export default App;
