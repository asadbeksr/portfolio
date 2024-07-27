import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function Services() {
	return (
		<Card className='w-full'>
			<CardHeader className='pb-4'>
				<CardTitle>Services</CardTitle>
				{/* <CardDescription>
          Get inspiring and useful insights direct in your mail
        </CardDescription> */}
			</CardHeader>
			<CardContent>
				<Accordion type='single' collapsible>
					<AccordionItem value='item-3'>
						<AccordionTrigger>&nbsp; ✦ &nbsp; Web Apps</AccordionTrigger>
						<AccordionContent>
							Web apps are interactive websites that provide users with a rich
							and engaging experience. React.js is a popular library for
							building web apps. It allows you to create reusable components
							that can be used to build complex user interfaces. React.js is a
							great choice for building web apps because it is fast, efficient,
							and easy to use. It also has a large and active community, which
							means there are plenty of resources available to help you get
							started.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value='item-1'>
						<AccordionTrigger>&nbsp; ✦ &nbsp; Landing Page</AccordionTrigger>
						<AccordionContent>
							Landing pages are a great way to showcase your product or service.
							They are designed to be simple and easy to navigate, making it
							easy for visitors to find what they are looking for. Landing pages
							are also a great way to generate leads and increase conversions.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value='item-2'>
						<AccordionTrigger>
							&nbsp; ✦ &nbsp; React Three Fiber (R3F)
						</AccordionTrigger>
						<AccordionContent>
							React Three Fiber is a powerful library that allows you to create
							3D scenes in React. It is built on top of Three.js, a popular 3D
							library for the web. R3F makes it easy to create complex 3D scenes
							with React components. It is a great tool for creating interactive
							3D experiences on the web.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</CardContent>
		</Card>
	);
}
