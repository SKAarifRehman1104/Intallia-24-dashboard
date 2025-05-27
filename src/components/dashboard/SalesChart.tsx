import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 45 },
  { name: "March", value: 35 },
  { name: "April", value: 55 },
  { name: "May", value: 40 },
  { name: "June", value: 60 },
  { name: "July", value: 50 },
  { name: "Aug", value: 65 },
  { name: "Sep", value: 55 },
  { name: "Nov", value: 70 },
  { name: "Dec", value: 75 },
];

export function SalesChart() {
  return (
    <div className="bg-white p-6 rounded-lg border border-border">
      <h2 className="font-medium mb-6 font-plusJakarta text-[22px] leading-[28px] ">
        Sales Details
      </h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
