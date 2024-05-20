import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/Layout/NavBar/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import ReduxProvider from "@/components/Redux/ReduxProvider";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "Color Tinter 3",
  description: "Explore the world of colors",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ReduxProvider color={{ h: 342, s: 67, l: 44, a: 1 }} colorCount={9}>
            <NavBar />
            <main className="pt-[55px] flex flex-col min-h-screen">{children}</main>
            <Footer />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
