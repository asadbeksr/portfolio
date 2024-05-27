import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  actionText: string;
  actionLink: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  actionText,
  actionLink,
  image,
}) => {
  return (
    <Card  className='border p-4  w-[324px] sm:w-m-[580px] md:w-[610px] flex items-center justify-between gap-6'>
      <div className='flex items-center gap-6'>
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className='md:w-[100px] md:h-[70px] rounded-md h-[45px] w-[45px]'
        />
        <div className='h-12'>
          <h3 className='md:text-xl font-medium dark:text-white text-lg'>{title}</h3>
          <p className='md:text-sm dark:text-white/30 text-black/60 max-w-sm text-xs font-light'>
            {description}
          </p>
        </div>
      </div>
      <Button variant='outline' asChild className='hover:animate-pulse md:h-10 md:px-6 md:py-2"' size="sm">
        <Link href={actionLink} target='_blank'>
          {actionText}
        </Link>
      </Button>
    </Card>

  );
};

export default ProjectCard;
