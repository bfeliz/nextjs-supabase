import { useState } from 'react';
import Link from 'next/link';
import RegisterModal from './user/RegisterModal';

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const modalOpen = (type) => {
    if (type === 'register') {
      setRegisterOpen(!registerOpen);
    }
  };

  return (
    <header className='is-fixed-top'>
      <nav
        className='navbar is-navbar'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-brand'>
          <Link className='navbar-item' href='/'>
            <a>
              <span className='is-size-2 is-size-3-mobile has-text-weight-medium ml-2 is-brand'>
                Website Demo
              </span>
            </a>
          </Link>

          <a
            role='button'
            className={'navbar-burger' + (hamburgerOpen ? ' is-active' : '')}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarMenu'
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div
          id='navbarMenu'
          className={'navbar-menu' + (hamburgerOpen ? ' is-active' : '')}
        >
          <div className='navbar-start ml-2'>
            <Link href={'/'}>
              <a className='navbar-item is-size-4 is-tab'>Home</a>
            </Link>
            <Link href={'/form'}>
              <a className='navbar-item is-size-4 is-tab'>Form</a>
            </Link>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <a className='button' onClick={() => modalOpen('register')}>
                  <strong>Sign up</strong>
                </a>
                <a className='button is-light'>Log in</a>
              </div>
            </div>
          </div>
        </div>
        {registerOpen ? (
          <RegisterModal registerOpen setRegisterOpen={setRegisterOpen} />
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
