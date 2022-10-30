import { Container } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
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
      <Container maxWidth='xl'>
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
              <li >
                <Link href='/work'>
                  <a className='link link--metis'>{t('work')}</a>
                </Link>
              </li>
              <li>
                <Link href='/blog'>
                  <a className='link link--metis'>{t('blog')}</a>
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  <a className='link link--metis'>{t('about')}</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
