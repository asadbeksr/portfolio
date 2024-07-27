import type { BlogPost } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, View } from "lucide-react";

type Props = {
	blog: BlogPost;
	views: number;
};

export const Article: React.FC<Props> = ({ blog, views }) => {
	return (
		<Link href={`/blog/${blog.slug}`}>
			<article className='p-4 md:p-8'>
				<div className='flex justify-between gap-2 items-center'>
					<span className='text-xs duration-1000  drop-shadow-orange'>
						{blog.date ? (
							<time dateTime={new Date(blog.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(blog.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
					<span className='text-zinc-300 text-xs  flex items-center gap-1'>
						<Eye className='w-4 h-4' />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span>
				</div>
				<h2 className='z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display'>
					{blog.title}
				</h2>
				<p className='z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200'>
					{blog.description}
				</p>
			</article>
		</Link>
	);
};
