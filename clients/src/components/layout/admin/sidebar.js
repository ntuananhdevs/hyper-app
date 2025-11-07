"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
    Home,
    Users,
    BarChart3,
    Settings,
    Shield,
    Database,
    LogOut,
    Monitor,
    UserCheck,
    Activity,
    Server,
    Lock,
    AlertTriangle,
    BookOpen,
    MessageSquare,
    LifeBuoy
} from "lucide-react";

const adminMenuItems = [
    {
        title: "Dashboard",
        url: "/admin",
        icon: Monitor,
        active: true
    },
    {
        title: "Users",
        url: "/admin/users",
        icon: UserCheck,
        active: false
    },
    {
        title: "Analytics",
        url: "/admin/analytics",
        icon: Activity,
        active: false
    },
    {
        title: "Database",
        url: "/admin/database",
        icon: Server,
        active: false
    },
    {
        title: "Security",
        url: "/admin/security",
        icon: Lock,
        active: false
    },
];

const systemItems = [
    {
        title: "System Logs",
        url: "/admin/logs",
        icon: Database,
        active: false
    },
    {
        title: "Alerts",
        url: "/admin/alerts",
        icon: AlertTriangle,
        active: false
    },
    {
        title: "Backups",
        url: "/admin/backups",
        icon: Server,
        active: false
    },
    {
        title: "Monitoring",
        url: "/admin/monitoring",
        icon: Activity,
        active: false
    },
];

const optionsItems = [
    {
        title: "Settings",
        url: "/admin/settings",
        icon: Settings,
        active: false
    },
    {
        title: "Documentation",
        url: "/admin/docs",
        icon: BookOpen,
        active: false
    },
    {
        title: "Feedback",
        url: "/admin/feedback",
        icon: MessageSquare,
        active: false
    },
    {
        title: "Support",
        url: "/admin/support",
        icon: LifeBuoy,
        active: false
    },
];

export function AdminSidebar() {
    return (
        <Sidebar className="border-r bg-white">
            <SidebarHeader className="border-b bg-white">
                <div className="flex items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-600">
                            <Shield className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-gray-900">HyperApp</span>
                            <span className="text-xs text-gray-500">Admin Panel</span>
                        </div>
                    </div>
                    <button className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100">
                        <div className="h-4 w-4 rounded border-2 border-gray-400"></div>
                    </button>
                </div>
            </SidebarHeader>

            <SidebarContent className="bg-white">
                {/* Management Section */}
                <SidebarGroup className="px-4 py-2">
                    <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                        Management
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">
                            {adminMenuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className={`w-full justify-start px-3 py-2 rounded-md text-sm font-medium transition-colors ${item.active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                    >
                                        <a href={item.url}>
                                            <item.icon className="h-4 w-4 mr-3" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* System Section */}
                <SidebarGroup className="px-4 py-2">
                    <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                        System
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">
                            {systemItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="w-full justify-start px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                    >
                                        <a href={item.url}>
                                            <item.icon className="h-4 w-4 mr-3" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Options Section */}
                <SidebarGroup className="px-4 py-2">
                    <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                        Options
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">
                            {optionsItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="w-full justify-start px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                    >
                                        <a href={item.url}>
                                            <item.icon className="h-4 w-4 mr-3" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t bg-white p-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="w-full justify-start px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                        >
                            <a href="/logout">
                                <LogOut className="h-4 w-4 mr-3" />
                                <span>Logout</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
