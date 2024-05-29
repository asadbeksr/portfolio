import '../global.css';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '../components/theme-provider';
import { ModeToggle } from '@/components/ui/modetoggle';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: 'asadbek.me - Asadbek Savronov | Frontend Engineer',
    template: '%s | asadbek.me',
  },
  description:
    'Asadbek Savronov, a Front-End Developer. Top rated freelancer on Upwork with a 100% job success score. My professional focus is on delivering innovative design and robust coding, aimed at creating impactful, user-focused web experiences.',
  openGraph: {
    title: 'asadbek.me - Crafting User-Friendly Web Experiences',
    description: `Asadbek Savronov, a Front-End Developer. Top rated freelancer on Upwork with a 100% job success score.
      
      Passionate about creating stunning web applications with over 3 years of hands-on experience. 

      Expertise:
      ✦ Next.js, React.js, TypeScript, 
      ✦ Three.js, React-Three-Fiber (R3F)
      ✦ Low/No Code Platforms: Webflow, Framer
      ✦ SEO: Google Tag Manager, Facebook Pixel, Server-Side Tagging (Stape.io)

      Skilled in building responsive, user-friendly interfaces featuring eye-catching animations. Dedicated to leveraging technology to make a positive impact. Driven to bring innovative ideas to life and elevate web projects. 

      `,
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
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
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
        className={`sm:mt-[100px] mt-[60px]
		${process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined}`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='fixed z-30 sm:top-10 sm:right-10 top-4 right-4'>
            <ModeToggle />
          </div>
          <div className='pattern-overlay' />
          <div className='pattern-overlay' />
          <div className='pattern-overlay' />
          <div className='pattern-div'>
            <div className='pattern-bg' />
          </div>

          <div className='relative z-20'>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
