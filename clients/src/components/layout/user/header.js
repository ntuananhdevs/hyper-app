"use client";

import { Button } from "@/components/ui/button";
import { User, Bell, Settings } from "lucide-react";

export function UserHeader() {
    return (
        <header className="flex h-14 shrink-0 items-center gap-2  px-4">

            <div className="flex-1" />

            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                    <Bell className="h-4 w-4" />
                </Button>

                <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                </Button>

                <Button variant="ghost" size="icon">
                    <User className="h-4 w-4" />
                </Button>
            </div>
        </header>
    );
}
