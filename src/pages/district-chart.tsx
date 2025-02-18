import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Kowloon", value: 33 },
  { name: "Hong Kong Island", value: 27 },
  { name: "New Territories", value: 40 },
]

const COLORS = ["#10B981", "#F59E0B", "#3B82F6"]

export function DistrictChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

