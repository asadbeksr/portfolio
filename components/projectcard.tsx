import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components//ui/button';
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from '@/components//ui/card';

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
    <Card className='border p-4 w-full flex items-center justify-between gap-6'>
      <div className='flex items-center gap-6'>
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className='md:w-[100px] md:h-[70px] rounded-md h-[46px] w-[66px] object-cover'
        />
        <CardHeader className='p-0'>
          <CardTitle>{title}</CardTitle>

          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </div>
      <Button
        variant='outline'
        asChild
        className='hover:animate-pulse md:h-10 md:px-6 md:py-2 bg-secondary dark:bg-card'
        size='sm'
      >
        <Link href={actionLink} target='_blank'>
          {actionText}
        </Link>
      </Button>
    </Card>
  );
};

export default ProjectCard;
