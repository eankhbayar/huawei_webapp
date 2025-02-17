import { Search, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/ui/sidebar"
import { RodentMetrics } from "./rodent-metrics"
import { ActivityGraph } from "./activity-graph"


export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar for desktop */}

        <div className="flex-1">
          {/* Header */}
          <header className="border-b">
            <div className="flex h-16 items-center gap-4 px-4">
              {/* Mobile sidebar trigger */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="lg:hidden" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                  <Sidebar />
                </SheetContent>
              </Sheet>

              <div className="flex items-center gap-2">

                <span className="font-semibold">Rodent Sense</span>
              </div>

              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search Exam, Material..." className="pl-8" />
              </div>

              <div className="ml-auto flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  🇬🇧
                </Button>
                <Button variant="ghost" size="icon">
                  🔔
                </Button>
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="p-6">
            <div className="space-y-6">
              <h1 className="text-2xl font-bold tracking-tight">RODENT MANAGEMENT DASHBOARD</h1>

              {/* Heat Map Section */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Rodent Infestation Heat Map</CardTitle>
                  <Button variant="link">Detail &gt;</Button>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[2/1] relative rounded-lg overflow-hidden">

                  </div>
                </CardContent>
              </Card>

              {/* Metrics */}
              <RodentMetrics />

              {/* Activity Graph and News */}
              <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                <ActivityGraph />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

