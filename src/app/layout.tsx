import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './index.css';
import Cat from './Cat';
import { ViewTransitions } from 'next-view-transitions';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portfolio Web Page',
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
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
                />
                <body className={inter.className}>
                    <div className="App">
                        <div className="container-app">
                            <Cat />
                            {children}
                        </div>
                    </div>
                </body>
            </html>
        </ViewTransitions>
    );
}
