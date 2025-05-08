
import React from 'react';
import { Card } from '@/components/ui/card';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 4500 },
  { name: 'Mar', revenue: 5200 },
  { name: 'Apr', revenue: 4800 },
  { name: 'May', revenue: 6000 },
  { name: 'Jun', revenue: 6800 },
  { name: 'Jul', revenue: 7200 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md">
        <p className="font-medium text-gray-600">{label}</p>
        <p className="text-brand-600 font-semibold">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }

  return null;
};

const SalesChart = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Revenue Overview</h3>
        <select className="text-sm border border-gray-200 rounded-md p-1 pr-6">
          <option>Last 7 months</option>
          <option>Last 12 months</option>
          <option>All time</option>
        </select>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }} 
              tickLine={false} 
              axisLine={{ stroke: '#E5E7EB' }}
            />
            <YAxis 
              tickFormatter={(value) => `$${value}`} 
              tick={{ fontSize: 12 }} 
              tickLine={false} 
              axisLine={{ stroke: '#E5E7EB' }} 
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={{ r: 4, fill: '#8B5CF6', stroke: '#8B5CF6', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: '#8B5CF6', stroke: '#fff', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default SalesChart;
