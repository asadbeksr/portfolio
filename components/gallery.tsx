"use client";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import AutoScroll from "embla-carousel-auto-scroll";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface GalleryProps {
	title: string;
}

type Icon = {
	name: string;
	src: string;
	classes?: string;
	link?: string;
};

const icons: Icon[] = [
	{
		name: "Coleseo, Italy - 2023",
		src: "/images/coleseo.jpeg",
	},
	{
		name: "Ostia, Italy - 2024",
		src: "/images/ostia.jpg",
	},
	{
		name: "AC Milan, Italy - 2024",
		src: "/images/milano.jpeg",
	},
	{
		name: "Duomo Milano, Italy - 2024",
		src: "/images/duomo.jpeg",
	},
	{
		name: "Roman Forum, Italy -  2024",
		src: "/images/forumo.jpeg",
	},
	{
		name: "Rome, Italy -  2024",
		src: "/images/garden.jpeg",
	},
	{
		name: "Spanish Steps, Italy -  2024",
		src: "/images/spagna.jpeg",
	},
];

const Gallery: React.FC<GalleryProps> = ({ title }) => {
	return (
		<Card className='w-full shadow-inner'>
			<CardTitle className='px-4 pt-4'>{title}</CardTitle>
			<Carousel
				className='gap-1'
				opts={{
					loop: true,
					skipSnaps: true,
					axis: "y",
				}}
			>
				<CarouselContent>
					{icons.map((icon, index) => (
						<CarouselItem key={index} className='basis-1/2 sm:basis-1/3'>
							<div className='py-4'>
								<Card>
									<CardContent
										className={`flex items-center aspect-square justify-center rounded-md ${icon.classes} p-0`}
									>
										<div className='relative w-full h-full flex items-center justify-center'>
											<TooltipProvider>
												<Tooltip>
													<TooltipContent>
														<p>{icon.name}</p>
													</TooltipContent>

													<TooltipTrigger>
														<Image
															src={icon.src}
															alt={icon.name}
															layout='fill'
															objectFit='cover'
															className='rounded-md'
														/>
													</TooltipTrigger>
												</Tooltip>
											</TooltipProvider>
										</div>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</Card>
	);
};

export default Gallery;
