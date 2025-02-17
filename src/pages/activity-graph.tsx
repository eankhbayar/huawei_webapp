import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  { day: "Sun", value: 10 },
  { day: "Mon", value: 20 },
  { day: "Tue", value: 40 },
  { day: "Wed", value: 60 },
  { day: "Thu", value: 70 },
  { day: "Fri", value: 90 },
  { day: "Sat", value: 85 },
  { day: "Sun", value: 60 },
  { day: "Mon", value: 40 },
]

export function ActivityGraph() {
  return (
    <Card>
      <CardHeader>
        <div className="space-y-2">
          <CardTitle>Rodent Activity Graphs</CardTitle>
          <div className="flex items-center gap-4">
            <div>
              <div className="text-2xl font-bold">36,963</div>
              <div className="text-sm text-muted-foreground">Total rodent detected</div>
            </div>
            <div className="ml-auto space-x-2">
              <Button variant="outline" size="sm">
                Send
              </Button>
              <Button variant="outline" size="sm">
                Add card
              </Button>
              <Button variant="outline" size="sm">
                Request
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Line type="monotone" dataKey="value" stroke="#2C3E50" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
export default ActivityGraph;
