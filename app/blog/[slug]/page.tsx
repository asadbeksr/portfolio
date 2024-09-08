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

