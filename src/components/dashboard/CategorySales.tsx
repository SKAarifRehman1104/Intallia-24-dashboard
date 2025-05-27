import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Product 1", value: 30 },
  { name: "Product 2", value: 25 },
  { name: "Product 3", value: 20 },
  { name: "Product 4", value: 15 },
  { name: "Product 5", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

export function CategorySales() {
  return (
    <div className="bg-white p-6 sm:p-6 rounded-lg border border-border  max-w-md mx-auto sm:w-full ">
      <h2 className="text-lg font-semibold mb-6">Category Sales</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
