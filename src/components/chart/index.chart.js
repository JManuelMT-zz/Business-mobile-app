import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
  LineChart, Line, ResponsiveContainer,
} from 'recharts';
import './chart.css';

const randomval = () => Math.floor(Math.random() * 10000) + 1000;

const initialData = () => [
  {
    name: 'Page A', uv: randomval(), pv: randomval(), amt: randomval(),
  },
  {
    name: 'Page B', uv: randomval(), pv: randomval(), amt: randomval(),
  },
  {
    name: 'Page C', uv: randomval(), pv: randomval(), amt: randomval(),
  },
  {
    name: 'Page D', uv: randomval(), pv: randomval(), amt: randomval(),
  },
  {
    name: 'Page E', uv: randomval(), pv: randomval(), amt: randomval(),
  },
  {
    name: 'Page F', uv: randomval(), pv: randomval(), amt: randomval(),
  },
  {
    name: 'Page G', uv: randomval(), pv: randomval(), amt: randomval(),
  },
];

const Chart = ({ date, currentCard, setShowChart }) => {
    useEffect(() => {
        setData(initialData());
    }, [date, currentCard]);
    const [data, setData] = useState(initialData());
    return (
        <div style={{ width: '100%', height: 200 }}>
            <span className="charText">{moment(date).format('MMM D YYYY')}</span>
            <ResponsiveContainer>        
                <LineChart height={100} data={data}>
                    <Line type="monotone" dataKey="pv" stroke="#fff" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
