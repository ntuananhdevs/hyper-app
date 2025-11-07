"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import {
    Home,
    Link,
    BarChart3,
    History,
    Settings,
    HelpCircle,
    LogOut,
    Monitor,
    Globe,
    Mail,
    HardDrive,
    Bug,
    Camera,
    QrCode,
    FileText,
    BookOpen,
    MessageSquare,
    LifeBuoy
} from "lucide-react";

const menuItems = [
    {
        title: "Dashboard",
        url: "/user",
        icon: Monitor,
        active: true
    },
    {
        title: "Short Urls",
        url: "/user/shorten",
        icon: Link,
        active: false
    },
    {
        title: "DNS Records",
        url: "/user/dns",
        icon: Globe,
        active: false
    },
    {
        title: "Emails",
        url: "/user/emails",
        icon: Mail,
        active: false
    },
    {
        title: "Cloud Storage",
        url: "/user/storage",
        icon: HardDrive,
        active: false
    },
];

const openApiItems = [
    {
        title: "Overview",
        url: "/user/api/overview",
        icon: Bug,
        active: false
    },
    {
        title: "Screenshot",
        url: "/user/api/screenshot",
        icon: Camera,
        active: false
    },
    {
        title: "QR Code",
        url: "/user/api/qr",
        icon: QrCode,
        active: false
    },
    {
        title: "Meta Info",
        url: "/user/api/meta",
        icon: Globe,
        active: false
    },
    {
        title: "Markdown",
        url: "/user/api/markdown",
        icon: FileText,
        active: false
    },
];

const optionsItems = [
    {
        title: "Settings",
        url: "/user/settings",
        icon: Settings,
        active: false
    },
    {
        title: "Documentation",
        url: "/user/docs",
        icon: BookOpen,
        active: false
    },
    {
        title: "Feedback",
        url: "/user/feedback",
        icon: MessageSquare,
        active: false
    },
    {
        title: "Support",
        url: "/user/support",
        icon: LifeBuoy,
        active: false
    },
];

export function UserSidebar() {
    return (
        <Sidebar className="border-r bg-white" collapsible="icon">
            <SidebarHeader className="border-b bg-white">
                <div className="flex items-center justify-between h-10.5 group-data-[collapsible=icon]:justify-center">
                    <div className="flex items-center gap-3 group-data-[collapsible=icon]:hidden">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                            <div className="h-4 w-4 rounded-sm bg-white"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-gray-900">HyperApp</span>
                        </div>
                    </div>
                    <SidebarTrigger className="-ml-1" />
                </div>
            </SidebarHeader>

            <SidebarContent className="bg-white sidebar-scrollbar-alt">
                {/* Menu Section */}
                <SidebarGroup className="px-4 py-2 group-data-[collapsible=icon]:px-2">
                    <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 group-data-[collapsible=icon]:hidden">
                        Menu
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className={`w-full justify-start px-3 h-14 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2 rounded-md text-sm font-medium transition-colors ${item.active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                        title={item.title}
                                    >
                                        <a href={item.url}>
                                            <item.icon className="h-4 w-4 mr-3 group-data-[collapsible=icon]:mr-0" />
                                            <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Open API Section */}
                <SidebarGroup className="px-4 py-2 group-data-[collapsible=icon]:px-2">
                    <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 group-data-[collapsible=icon]:hidden">
                        Open API
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">
                            {openApiItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="w-full justify-start px-3 h-14 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                        title={item.title}
                                    >
                                        <a href={item.url}>
                                            <item.icon className="h-4 w-4 mr-3 group-data-[collapsible=icon]:mr-0" />
                                            <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Options Section */}
                <SidebarGroup className="px-4 py-2 group-data-[collapsible=icon]:px-2">
                    <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 group-data-[collapsible=icon]:hidden">
                        Options
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">
                            {optionsItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="w-full justify-start px-3 h-14 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                        title={item.title}
                                    >
                                        <a href={item.url}>
                                            <item.icon className="h-4 w-4 mr-3 group-data-[collapsible=icon]:mr-0" />
                                            <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
