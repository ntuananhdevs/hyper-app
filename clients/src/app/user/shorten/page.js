"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Link, Loader2 } from "lucide-react";

export default function ShortenPage() {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleShorten = async () => {
        if (!url) return;

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            const randomId = Math.random().toString(36).substring(2, 8);
            setShortUrl(`https://hyperapp.com/${randomId}`);
            setIsLoading(false);
        }, 1000);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Shorten URL</h1>
                <p className="text-muted-foreground">
                    Create short, memorable links for your URLs.
                </p>
            </div>
        </div>
    );
}
