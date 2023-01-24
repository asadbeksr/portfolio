import React, { useState, useEffect } from 'react';
import Hamburger from './Hamburger';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';

const MobileHeader = () => {
  const router = useRouter();

  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'MENU',
  });

  useEffect(() => {
    router.events.on('routeChangeStart', (url, { shallow }) => {
      setState({ clicked: false, menuName: 'Menu' });
    });
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ]);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close',
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu',
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close',
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <div className='mobile-header'>
      <Container>
      <header className='header'>
            <div className='inner-header'>
              <div className='logo'>
                <Link href='/'>
                  <a>BEK.</a>
                </Link>
              </div>
              <div className='menu'>
                <div className='logo'>
                  <a onClick={() => (!disabled ? handleMenu() : null)}>
                    {state.menuName}
                  </a>
                </div>
              </div>
            </div>
        <Hamburger state={state} />
      </header>
      </Container>
    </div>
  );
};

export default MobileHeader;
