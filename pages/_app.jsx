import 'bulma/css/bulma.min.css';
import '../styles/globals.css';
import MainLayout from '../layouts/MainLayout';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
};

export default MainLayout(MyApp);
