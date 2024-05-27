import '../global.css';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '../components/theme-provider';
import { ModeToggle } from '@/components/ui/modetoggle';

export const metadata: Metadata = {
  title: {
    default: 'asadbek.me - Asadbek Savronov | Frontend Engineer',
    template: '%s | asadbek.me',
  },
  description:
    'Asadbek Savronov, a Front-End Developer. Top rated freelancer on Upwork with a 100% job success score. My professional focus is on delivering innovative design and robust coding, aimed at creating impactful, user-focused web experiences.',
  openGraph: {
    title: 'asadbek.me - Crafting Engaging Web Experiences',
    description:
      'Asadbek Savronov, a Front-End Developer. Top rated freelancer on Upwork with a 100% job success score. My professional focus is on delivering innovative design and robust coding, aimed at creating impactful, user-focused web experiences.',
    url: 'https:/asadbek.me',
    siteName: 'asadbek.me',
    images: [
      {
        url: 'https://asadbek.me/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Asadbek',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <Analytics />
      </head>
      <body
        className={`
		${process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined}`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='pattern-overlay' />
          <div className='pattern-overlay' />
          <div className='pattern-div'>
            <div className='pattern-bg' />
          </div>

          <div className='relative z-20'>{children}</div>
          {/* <div className='absolute z-30 sm:top-10 sm:right-10 top-4 right-4'>
            <ModeToggle />
          </div> */}
          <div className='light-bottom' />
        </ThemeProvider>
      </body>
    </html>
  );
}
