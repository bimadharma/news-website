import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"; 
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News Portal - Human Initiative Simulation fungsional",
  description: "Portal Berita Modern Simulation fungsional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen transition-colors duration-300`}>
   
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>

          <Header />
          
          {children}

          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}