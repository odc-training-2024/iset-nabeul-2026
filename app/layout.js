import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Sprout } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Iset Nabeul",
  description: "A simple space to gather your ingredients.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b bg-card/80">
          <div className="mx-auto flex min-h-20 max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
            <Link href="/" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight"><span className="flex size-9 items-center justify-center rounded-xl bg-primary text-white"><Sprout className="size-5" aria-hidden="true" /></span>Iset Nabeul<span className="hidden font-normal text-muted-foreground sm:inline">/ Kitchen</span></Link>
            <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm">
              <Link href="/" className="font-medium text-primary hover:text-foreground">Home</Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
              <Link href="/about/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
