import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from 'lucide-react';
import ProjectCard from '@/components/projectcard';
import SocialCard from '@/components/socialcard';
import VideoCard from '@/components/videocard';

export default function Home() {
  return (
    <main>
      <div className='container gap-4'>
        <Image
          className='rounded-full '
          src='/imgs/4.png'
          alt='Asadbek Savronov - Profile Picture'
          width={100}
          height={100}
        />

        <h1 className='text-4xl font-medium mt-3 text-center'>Asadbek</h1>

        <p className='text-center max-w-md font-light'>
          Front-end developer based in Italy 🇮🇹 <br />
          Crafting User-Friendly Web Experiences
          {/* with a passion for creating stunning web applications */}
        </p>

        <div className='flex gap-4 mt-2'>
          <Button
            variant='outline'
            asChild
            className='border hover:border-accent-foreground'
          >
            <Link href='/cv.pdf' target='_blank'>
              Resume
            </Link>
          </Button>

          <Button
            variant='outline'
            className='bg-popover hover:border-accent-foreground'
            asChild
          >
            <Link href='mailto:hello@asadbek.me'>
              <Mail className='mr-2 h-4 w-4 opacity-60' />
              Email
            </Link>
          </Button>
        </div>

        <div className='flex gap-4 sm:mt-12 mt-8 flex-col'>
          <ProjectCard
            title='Utas'
            description='University website'
            actionText='View'
            actionLink='https://utas.uz/'
            image='/imgs/utas.png'
          />

          <ProjectCard
            title='Rasta'
            description='Food delivery service'
            actionText='View'
            actionLink='https://rasta.uz/'
            image='/imgs/rasta.png'
          />
        </div>

        <div className='flex gap-4 flex-col'>
          <VideoCard
            title='Latest Video'
            link='https://www.youtube.com/channel/UC06ECXAc_hcCc7ixPCTQc6w'
            linkTitle='YouTube'
          />
        </div>

        <div className='flex gap-4 w-full items-center justify-center mb-8'>
          <SocialCard
            icon={<Instagram />}
            link='https://instagram.com/asadbeksr'
          />
          <SocialCard
            icon={<Linkedin />}
            link='https://www.linkedin.com/in/asadbeksr/'
          />
          <SocialCard icon={<Twitter />} link='https://twitter.com/asadbeksr' />
          <SocialCard icon={<Github />} link='hhtps://github.com/asadbekr' />
          <SocialCard icon={<Youtube />} link='https://youtube.com/asadbekr' />
        </div>
      </div>
    </main>
  );
}
