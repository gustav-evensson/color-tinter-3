import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/Layout/NavBar/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import GlobalReduxProvider from "@/components/Redux/GlobalReduxProvider";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "Color Tinter 3",
  description: "Explore the world of colors",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen flex flex-col")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <GlobalReduxProvider color={{ h: 150, s: 0, l: 50, a: 1 }}>
            <NavBar />
            <main className="pt-[55px] flex flex-col flex-grow">{children}</main>
            <Footer />
          </GlobalReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
