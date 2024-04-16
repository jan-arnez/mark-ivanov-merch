import type { Metadata } from 'next';
import { Fira_Sans } from 'next/font/google';
import './globals.css';
import Navigation from '@/src/components/layout/Navigation';
import Footer from '@/src/components/layout/Footer';

const fira_sans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '900'],
  style: 'italic',
});

export const metadata: Metadata = {
  title: 'Mark Ivanov',
  description:
    'Profesionalni slovenski voznik formule za ekipo Walter Wolf Racing.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl">
      <body className={fira_sans.className} suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
