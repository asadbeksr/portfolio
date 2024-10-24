import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allProjects
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
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		return {
			title: 'Project Not Found ✦ asadbek.tech',
			description: 'This project could not be found.',
			openGraph: {
				title: 'project Not Found - asadbek.tech',
				description: 'This project could not be found.',
				url: `https:/asadbek.tech/${slug}`,
			},
		};
	}

	return {
		title: project?.title,
		description: project?.description,
		openGraph: {
			title: `${project?.title} - asadbek.tech`,
			description: project?.description,
			url: `https:/asadbek.tech/${project?.slug}`,
			images: [
				{
					url: `https://asadbek.tech/api/og?title=${encodeURIComponent(project?.title)}`, // Dynamic OG image URL
					width: 1200,
					height: 630,
					alt: `${project?.title} OpenGraph Image`,
				},
			],
		},
	};
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	const views =
		(await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

	return (
		<div className='min-h-screen'>
			<Header project={project} views={views} />
			<ReportView slug={project.slug} />

			<article className='container py-12 mx-auto prose prose-zinc prose-quoteless'>
				<Mdx code={project.body.code} />
			</article>
		</div>
	);
}
