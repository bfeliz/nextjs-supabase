import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className='is-fixed-top'>
      <div className='container'>
        <div className='columns is-vcentered'>
          <div className='column'>
            <h1 className='title is-1'>Website Demo</h1>
          </div>
          <div className='column has-text-right'>
            <a
              href='https://github.com/bfeliz'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='icon is-large is-social-icon'>
                <FontAwesomeIcon icon={faGithub} size='2x' />
              </span>
            </a>
            <a
              href='https://www.linkedin.com/in/brittany-crosthwait/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='icon is-large is-social-icon'>
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
