import type { Project } from '@/.contentlayer/generated';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import { EvervaultCard } from '@/components/ui/evervault-card';

type Props = {
  project: Project;
  views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <EvervaultCard>
        <article className='p-4 md:p-8'>
          <div className='flex justify-between gap-2 items-center h-full'>
            <span className='text-xs'>
              {project.date ? (
                <time dateTime={new Date(project.date).toISOString()}>
                  {Intl.DateTimeFormat(undefined, {
                    dateStyle: 'medium',
                  }).format(new Date(project.date))}
                </time>
              ) : (
                <span>SOON</span>
              )}
            </span>
            <span className='text-zinc-500 dark:text-zinc-300 text-xs  flex items-center gap-1'>
              <Eye className='w-4 h-4' />
              {Intl.NumberFormat('en-US', { notation: 'compact' }).format(
                views
              )}
            </span>
          </div>
          <h2 className='z-20 text-xl font-display font-medium lg:text-3xl'>
            {project.title}
          </h2>
          <p className='z-20 mt-4 text-sm '>{project.description}</p>
        </article>
      </EvervaultCard>
    </Link>
  );
};
