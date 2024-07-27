import { MailPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BorderBeam } from "./ui/border-beam";

export default function NewsletterInput() {
	return (
		<Card className='w-full relative'>
			<CardHeader className='pb-4'>
				<CardTitle>Tech Blog</CardTitle>
				<CardDescription>
					Get useful insights direct in your mail
				</CardDescription>
			</CardHeader>
			<CardContent className='flex justify-between gap-4 mt-'>
				<Input
					type='email'
					placeholder='Email address'
					className='md:h-10 outline-none focus:border-red'
					required
					disabled
				/>
				<Button
					type='submit'
					variant='outline'
					disabled
					className='h-9 rounded-md px-3 md:h-10 md:px-6 md:py-2'
				>
					Subscribe
					<MailPlus strokeWidth={1} className='ml-2 w-4 opacity-90' />
				</Button>
			</CardContent>

			<BorderBeam />
		</Card>
	);
}
