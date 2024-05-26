import Link from 'next/link';
import { ModeToggle } from './ui/modetoggle';

const Footer = () => {
  return (
    <footer className='text-sm font-thin text-center'>
      <Link href='/'>
        <p>www.asadbek.me</p>
      </Link>
    </footer>
  );
};

export default Footer;
