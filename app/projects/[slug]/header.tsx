"use client";
import { ArrowLeft, Eye, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
	project: {
		url?: string;
		title: string;
		description: string;
		repository?: string;
	};

	views: number;
};
export const Header: React.FC<Props> = ({ project, views }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	const links: { label: string; href: string }[] = [];
	if (project.repository) {
		links.push({
			label: "GitHub",
			href: `https://github.com/${project.repository}`,
		});
	}
	if (project.url) {
		links.push({
			label: "Website",
			href: project.url,
		});
	}

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<>
		<header ref={ref} className='relative isolate overflow-hidden z-50'>
		<div
				className={`fixed inset-x-0 top-0  duration-200 ${
					isIntersecting ? "bg-zinc-900/0 " : "backdrop-blur border-zinc-400 "
				}`}
			>
				<div className='flex flex-row items-center gap-8 pt-6 md:pt-12 pb-6 md:pb-8  px-4 md:px-8  mx-auto'>
					<Link href='/projects' >
						<ArrowLeft className='w-6 h-6 ' />
					</Link>
					<span
						title='View counter for this page'
						className='flex items-center gap-1'
					>
						<Eye className='w-5 h-5' />
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span>

					<Link target='_blank' href='https://x.com/asadbeksr'>
						<Twitter  />
					</Link>
					<Link target='_blank' href='https://github.com/asadbeksr'>
						<Github  />
					</Link>
				</div>
			</div>

			<div className='container mx-auto relative isolate overflow-hidden mt-6 mb-20'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center'>
					<div className='mx-auto max-w-2xl lg:mx-0'>
						<h1 className='text-4xl font-bold tracking-tight dark:text-white sm:text-6xl font-display'>
							{project.title}
						</h1>
						<p className='mt-6 text-lg leading-8 dark:text-zinc-200'>
							{project.description}
						</p>
					</div>

					<div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
						<div className='grid gap-y-6 gap-x-8 text-base font-semibold leading-7 dark:text-white  sm:grid-cols-2 md:flex lg:gap-x-10'>
							{links.map((link) => (
								<Link target='_blank' key={link.label} href={link.href}>
									{link.label} <span aria-hidden='true'>&rarr;</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
		</>
	);
};
