import styles from './style.module.scss'
import Link from 'next/link'
import { Container } from '@mui/material'
export function Footer() {
  return (
    <footer className={styles.footer}>
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
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/blog'>
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
