import { ArrowDown, ArrowUp } from "lucide-react"
import {Badge} from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const locations = [
  {
    name: "Sai Tin Street",
    activity: "84.5%",
    count: "5,862",
    trend: "up",
    trendText: "High activity areas",
  },
  {
    name: "Central Street",
    activity: "76.8%",
    count: "3,845",
    trend: "up",
    trendText: "High activity areas",
  },
  {
    name: "San Wan Garden",
    activity: "68.6%",
    count: "3,370",
    trend: "up",
    trendText: "High activity areas",
  },
  {
    name: "Happy Village",
    activity: "65.1%",
    count: "3,268",
    trend: "up",
    trendText: "High activity areas",
  },
  {
    name: "Hong Night Market",
    activity: "61.4%",
    count: "2,859",
    trend: "down",
    trendText: "High activity areas",
  },
]

export function LocationList() {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          Past 7 days
        </Button>
        <Button variant="outline" size="sm">
          Past 30 days
        </Button>
        <Button variant="outline" size="sm">
          All times
        </Button>
      </div>
      <div className="space-y-4">
        {locations.map((location) => (
          <div key={location.name} className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="font-medium">{location.name}</div>
                {location.trend === "up" ? (
                  <Badge variant="destructive">
                    <ArrowUp className="h-3 w-3" />
                  </Badge>
                ) : (
                  <Badge variant="secondary">
                    <ArrowDown className="h-3 w-3" />
                  </Badge>
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                {location.activity} · {location.count}
              </div>
            </div>
            <div className="text-sm text-muted-foreground">{location.trendText}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

