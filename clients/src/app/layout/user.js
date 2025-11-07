import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { UserLayout } from "@/components/layout/user/layout";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "HyperApp - URL Shortener",
    description: "Professional URL shortening service",
};

export default function UserRootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <UserLayout>
                    {children}
                </UserLayout>
            </body>
        </html>
    );
}
