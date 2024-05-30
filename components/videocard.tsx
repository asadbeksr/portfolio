import {
  Card,
  CardContent,
  CardDescription,
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
    <Card className='w-full'>
      <CardHeader className='flex justify-between flex-row items-center'>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <Link
            href={link}
            target='_blank'
            className='flex items-center font-light hover:text-foreground duration-100 ease-in-out'
          >
            {linkTitle}
            <ArrowRight className='ml-2 w-4 h-4' />
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <iframe
          className='rounded-md aspect-video w-full'
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
  );
};

export default VideoCard;
