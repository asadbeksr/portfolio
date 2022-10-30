import { Container } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './style.module.scss'

export function Header() {
  const router = useRouter()
  const { t } = useTranslation('common')
  const langs = [
    {
      key: 'ru',
      label: 'ru'
    },
    {
      key: 'uz',
      label: 'uz'
    },
    {
      key: 'en',
      label: 'en'
    }
  ]
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.box}>
          <Link href='/'>
            <a className={styles.logo}>
              <h2>Logo</h2>
            </a>
          </Link>
          <nav>
            <ul>
              <li>
                <Link href='/'>
                  <a>{t('home')}</a>
                </Link>
              </li>
              <li>
                <Link href='/blog'>
                  <a>{t('blog')}</a>
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  <a>{t('about')}</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.langs}>
            <ul>
              {langs.map((item) => (
                <li key={item.key}>
                  <Link href={router.asPath} locale={item.key}>
                    <a>{item.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </header>
  )
}
