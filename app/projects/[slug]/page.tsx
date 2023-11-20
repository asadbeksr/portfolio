import type { Metadata, ResolvingMetadata } from 'next'
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

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
  ): Promise<Metadata> {
	const { slug } = params
	const project = allProjects.find((p) => p.slug === slug)
  
	if (!project) {
	  throw new Error('Project not found')
	}
  
	const views = (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0
  
	return {
	  title: project.title, // Assuming 'title' is the field containing the project's title
	//   openGraph: {
	// 	images: ['/some-specific-page-image.jpg'], // Your specific page images
	//   },
	  // You can add more metadata fields as needed
	}
  }

  
const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
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
		<div className="bg-white min-h-screen">
			<div className="bg-emerald-900">
			<Header project={project} views={views} />
			</div>
			<ReportView slug={project.slug} />

			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={project.body.code} />
			</article>
		</div>
	);
}
