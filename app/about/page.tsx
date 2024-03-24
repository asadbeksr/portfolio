"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://x.com/asadbeksr",
		label: "X",
		handle: "@asadbeksr",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:hello@asadbek.me",
		label: "Email",
		handle: "hello@asadbek.me",
	},
];

export default function AboutPage() {
	return (
		<div className='bg-gradient-to-tl from-emerald-900'>
			<Navigation />
			<div className='px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32'>
				<div className='max-w-2xl mx-auto lg:mx-0'>
					<h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>
						About
					</h2>
					<p className='mt-4 text-white'>
						Hey there! I'm Asadbek,{" "}
						{new Date().getFullYear() -
							2004 -
							(new Date().getMonth() < 6 ? 1 : 0)}{" "}
						years old developer from Uzbekistan.
						<br />

						<Image
							src='/imgs/asadbek.jpeg'
							width={600}
							height={500}
							alt="Asadbek Savronov - Picture"
						/>
					</p>
				</div>
				<div className='w-full h-px bg-emerald-700' />
			</div>
		</div>
	);
}
