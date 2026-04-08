import type { Metadata } from 'next';
import Script from 'next/script';
import { DM_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://peptides-guide.com'),
  title: {
    template: '%s | Peptides Guide',
    default: 'Peptides Guide — The Complete Peptide Encyclopedia',
  },
  description:
    'Comprehensive, research-backed peptide encyclopedia. Mechanisms of action, clinical evidence, protocols, and safety profiles for 35+ peptides. No selling, no hype — just science.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://peptides-guide.com',
    siteName: 'Peptides Guide',
    title: 'Peptides Guide — The Complete Peptide Encyclopedia',
    description:
      'Comprehensive, research-backed peptide encyclopedia. Mechanisms, clinical evidence, protocols, and safety profiles for 35+ peptides.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmMono.variable} suppressHydrationWarning>
      <head>
        <link rel="alternate" type="application/rss+xml" title="Peptides Guide" href="https://peptides-guide.com/feed" />
        <Script
          defer
          src="https://umami-production-7d35.up.railway.app/script.js"
          data-website-id="48bd73eb-0816-4c2a-bd78-fb62cc4cf7f6"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
