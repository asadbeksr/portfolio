import Link from 'next/link';

interface SocialCardProps {
  icon: React.ReactNode;
  link: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ icon, link }) => {
  return (
    <Link href={link} target='_blank'>
      <div className='border rounded-md p-4 bg-[#1c1c1c] flex items-center justify-center md:w-[109px] w-[52px] md:h-24 h-16 sm:w-[71px] text-gray-400 hover:text-white hover:animate-pulse'>
        {icon}
      </div>
    </Link>
  );
};

export default SocialCard;
