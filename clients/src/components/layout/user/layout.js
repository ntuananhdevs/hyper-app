"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { UserSidebar } from "./sidebar";
import { UserHeader } from "./header";

export function UserLayout({ children }) {
    return (
        <SidebarProvider>
            <UserSidebar />
            <SidebarInset>
                <UserHeader />
                <main className="flex-1 p-4">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}

