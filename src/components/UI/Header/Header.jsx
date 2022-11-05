import { Container } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './style.module.scss';

export function Header() {
  const router = useRouter();
  const { t } = useTranslation('common');

  const langs = [
    {
      key: 'uz',
      label: 'uz',
    },
    {
      key: 'en',
      label: 'en',
    },
  ];

  return (
    <header className={styles.header}>
      <Container maxWidth='xl' className={styles.container}>
        <div className={styles.box}>
          <Link href='/'>
            <a className='link link--elara'>
              <span>Asadbek Savronov</span>
            </a>
          </Link>

          {/* <div className={styles.langs}>
            <ul>
              {langs.map((item) => (
                <li key={item.key}>
                  <Link href={router.asPath} locale={item.key}>
                    <a>{item.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          <nav>
            <ul>
              <li>
                <Link href='/work'>
                  <a className={`${styles.navlinks} link link--metis  `}>
                    {t('work')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/blog'>
                  <a className={`${styles.navlinks} link link--metis  `}>
                    {t('blog')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  <a className={`${styles.navlinks} link link--metis  `}>
                    {t('about')}
                  </a>
                </Link>
              </li>
              <span style={{ display: 'flex', gap: '8px' }}>
                <li>
                  <a
                    target='_blank'
                    rel="noreferrer" 
                    href='https://github.com/asadbeksr'
                    className='link link--metis'
                  >
                    <Image
                      width={30}
                      height={30}
                      alt='github'
                      src='https://img.icons8.com/sf-regular-filled/96/ffffff/github.png'
                    />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel="noreferrer" 
                    href='https://www.instagram.com/asadbeksr/'
                    className='link link--metis'
                  >
                    <Image
                      width={30}
                      height={30}
                      alt='instagram'
                      src='https://img.icons8.com/sf-regular-filled/96/ffffff/linkedin.png'
                    />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel="noreferrer" 
                    href='https://www.linkedin.com/in/asadbeksr/'
                    className='link link--metis'
                  >
                    <Image
                      width={30}
                      height={30}
                      alt='linkedin'
                      src='https://img.icons8.com/sf-regular-filled/96/ffffff/instagram-new.png'
                    />
                  </a>
                </li>
              </span>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
