'use client';
import * as React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import Autoplay from 'embla-carousel-autoplay';
import AutoScroll from 'embla-carousel-auto-scroll';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

interface GalleryProps {
  title: string;
}

type Icon = {
  name: string;
  src: string;
  classes?: string;
  link: string;
};

const icons: Icon[] = [
  {
    name: 'Github',
    src: '/icons/github.svg',
    classes: 'dark:invert',
    link: 'https://github.com',
  },
  {
    name: 'VSCode',
    src: '/icons/vscode.svg',
    link: 'https://code.visualstudio.com',
  },
  {
    name: 'Vercel',
    src: '/icons/vercel.svg',
    classes: 'dark:invert',
    link: 'https://vercel.com',
  },
  {
    name: 'React',
    src: '/icons/react.svg',
    link: 'https://reactjs.org',
  },
  {
    name: 'Next.js',
    src: '/icons/next.svg',
    classes: 'dark:invert',
    link: 'https://nextjs.org',
  },
  {
    name: 'Tailwind CSS',
    src: '/icons/tailwind.svg',
    link: 'https://tailwindcss.com',
  },
];
const iconsList = [...icons, ...icons, ...icons];

const Gallery: React.FC<GalleryProps> = ({ title }) => {
  const plugin = React.useRef(
    AutoScroll({
      playOnInit: true,
      direction: 'forward',
      speed: 0.6,
      startDelay: 0,
      stopOnInteraction: true,
    })
  );

  return (
    <Card>
      <CardHeader className='flex justify-between flex-row items-center'>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <Carousel
        opts={{
          loop: true,
          skipSnaps: true,
          dragFree: true,
        }}
        plugins={[plugin.current]}
        className='md:w-[610px] w-[324px] sm:w-m-[580px]'
        onMouseEnter={() => {
          plugin.current.stop();
        }}
        onMouseLeave={() => {
          plugin.current.play();
        }}
      >
        <CarouselContent>
          {iconsList.map((icon, index) => (
            <CarouselItem key={index} className='basis-20 pb-4'>
              <div>
                <Link href={icon.link} target='_blank'>
                  <Card className='hover:border-accent'>
                    <CardContent
                      className={`flex aspect-square items-center justify-center p-4 rounded-md ${icon.classes}`}
                    >
                      <Image
                        src={icon.src}
                        alt={icon.name}
                        width={100}
                        height={100}
                      />
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Card>
  );
};

export default Gallery;
