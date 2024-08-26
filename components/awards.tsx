import Link from "next/link";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

type Award = {
	title: string;
	description: string;
	by: string;
	year: string;
	link: string;
};
const awardsList: Award[] = [
	{
		title: "Top Rated Freelancer",
		description:
			'Earned "Top Rated" badge through a track record of consistently delivering high-quality services and maintaining a flawless 100% Job Success Score.',
		by: "Upwork",
		year: "2023",
		link: "https://www.upwork.com/freelancers/asadbeks",
	},
	{
		title: "MITC Grant",
		description:
			"Recipient of a prestigious scholarship covering 100% of tuition fees at IT Park University, sponsored by the Ministry of Digital Technologies of Uzbekistan. ",
		by: "MITC x ITPU.uz",
		year: "2022",
		link: "https://t.me/itpu_uz/171",
	},
	{
		title: "Front-end Nanodegree Program",
		description:
			"Winner of the competitive Udacity Frontend Nanodegree Grant, awarded by Udacity in collaboration with uzbekcoders.uz. ",
		by: "Udacity x uzbekcoders.uz",
		year: "2021",
		link: "https://www.udacity.com/certificate/G6PMKGDL",
	},
];

export default function Awards() {
	return (
		<Card className='w-full'>
			<CardHeader className='pb-4'>
				<CardTitle>Awards</CardTitle>
			</CardHeader>
			<CardContent className='flex gap-4 flex-col'>
				{awardsList.map((award, index) => (
					<div
						className={index === 0 ? "pt-0" : "border-t pt-4"}
						key={award.title}
					>
						<div className='flex justify-between items-center'>
							<Link
								href={award.link}
								target='_blank'
								className='flex items-center'
							>
								<h2>{award.title}</h2>
								<ExternalLink strokeWidth={1} size='16px' className='ml-1' />
							</Link>
							<span className='font-light text-xs'>{award.year}</span>
						</div>
						<CardDescription>{award.by}</CardDescription>
						<CardDescription className='mt-2 text-left'>
							{award.description}
						</CardDescription>
					</div>
				))}
			</CardContent>
		</Card>
	);
}
