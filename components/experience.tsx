import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { BorderBeam } from "./ui/border-beam";

type Award = {
	title: string;
	description: string;
	by: string;
	year: string;
};
const awardsList: Award[] = [
	{
		title: "Frontend Engineer",
		description:
			'Achieved the "Top Rated" badge on Upwork by consistently delivering high-quality services and maintaining a perfect 100% Job Success Score.',
		by: "Upwork",
		year: "2022 - Present",
	},
	{
		title: "Frontend Engineer",
		description:
			"Led the successful completion of three projects from inception to delivery, in addition to maintaining and optimizing code for adherence to high-quality standards.",
		by: "Udevs.io",
		year: "2021 - 2023",
	},
];

export default function Experience() {
	return (
		<Card className='w-full relative'>
			<CardHeader className='pb-4'>
				<CardTitle>Experience</CardTitle>
			</CardHeader>
			<CardContent className='flex gap-4 flex-col'>
				{awardsList.map((award, index) => (
					<div
						className={index === 0 ? "pt-0" : "border-t pt-4"}
						key={award.title}
					>
						<div className='flex justify-between items-center relative'>
							<h1>{award.title}</h1>
							<span className='font-light text-xs'>{award.year}</span>
						</div>
						<CardDescription>{award.by}</CardDescription>
						<CardDescription className='mt-2 text-justify'>
							{award.description}
						</CardDescription>
					</div>
				))}
			</CardContent>

			<BorderBeam />
		</Card>
	);
}
