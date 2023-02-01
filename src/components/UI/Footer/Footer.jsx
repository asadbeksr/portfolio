import styles from './style.module.scss';
import Link from 'next/link';
import { Container } from '@mui/material';
export function Footer() {
  return (
    <div>
      <div style={{ height: '100px' }}></div>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.box}>
            <nav className={styles.nav}>
              <ul className={styles.ul}>
                <li>
                  <Link href='/'>
                    <a>BEK.</a>
                  </Link>
                </li>
                <li>
                  <Link href='/works'>
                    <a>Works</a>
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
                <li>
                  <Link href='/contact'>
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
              <span>© 2023 BEK. All rights reserved.</span>
            </nav>
          </div>
        </Container>
      </footer>
    </div>
  );
}
