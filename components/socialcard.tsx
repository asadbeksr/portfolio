import Link from 'next/link';
import { Card } from './ui/card';

interface SocialCardProps {
  icon: React.ReactNode;
  link: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ icon, link }) => {
  return (
    <Link href={link} target='_blank'>
      <Card className='flex items-center justify-center md:w-[109px] w-[53px] md:h-24 h-16 sm:w-[71px] text-gray-400 dark:hover:text-white hover:text-black hover:border-[#1c1c1c] hover:animate-pulse'>
        {icon}
      </Card>
    </Link>
  );
};

export default SocialCard;
