import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.css";
import Navbar from './navbar';
import Footer from './Footer';
import Cat from './Cat';
import { ViewTransitions } from 'next-view-transitions';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portoflio Web Page",
  description: "Metin Nabiyev's Portfolio Web Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={inter.className}>
          <div className="App">
            <Navbar />
            {children}
            <Cat />
            <Footer />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}