import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { EvervaultCard } from "./ui/evervault-card";

export default function BlogPosts() {
	return (
		<EvervaultCard className="w-full">
		<Card className='w-full'>
			<CardHeader className='pb-4'>
				<CardTitle>Blog</CardTitle>
				<CardDescription>Coming soon...</CardDescription>
			</CardHeader>
		</Card>
		</EvervaultCard>
	);
}
