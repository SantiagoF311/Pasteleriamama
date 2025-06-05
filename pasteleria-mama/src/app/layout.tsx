import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="es">
      <body className={inter.className}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navigation />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
