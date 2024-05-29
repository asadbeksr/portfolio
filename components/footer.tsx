import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='text-sm font-thin text-center mt-6'>
      <Link href='/'>
        <p>www.asadbek.me</p>
      </Link>

      <div className='mt-20 w-screen h-[2px] bg-gradient-to-r from-zinc-600/0 via-zinc-600/50 to-zinc-600/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0' />
    </footer>
  );
};

export default Footer;
