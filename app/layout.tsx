import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
	title: {
		default: "asadbek.me - Asadbek Savronov | Frontend Engineer",
		template: "%s | asadbek.me",
	},
	description:
		"Asadbek Savronov, a Front-End Developer from Tashkent, Uzbekistan. Top rated freelancer on Upwork with a 100% job success score. My professional focus is on delivering innovative design and robust coding, aimed at creating impactful, user-focused web experiences.",
	openGraph: {
		title: "asadbek.me - Crafting Engaging Web Experiences",
		description:
			"Asadbek Savronov, a Front-End Developer from Tashkent, Uzbekistan. Top rated freelancer on Upwork with a 100% job success score. My professional focus is on delivering innovative design and robust coding, aimed at creating impactful, user-focused web experiences.",
		url: "https:/asadbek.me",
		siteName: "asadbek.me",
		images: [
			{
				url: "https://asadbek.me/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Asadbek",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-[#051317] ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
