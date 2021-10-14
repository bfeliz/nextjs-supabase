import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// set up footer component
const Footer = () => {
  return (
    <footer className='footer is-footer has-text-centered' aria-label='Footer'>
      <div className='container'>
        <div className='columns is-vcentered'>
          <div className='column'>
            <span className='is-size-7-mobile'>Brittany Crosthwait © 2021</span>
            <span>
              <a
                href='https://github.com/bfeliz'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='icon is-medium is-size-7-mobile is-social-icon'>
                  <FontAwesomeIcon icon={faGithub} size='lg' />
                </span>
              </a>
              <a
                href='https://www.linkedin.com/in/brittany-crosthwait/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='icon is-medium is-size-7-mobile is-social-icon'>
                  <FontAwesomeIcon icon={faLinkedin} size='lg' />
                </span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
