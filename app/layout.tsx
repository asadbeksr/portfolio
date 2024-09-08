import '../global.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '../components/theme-provider';
import { ModeToggle } from '@/components/ui/modetoggle';
import Footer from '@/components/footer';
import { TopTexture } from '@/components/top-texture';

export const metadata: Metadata = {
  title: {
    default: 'Asadbek',
    template: '%s ✦ asadbek.me',
  },
  description:
    'Asadbek Savronov, a Front-End Developer. Crafting User-Friendly Web Experiences',
    openGraph: {
      title: 'Asadbek Savronov ✦ asadbek.me',
      description: `
      Key Expertise:
      ✦ Next.js, React.js, TypeScript
      ✦ Three.js, React-Three-Fiber (R3F)
      ✦ Low/No Code Platforms: Webflow, Framer
      ✦ SEO: Google Tag Manager, Facebook Pixel, Server-Side Tagging (Stape.io)
    
      Crafting User-Friendly Web Experiences`,    
    url: 'https:/asadbek.me',
    siteName: 'asadbek.me',
    images: [
      {
        url:  "https://asadbek.me/api/og?title=Asadbek Savronov - Front-End Developer",
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Asadbek Savronov - Front-End Developer",
    description:
      "Asadbek Savronov, a Front-End Developer. Creating impactful, user-focused web experiences.",
    images: [
      "https://asadbek.me/api/og?title=Asadbek Savronov - Front-End Developer",
    ],
  },
  keywords: [
    'Asadbek Savronov',
    'front-end developer',
    'asadbek.me',
    'top rated freelancer',
    'web development',
    'asadbeksr',
    'uzbekistan',
    'Asadbek',
    'React.js',
    'Next.js',
  ],
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
  icons: {
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const calSans = localFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={[inter.variable, calSans.variable, inter.className].join(' ')}>
      <head>
        <Analytics />
      </head>
      <body
        className={`sm:mt-[100px] mt-[60px]
		${process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined}`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='fixed z-30 sm:top-10 sm:right-10 top-4 right-4'>
            <ModeToggle />
          </div>

          <TopTexture />
          <div className='relative z-20'>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
