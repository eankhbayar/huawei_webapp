import { Search } from "lucide-react"
import { AppSidebar } from "@/components/app-sidebar"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useNavigate } from "react-router-dom";

export default function Forum() {
    const navigate = useNavigate();

    const handleContactSupport = () => {
        navigate('/feedback');
    }
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <div className="flex-1 space-y-6 p-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Find answers to common questions about rodent management and our system.
          </p>
        </div>

        <div className="relative max-w-xl">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search questions..." className="pl-8" />
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
            <TabsTrigger value="reporting">Reporting</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the Rodent Management System?</AccordionTrigger>
                <AccordionContent>
                  The Rodent Management System is a comprehensive solution for monitoring and managing rodent activity
                  in urban areas. It uses advanced sensors and analytics to detect, track, and predict rodent behavior,
                  helping authorities and property managers implement effective control measures.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How accurate is the rodent detection system?</AccordionTrigger>
                <AccordionContent>
                  Our system maintains a 95% accuracy rate in detecting rodent activity. It uses multiple data points
                  including motion detection, thermal imaging, and AI-powered analysis to minimize false positives and
                  ensure reliable reporting.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What areas does the system cover?</AccordionTrigger>
                <AccordionContent>
                  The system currently covers all major districts in Hong Kong, including Kowloon, Hong Kong Island, and
                  the New Territories. Coverage includes both indoor and outdoor areas, with special focus on high-risk
                  zones like restaurants, markets, and residential complexes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="devices" className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I install a new detection device?</AccordionTrigger>
                <AccordionContent>
                  Installation is straightforward: mount the device at the recommended height, connect it to power, and
                  follow the in-app setup wizard to connect it to your network. Detailed installation guides are
                  available in the device manual.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What is the battery life of wireless devices?</AccordionTrigger>
                <AccordionContent>
                  Wireless devices typically operate for 6-8 months on a single charge, depending on usage patterns and
                  environmental conditions. The system will notify you when battery levels are low, giving you ample
                  time to recharge or replace batteries.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="reporting" className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I generate activity reports?</AccordionTrigger>
                <AccordionContent>
                  Navigate to the Analytics section, select your desired date range and metrics, then click "Generate
                  Report". Reports can be exported in PDF, CSV, or Excel formats and can be automatically scheduled for
                  regular delivery.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What does the activity index mean?</AccordionTrigger>
                <AccordionContent>
                  The activity index is a normalized score from 0-100 that indicates relative rodent activity levels. It
                  considers factors like detection frequency, movement patterns, and historical data to provide a
                  standardized measure of infestation severity.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="account" className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I change my account settings?</AccordionTrigger>
                <AccordionContent>
                  Go to your profile settings by clicking your avatar in the top right corner. From there, you can
                  update your personal information, notification preferences, and security settings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Can I have multiple users under one account?</AccordionTrigger>
                <AccordionContent>
                  Yes, enterprise accounts can have multiple users with different permission levels. Contact our support
                  team to set up additional user accounts and manage access permissions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Still have questions?</CardTitle>
            <CardDescription>
              Can't find the answer you're looking for? Please contact our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button onClick={handleContactSupport}>Contact Support</Button>
            <Button variant="outline">Visit Help Center</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

