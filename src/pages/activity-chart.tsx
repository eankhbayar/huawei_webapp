import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { day: "Sun", value: 20 },
  { day: "Mon", value: 25 },
  { day: "Tue", value: 35 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 55 },
  { day: "Fri", value: 80 },
  { day: "Sat", value: 90 },
  { day: "Sun", value: 85 },
  { day: "Mon", value: 70 },
]

export function ActivityChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Line type="monotone" dataKey="value" stroke="#2C3E50" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

