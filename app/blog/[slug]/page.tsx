import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { allBlogPosts } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import NewsletterInput from "@/components/newsletter-input";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allBlogPosts
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const slug = params?.slug;
	const post = allBlogPosts.find((post) => post.slug === slug);

	if (!post) {
		return {
			title: 'Post Not Found ✦ asadbek.me',
			description: 'This post could not be found.',
			openGraph: {
				title: 'Post Not Found - asadbek.me',
				description: 'This post could not be found.',
				url: `https:/asadbek.me/${slug}`,
			},
		};
	}

	return {
		title: post?.title,
		description: post?.description,
		openGraph: {
			title: `${post?.title} - asadbek.me`,
			description: post?.description,
			url: `https:/asadbek.me/${post?.slug}`,
			images: [
				{
					url: `https://asadbek.me/api/og?title=${encodeURIComponent(post?.title)}`, // Dynamic OG image URL
					width: 1200,
					height: 630,
					alt: `${post?.title} OpenGraph Image`,
				},
			],
		},
	};
}


export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const blog = allBlogPosts.find((blog) => blog.slug === slug);

	if (!blog) {
		notFound();
	}

	const views =
		(await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

	return (
		<div className='min-h-screen  mb-14'>
			<Header blog={blog} views={views} />
			<ReportView slug={blog.slug} />

			<article className='container px-4 py-12 mx-auto prose prose-zinc prose-quoteless'>
				<Mdx code={blog.body.code} />
			</article>

			<div className="container">
				<NewsletterInput />
			</div>
		</div>
	);
}

