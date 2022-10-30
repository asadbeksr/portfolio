import { Container } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import styles from './style.module.scss'

export function About() {
  const { t } = useTranslation('about')
  return (
    <Container>
      <div className={styles.about}>
        <h1>{t('about')}</h1>
      </div>
    </Container>
  )
}
