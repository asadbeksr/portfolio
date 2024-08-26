import Link from "next/link";

const Footer = () => {
	return (
		<footer className='text-sm font-thin text-center mt-6'>
			<Link href='/'>
				<p>asadbek.me &nbsp; ✦ &nbsp; 2024 </p>
			</Link>

			<div className='mt-16 w-screen h-[2px] dark:h-[1px] bg-gradient-to-r from-lime-600/0 via-lime-600 to-red-600/0 dark:from-lime-600/50 dark:via-zinc-300 dark:to-red-600/50' />
		</footer>
	);
};

export default Footer;
