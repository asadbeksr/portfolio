'use client';
import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import AutoScroll from 'embla-carousel-auto-scroll';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface GalleryProps {
  title: string;
}

type Icon = {
  name: string;
  src: string;
  classes?: string;
  link?: string;
};

const icons: Icon[] = [
  {
    name: 'Istanbul, Turkey - Asadbek Savronov / 2023 ',
    src: '/images/gallery-1.jpeg',
  },
  {
    name: 'Vatican City, Italy - Asadbek Savronov / 2024',
    src: '/images/gallery-2.jpeg',
  },
  {
    name: 'Colosseum, Italy - Asadbek Savronov / 2024',
    src: '/images/gallery-3.jpg',
  },
  {
    name: 'Venice, Italy - Asadbek Savronov / 2024',
    src: '/images/gallery-4.jpeg',
  },
];

const Gallery: React.FC<GalleryProps> = ({ title }) => {
  return (
    <Card className='w-full shadow-inner'>
      <CardHeader className='flex justify-between flex-row items-center'>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <Carousel
      className="gap-1"
        opts={{
          loop: true,
          skipSnaps: true,
          axis: 'y',
        }}
      >
        <CarouselContent>
          {icons.map((icon, index) => (
            <CarouselItem key={index} className='basis-1/3'>
              <div className='py-4'>
                <Card>
                  <CardContent
                    className={`flex items-center aspect-square justify-center rounded-md ${icon.classes} p-0`}
                  >
                    <div className='relative w-full h-full flex items-center justify-center'>
                      <Image
                        src={icon.src}
                        alt={icon.name}
                        layout='fill'
                        objectFit='cover'
                        className='rounded-md'
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Card>
  );
};

export default Gallery;
