import { Container } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import React from 'react'


export function Works() {
  const { t } = useTranslation('common');
  return (
    <main>
      <Container>
        <div>
          <h1>{t('works')}</h1>
        </div>
      </Container>
    </main>
  );
}
