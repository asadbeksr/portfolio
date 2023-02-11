import { Container } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';

export function Blog() {
  const { t } = useTranslation('common');
  return (
    <main>
      <Container>
        <div>
          <h1>{t('blog')}</h1>
        </div>
      </Container>
    </main>
  );
}
