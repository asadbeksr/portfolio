import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	images: {
		domains: ["asadbek.tech", "asadbek.me"],
	},
	experimental: {
		mdxRs: true,
	},
};

export default withContentlayer(nextConfig);
