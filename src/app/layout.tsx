import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata: Metadata = {
  title: 'Note',
  description: 'Free canvas',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} flex flex-col items-center justify-center lg:w-7xl`}
      >
        {children}
      </body>
    </html>
  );
}
