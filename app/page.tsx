import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/projectcard';
import SocialCard from '@/components/socialcard';
import NewsletterInput from '@/components/newsletter-input';

import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from 'lucide-react';
import Services from '@/components/services';
import BlogPosts from '@/components/blog-posts';
import Awards from '@/components/awards';
import Experience from '@/components/experience';
import Stack from '@/components/stack';
import BlurIn from '@/components/ui/blur-in';
import AnimatedShinyText from '@/components/ui/animated-shiny-text';
import { cn } from '@/lib/utils';
import ShineBorder from '@/components/ui/shine-border';
import VideoCard from '@/components/videocard';
import Gallery from '@/components/gallery';
import { CardDescription, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main>
      <div className='container gap-4'>
        <Link href='/about'>
          <Image
            className='rounded-full mt-2'
            src='/images/4.png'
            alt='Asadbek Savronov - Profile Picture'
            width={100}
            height={100}
          />
        </Link>

        <BlurIn word='Asadbek' />

        <p className='text-center max-w-md font-light'>
          Front-end developer based in{' '}
          <Link
            href='www.asadbek.tech'
            target='_blank'
            className='text-black/90 dark:text-white/90'
          >
            Uzbekistan 🇺🇿
          </Link>
          <br />
          Crafting User-Friendly Web Experiences
        </p>

        <div className='flex gap-4 mt-2'>
          <Button
            variant='outline'
            className='bg-card border-accent hover:border-ring'
            asChild
          >
            <Link href='/cv.pdf' target='_blank'>
              Resume
            </Link>
          </Button>

          <ShineBorder
            className='bg-card px-5 py-1'
            color={['#1c1c1c', '#727272']}
          >
            <Link
              href='mailto:asadbeksr@gmail.com'
              target='_blank'
              className='flex items-center'
            >
              <Mail className='mr-2 h-4 w-4 opacity-60' />
              Email
            </Link>
          </ShineBorder>
        </div>

        <div className='flex gap-4 sm:mt-12 mt-8 flex-col w-full'>
          <div className='flex justify-between mx-4'>
            <Link href='/projects'>
              <CardTitle>Projects</CardTitle>
            </Link>

            <Link href='/projects'>
              <CardDescription className='hover:text-primary'>
                View all
              </CardDescription>
            </Link>
          </div>
          <ProjectCard
            title='Utas'
            description='University website'
            actionText='Explore'
            actionLink='/projects/utas'
            image='/images/utas.png'
            slug='utas'
          />

          <ProjectCard
            title='Rasta'
            description='Food delivery service'
            actionText='Explore'
            actionLink='/projects/rasta'
            image='/images/rasta.png'
            slug='rasta'
          />
        </div>

        <Experience />

        <Awards />

        {/* <Services /> */}

        <BlogPosts />

        {/* <div className='flex gap-4 flex-col w-full '>
          <VideoCard
            title='Latest Video'
            link='https://www.youtube.com/channel/UC06ECXAc_hcCc7ixPCTQc6w'
            linkTitle='YouTube'
          />
        </div> */}

        {/* <Gallery title='Gallery' /> */}

        <Stack title='Stack' />

        <NewsletterInput />

        <div className='w-full items-center justify-center mb-8 grid md:grid-cols-5 grid-cols-2 gap-4'>
          <SocialCard
            icon={<Instagram strokeWidth={1} />}
            link='https://instagram.com/asadbeksr'
          />
          <SocialCard
            icon={<Twitter strokeWidth={1} />}
            link='https://twitter.com/asadbeksr'
          />
          <SocialCard
            icon={<Github strokeWidth={1} />}
            link='hhtps://github.com/asadbekr'
          />
          <SocialCard
            icon={<Youtube strokeWidth={1} />}
            link='https://youtube.com/asadbekr'
          />
          <div className='col-span-2 md:col-span-1'>
            <SocialCard
              icon={<Linkedin strokeWidth={1} />}
              link='https://www.linkedin.com/in/asadbeksr/'
            />
          </div>
        </div>
      </div>
    </main>
  );
}
