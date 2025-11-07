"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar } from "./sidebar";
import { AdminHeader } from "./header";

export function AdminLayout({ children }) {
    return (
        <SidebarProvider>
            <AdminSidebar />
            <SidebarInset>
                <AdminHeader />
                <main className="flex-1 p-4">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}

