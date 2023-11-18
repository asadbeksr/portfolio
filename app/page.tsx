// 'use client'
import Link from 'next/link';
import Particles from './components/particles';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {

  return (
    <div className='flex ring flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-emerald-900'>
      <nav className='my-16 animate-fade-in'>
        <ul className='flex items-center justify-center gap-4'>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm duration-500 text-zinc-400 hover:text-[#55FF80] pointer'
            >
              {item.name}
            </Link>
          ))}

        </ul>
      </nav>
      <div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      <Particles
        className='absolute inset-0 -z-10 animate-fade-in'
        quantity={500}
      />
      <h1 className='z-10 text-5xl text-transparent duration-500 bg-[#55FF80]/70 cursor-default  animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text '>
        asadbek
      </h1>

      <div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-100/50 to-zinc-100/0' />
      <div className='my-16 text-center animate-fade-in'>
        <h2 className='text-sm text-zinc-400  max-w-lg'>
          Frontend Engineer with 3+ years of hands-on experience crafting
          responsive, user-friendly interfaces with eye-catching animations
        </h2>
      </div>
    </div>
  );
}
