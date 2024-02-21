import { Metadata } from 'next';
import { Footer, Header } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: 'Calculadora de IMC',
  description: 'IMC Calc - Calculadora de IMC',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen p-4 flex flex-col bg-gray-900 text-gray-100 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
