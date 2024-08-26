import Link from "next/link";
import { Card } from "@/components/ui/card";

interface SocialCardProps {
	icon: React.ReactNode;
	link: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ icon, link }) => {
	return (
		<Link href={link} target='_blank'>
			<Card className='flex items-center justify-center md:h-20 h-16 text-[#7C7F82] dark:hover:text-white hover:text-black hover:border-ring hover:animate-pulse duration-100 ease-in-out'>
				{icon}
			</Card>
		</Link>
	);
};

export default SocialCard;
