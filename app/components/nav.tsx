"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref} className='relative isolate overflow-hidden z-50 '>
			<div
				className={`fixed inset-x-0 top-0  duration-200 ${
					isIntersecting ? "bg-zinc-900/0 " : "backdrop-blur border-zinc-400 "
				}`}
			>
				<div className="flex flex-row items-center justify-between pt-6 md:pt-12 pb-6 md:pb-8 px-4 md:px-8 mx-auto">
					<div className="flex justify-between gap-8 dark:hover:border-[#7c7c7c] hover:border-[#1c1c1c]">
						<Link href="/">
							<ArrowLeft className="w-6 h-6 " />
						</Link>
						<Link  href="/projects">Projects</Link>
						<Link
							href="/blog"
							className="duration-200  "
						>
							Blog
						</Link>
						<Link href="/about">About</Link>
					</div>
				</div>
			</div>
		</header>
	);
};
