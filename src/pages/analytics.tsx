import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AppSidebar } from "@/components/app-sidebar"
import { ActivityChart } from "./activity-chart"
import { DistrictChart } from "./district-chart"
import { LocationList } from "./location-chart"    
import { PredictionChart } from "./prediction-chart"    
import { TimeChart } from "./time-chart"    

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <div className="flex-1 space-y-4 p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">ANALYTICS</h2>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Rodent Activity Graphs</CardTitle>
                  <div className="mt-2">
                    <div className="text-2xl font-bold">36,963</div>
                    <div className="text-sm text-muted-foreground">Total rodent detected</div>
                  </div>
                  <div className="mt-4 flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                        T
                      </div>
                      <div>
                        <div className="text-lg font-semibold">6,983</div>
                        <div className="text-sm text-muted-foreground">Today</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center text-white">
                        W
                      </div>
                      <div>
                        <div className="text-lg font-semibold">19,990</div>
                        <div className="text-sm text-muted-foreground">This week</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    Send
                  </Button>
                  <Button variant="outline" size="sm">
                    Add card
                  </Button>
                  <Button variant="outline" size="sm">
                    Request
                  </Button>
                  <Select defaultValue="this-week">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="this-week">This week</SelectItem>
                      <SelectItem value="this-month">This month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ActivityChart />
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Rodent Activity Top District</CardTitle>
              </CardHeader>
              <CardContent>
                <DistrictChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Rodent Activity by Time</CardTitle>
              </CardHeader>
              <CardContent>
                <TimeChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Rodent Activity Top Location</CardTitle>
              </CardHeader>
              <CardContent>
                <LocationList />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Prediction</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">(+5.0%) from this week</p>
                </div>
                <Select defaultValue="next-week">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next-week">Next week</SelectItem>
                    <SelectItem value="next-month">Next month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span>Kowloon</span>
                  <span className="font-bold">8.2k</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <span>Hong Kong Island</span>
                  <span className="font-bold">6.6k</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                  <span>New Territories</span>
                  <span className="font-bold">3.9k</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <PredictionChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

