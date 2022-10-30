import { Container } from '@mui/material'
import Link from 'next/link'
import styles from './style.module.scss'

export function BlogList() {
  return (
    <Container>
      <div className={styles.blog}>
        <Link href='/blog/1'>
          <a>Blog1</a>
        </Link>
        <Link href='/blog2'>
          <a>Blog2</a>
        </Link>
      </div>
    </Container>
  )
}
