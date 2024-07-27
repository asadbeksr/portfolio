"use client";
import { ArrowRightIcon, Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";
import BlurIn from "@/components/ui/blur-in";
import Gallery from "@/components/gallery";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

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
		<div className='min-h-screen mb-20'>
			<Navigation />
			<div className='container gap-4'>
				<Image
					className='rounded-full mt-2'
					src='/images/4.png'
					alt='Asadbek Savronov - Profile Picture'
					width={100}
					height={100}
				/>
				<BlurIn word='Asadbek' />

				<div
					className={cn(
						"group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
					)}
				>
					<AnimatedShinyText className='text-xs sm:text-base inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
						<span>✨Welcome to my personal corner of the web!</span>
					</AnimatedShinyText>
				</div>

				<div className='sm:mt-4 font-light text-lg '>
					<br />
					I am <i>Asadbek Savronov</i>, aspiring Frontend developer from
					Uzbekistan🇺🇿
					<br />
					<br />
					<h3>Professional Interests</h3>
					<ul>
						<li>✦ Tech Enthusiast</li>
						<li>✦ Startup Aficionado</li>
						<li> ✦ Top-notch UI Interfaces</li>
					</ul>
					<br />
					<h3>Hobbies</h3>
					<ul>
						<li>✦ Avid Traveler 🏞</li>
						<li>✦ Exploring new cultures and cuisines 🍕</li>
					</ul>
					<br />
					<h3>Sports</h3>
					<ul>
						<li>✦ Football ⚽️ & Swimming Fanatic 🌊</li>
						<li>
							✦ Die-hard Supporter of AC Milan and the Uzbekistan National Team
							🇺🇿
						</li>
					</ul>
				</div>

				<Gallery title='Memories 📸' />
			</div>
		</div>
	);
}
