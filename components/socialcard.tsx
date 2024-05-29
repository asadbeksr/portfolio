import Link from 'next/link';
import { Card } from './ui/card';

interface SocialCardProps {
  icon: React.ReactNode;
  link: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ icon, link }) => {
  return (
    <Link href={link} target='_blank'>
      <Card className='flex items-center justify-center md:w-[109px] w-[53px] md:h-20 h-16 sm:w-[71px] text-[#7C7F82] dark:hover:text-white hover:text-black hover:border-accent hover:animate-pulse duration-100 ease-in-out'>
        {icon}
      </Card>
    </Link>
  );
};

export default SocialCard;
