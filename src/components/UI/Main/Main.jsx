import useTranslation from 'next-translate/useTranslation';

export function Main() {
  const { t } = useTranslation('common');

  return <main></main>;
}
