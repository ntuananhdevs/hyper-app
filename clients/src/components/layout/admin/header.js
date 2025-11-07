"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Shield, Bell, Settings, User } from "lucide-react";

export function AdminHeader() {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />

            <div className="flex-1" />

            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                    <Bell className="h-4 w-4" />
                </Button>

                <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                </Button>

                <Button variant="ghost" size="icon">
                    <Shield className="h-4 w-4" />
                </Button>

                <Button variant="ghost" size="icon">
                    <User className="h-4 w-4" />
                </Button>
            </div>
        </header>
    );
}

