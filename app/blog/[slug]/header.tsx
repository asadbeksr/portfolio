"use client";
import { ArrowLeft, Eye, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
	blog: {
		url?: string;
		title: string;
		description: string;
		repository?: string;
	};

	views: number;
};
export const Header: React.FC<Props> = ({ blog, views }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	const links: { label: string; href: string }[] = [];
	if (blog.repository) {
		links.push({
			label: "GitHub",
			href: `https://github.com/${blog.repository}`,
		});
	}
	if (blog.url) {
		links.push({
			label: "Website",
			href: blog.url,
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
		<header ref={ref} className='relative isolate overflow-hidden z-50'>
			<div
				className={`fixed inset-x-0 top-0  duration-200 ${
					isIntersecting ? "bg-zinc-900/0 " : "backdrop-blur border-zinc-400 "
				}`}
			>
				<div className='container flex flex-row-reverse items-center justify-between p-6 mx-auto'>
					<div className='flex justify-between gap-8'>
						<span
							title='View counter for this page'
							className={`duration-200 hover:font-medium flex items-center gap-1 ] ${
								isIntersecting
									? " text-zinc-300  hover:text-[#55FF80]"
									: "text-zinc-700 hover:text-[#2dba4e] "
							} `}
						>
							<Eye className='w-5 h-5' />
							{Intl.NumberFormat("en-US", { notation: "compact" }).format(
								views,
							)}
						</span>
						<Link target='_blank' href='https://instagram.com/asadbeksr'>
							<Instagram
								className={`w-6 h-6 duration-200 hover:font-medium hover:text-[#cd4896] ${
									isIntersecting ? " text-zinc-300 " : "text-zinc-700"
								} `}
							/>
						</Link>
						<Link target='_blank' href='https://x.com/asadbeksr'>
							<Twitter
								className={`w-6 h-6 duration-200 hover:font-medium hover:text-[#1DA1F2] ${
									isIntersecting ? " text-zinc-300" : "text-zinc-700"
								} `}
							/>
						</Link>
						<Link target='_blank' href='https://github.com/asadbeksr'>
							<Github
								className={`w-6 h-6 duration-200 hover:font-medium ${
									isIntersecting
										? " text-zinc-300  hover:text-[#55FF80]"
										: "text-zinc-700 hover:text-[#2dba4e] "
								} `}
							/>
						</Link>
					</div>

					<Link
						href='/blog'
						className={`duration-200 hover:font-medium ${
							isIntersecting
								? " text-zinc-300  hover:text-[#55FF80]"
								: "text-zinc-700 hover:text-[#2dba4e] "
						} `}
					>
						<ArrowLeft className='w-6 h-6 ' />
					</Link>
				</div>
			</div>
			<div className='container mx-auto relative isolate overflow-hidden  py-24 sm:py-32'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center'>
					<div className='mx-auto max-w-2xl lg:mx-0'>
						<h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl font-display'>
							{blog.title}
						</h1>
						<p className='mt-6 text-lg leading-8 text-zinc-200'>
							{blog.description}
						</p>
					</div>

					<div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
						<div className='grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white  sm:grid-cols-2 md:flex lg:gap-x-10'>
							{links.map((link) => (
								<Link
									target='_blank'
									key={link.label}
									href={link.href}
									className='hover:text-[#55FF80]'
								>
									{link.label} <span aria-hidden='true'>&rarr;</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
