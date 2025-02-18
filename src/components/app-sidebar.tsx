import { Calendar, Home, Inbox, Search, NotebookText, FileQuestion, Bot, Computer,Flag } from "lucide-react";
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
    url: "dashboard",
    icon: Home,
  },
  {
    title: "Analytics",
    url: "analytics",
    icon: Inbox,
  },
  {
    title: "Devices",
    url: "devices",
    icon: Calendar,
  },
  {
    title: "Recommendations",
    url: "recommendations",
    icon: Search,
  },
  {
    title: "Forum",
    url: "forum",
    icon: NotebookText,
  },
  {
    title: "Report a case",
    url: "report",
    icon: Flag,
  },
  {
    title: "AI Assistant",
    url: "ai-assistant",
    icon: Bot,
  },
  {
    title: "IT Support",
    url: "it-support",
    icon: Computer,
  },
  {
    title: "Feedback",
    url: "feedback",
    icon: FileQuestion,
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
