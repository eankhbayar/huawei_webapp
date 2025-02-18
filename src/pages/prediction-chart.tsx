import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    day: "Mon",
    kowloon: 400,
    hongKong: 240,
    newTerritories: 180,
  },
  {
    day: "Tue",
    kowloon: 300,
    hongKong: 200,
    newTerritories: 150,
  },
  {
    day: "Wed",
    kowloon: 350,
    hongKong: 220,
    newTerritories: 170,
  },
  {
    day: "Thu",
    kowloon: 380,
    hongKong: 250,
    newTerritories: 190,
  },
  {
    day: "Fri",
    kowloon: 420,
    hongKong: 280,
    newTerritories: 220,
  },
  {
    day: "Sat",
    kowloon: 450,
    hongKong: 300,
    newTerritories: 250,
  },
  {
    day: "Sun",
    kowloon: 380,
    hongKong: 250,
    newTerritories: 200,
  },
]

export function PredictionChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Bar dataKey="kowloon" fill="#10B981" radius={[4, 4, 0, 0]} stackId="stack" />
          <Bar dataKey="hongKong" fill="#F59E0B" radius={[4, 4, 0, 0]} stackId="stack" />
          <Bar dataKey="newTerritories" fill="#3B82F6" radius={[4, 4, 0, 0]} stackId="stack" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

