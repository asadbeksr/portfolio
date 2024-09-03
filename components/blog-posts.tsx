import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { EvervaultCard } from "./ui/evervault-card";

export default function BlogPosts() {
	return (
		<Card className='w-full bg-transparent'>
			<CardHeader className='pb-4'>
				<CardTitle>Blog</CardTitle>
				<CardDescription>Coming soon...</CardDescription>
			</CardHeader>
		</Card>
	);
}
