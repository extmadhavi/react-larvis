import React from 'react';
import { Card, Row } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface DataObject {
  timestamp: number;
  ore_sites: number;
}

interface Props {
  data: DataObject[];
}

const OreSiteHistogram: React.FC<Props> = ({ data }) => {
  const histogramData = data.map(item => ({
    ore_sites: item.ore_sites,
  }));

  return (
  
    <Card title="Ore Sites Histogram">
      <BarChart width={500} height={300} data={histogramData} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ore_sites" label={{ value: 'Ore Sites', position: 'insideBottom', offset: -10 }} />
        <YAxis label={{ value: 'Frequency', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="ore_sites" fill="#8884d8" />
      </BarChart>
      </Card>
     
  );
};

export default OreSiteHistogram;
