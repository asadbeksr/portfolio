import { Container } from '@mui/material';
import AText from '../Animated/Text';
import cls from './style.module.scss';

export function CommingSoon() {
  return (
    <Container>
      <div className={cls.wrapper}>
        <AText text='COMING SOON' variant='h1' dir='up' />
      </div>
    </Container>
  );
}
