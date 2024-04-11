import type { Metadata } from 'next';
import { Fira_Sans, Open_Sans } from 'next/font/google';
import Navigation from '@/components/global/Navigation';
import Footer from '@/components/global/Footer';
import './globals.css';

const open_sans = Open_Sans({ subsets: ['latin'] });
const fira_sans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '900'],
  style: 'italic',
  variable: '--fira-sans',
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
    <html lang="en">
      <body
        className={`${open_sans.className} ${fira_sans.variable}`}
        suppressHydrationWarning
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
