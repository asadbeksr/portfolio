import { Container } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';

export function Contact() {
  const { t } = useTranslation('common');
  return (
    <main>
      <Container>
        <div>
          <h1>{t('contact')}</h1>
        </div>
      </Container>
    </main>
  );
}
