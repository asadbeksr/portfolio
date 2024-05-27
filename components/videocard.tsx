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

interface VideoCardProps {
  title: string;
  link: string;
  linkTitle: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, link, linkTitle }) => {
  return (
    <Card>
      <CardHeader className='flex justify-between flex-row items-center'>
        <CardTitle>{title}</CardTitle>
        <CardDescription className='hover:animate-pulse'>
          <Link href={link} className='flex items-center font-thin'>
            {linkTitle}
            <ArrowRight className='ml-2 w-4 h-4' />
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <iframe
          className='rounded-md xl:w-[560px] xl:h-[535px] md:w-[560px] md:h-[350px]  w-[280px] h-[157.5px]'
          src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=HuFfapEJLJL7aNRO&amp;controls=0'
          title='YouTube video player'
   // @ts-ignore
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
      </CardContent>
    </Card>
    //   <div className='border rounded-md p-4 bg-[#1c1c1c] flex items-center justify-center md:w-[104px] w-[52px] md:h-24 h-16 sm:w-[71px] text-gray-400 hover:text-white hover:animate-pulse'>

    //   </div>
  );
};

export default VideoCard;
