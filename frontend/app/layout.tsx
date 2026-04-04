import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { TopNavBar } from '@/components/TopNavBar';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  title: 'Juan Manuel Reyes Feliz | Senior Backend Engineer',
  description: 'Senior Backend Engineer specialized in Node.js, NestJS, and Laravel. Building scalable APIs and microservices.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable} bg-[#fcf9f8] text-[#1c1b1b] selection:bg-orange-200`}>
        <TopNavBar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}