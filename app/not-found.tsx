import { Metadata } from 'next';
import React from 'react';
import { cn } from '@/lib/utils';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import { Spotlight } from '@/components/ui/Spotlight';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// METADATA
export const metadata: Metadata = {
  title: 'Page not found',
};

const errorMessages: string[] = [
  'This page is enjoying la dolce vita!',
  'Lost in the Amalfi Coast! Let’s find our way back.',
  'Out for gelato. Try another flavor!',
  'Wandering a Roman piazza. Time to head home!',
  'Oops! This page is lost in Venice’s canals.',
  'Taking a pasta break! Hang tight.',
  'Ciao! This page is sightseeing in Florence.',
  'Chilling in a Tuscan vineyard. Let’s find home!',
  'Mamma mia! Page is astray in Rome!',
  'On a pizza break. Hope you’re hungry!',
  'Lost in a sea of spaghetti! Help!',
  'Oops! This page took a gondola ride!',
  'Searching for the perfect slice. Be right back!',
  'Enjoying a sunset in Positano!',
  'This page ran off with tiramisu. Sweet escape!',
];

const buttonMessages: string[] = [
  'Casa Mia',
  'Pizza Time',
  'Home, Mamma!',
  'Ciao, Home!',
  'Go Home!',
  'Home, Amico!',
  'Return Now!',
];

export default function NotFound() {
  const randomMessage =
    errorMessages[Math.floor(Math.random() * errorMessages.length)];

  const randomButtonMessage =
    buttonMessages[Math.floor(Math.random() * buttonMessages.length)];
  return (
    <div className='h-[35.4rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden'>
      {/* <Spotlight
        className='-top-40 fixed left-0 md:left-60 md:-top-20'
        fill='white'
      /> */}

      <div className='h-[40rem] fixed flex items-center justify-center'>
        <TextHoverEffect text='404' />
      </div>

      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-[40rem] text-gray-200 opacity-10 pointer-events-none'>
          <TextHoverEffect text='404' />
        </div>
      </div>

      <div className='p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0 flex justify-center items-center flex-col gap-4'>
        <h1 className='text-5xl font-bold text-center leading-[1.2] md:leading-[1.4] bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-600 dark:from-neutral-50 dark:to-neutral-300'>
          {randomMessage}
        </h1>

        <Button asChild className='dark:text-black text-white'>
          <Link href='/'>{randomButtonMessage}</Link>
        </Button>
      </div>
    </div>
  );
}
