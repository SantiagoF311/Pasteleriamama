import type { Metadata } from "next";
import { Inter, Satisfy } from "next/font/google";
import "./globals.css";
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ['400'],
  display: 'swap',
  variable: '--font-satisfy',
});

export const metadata: Metadata = {
  title: "Pastelería San Juan",
  description: "Los mejores pasteles artesanales de la ciudad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={satisfy.variable}>
      <body className={inter.className}>
        <div className="app-container">
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}