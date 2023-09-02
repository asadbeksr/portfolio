// 'use client'
import Link from 'next/link';
import Particles from './components/particles';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {
  // const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  // 	setTime(new Date());
  //   }, 1000);

  //   return () => {
  // 	clearInterval(intervalId);
  //   };
  // }, []);

  // const formattedTime = time.toLocaleTimeString();

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-200/20 to-black'>
      <nav className='my-16 animate-fade-in'>
        <ul className='flex items-center justify-center gap-4'>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm duration-500 text-zinc-500 hover:text-zinc-300 pointer'
            >
              {item.name}
            </Link>
          ))}
          {/* <li  className='text-sm duration-500 text-zinc-500 hover:text-zinc-300'>
			{`${formattedTime} (UTC+5) `}
		  </li> */}
        </ul>
      </nav>
      <div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      <Particles
        className='absolute inset-0 -z-10 animate-fade-in'
        quantity={1000}
      />
      <h1 className='z-10 text-5xl text-transparent duration-500 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text '>
        asadbek
      </h1>

      <div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      <div className='my-16 text-center animate-fade-in'>
        <h2 className='text-sm text-zinc-500  max-w-lg'>
          Frontend Engineer 🔮 with 3+ years of hands-on experience crafting
          responsive, user-friendly interfaces with eye-catching animations
        </h2>
      </div>
    </div>
  );
}
