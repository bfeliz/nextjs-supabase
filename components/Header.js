import { useEffect, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { useAuth } from '../utils/auth/useAuth';
import UserModal from './user/UserModal';

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const { user, signOut } = useAuth();

  useEffect(() => {
    setModalOpen(false);
  }, [user]);

  const modalStatus = (type) => {
    modalOpen ? setModalType('') : setModalType(type);
    setModalOpen(!modalOpen);
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
                {user ? (
                  <>
                    <a
                      className='button'
                      onClick={() => Router.push('/profile')}
                    >
                      <strong>Profile</strong>
                    </a>
                    <a className='button is-light' onClick={() => signOut()}>
                      <strong>Log Out</strong>
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      className='button'
                      onClick={() => modalStatus('register')}
                    >
                      <strong>Sign up</strong>
                    </a>
                    <a
                      className='button is-light'
                      onClick={() => modalStatus('login')}
                    >
                      Log in
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {modalOpen ? (
          <UserModal
            modalOpen
            setModalOpen={setModalOpen}
            modalType={modalType}
          />
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
