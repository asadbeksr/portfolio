import Image from 'next/image'
import styles from './style.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { Button } from '@mui/material'
import { createPost, getPosts } from 'services'
import { useEffect, useState } from 'react'
import { Counter } from '../Counter/Counter'
import classNames from 'classnames'
export function Main() {
  const { t } = useTranslation('common')
  
  return (
    <main
      className={classNames(styles.main, {
        [styles.active]: true
      })}
    >
    </main>
  )
}
