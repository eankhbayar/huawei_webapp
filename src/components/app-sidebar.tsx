import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Analytics",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Devices",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Recommendations",
    url: "#",
    icon: Search,
  },
  {
    title: "Forum",
    url: "#",
    icon: Settings,
  },
  {
    title: "Report a case",
    url: "#",
    icon: Settings,
  },
  {
    title: "AI Assistant",
    url: "#",
    icon: Settings,
  },
  {
    title: "IT Support",
    url: "#",
    icon: Settings,
  },
  {
    title: "Feedback",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
