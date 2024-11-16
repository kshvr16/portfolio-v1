import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import NavBarComponent from '@/components/navigation-bar/NavBarComponent';
import { Space_Grotesk, Poppins, Noto_Sans, Noto_Sans_Mono } from 'next/font/google';
import FooterComponent from "@/components/footer-component/FooterComponent";

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const notoSansMono = Noto_Sans_Mono({
  variable: '--font-noto-sans-mono',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Harshavardhan Kona',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'
          className={`${notoSans.variable} ${notoSansMono.variable} ${poppins.variable} ${spaceGrotesk.variable} antialiased`}
          suppressHydrationWarning>
      <body className='bg-zinc-100 dark:bg-zinc-900'>
        <ThemeProvider attribute='class' defaultTheme='system'
                     enableSystem disableTransitionOnChange>
          <NavBarComponent />
          {children}
          <FooterComponent />
        </ThemeProvider>
      </body>
    </html>
  );
}
