// apply stylesheets globally
import 'bulma/css/bulma.min.css';
import '../styles/globals.css';

import MainLayout from '../layouts/MainLayout';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
};

// wrap MyApp in MainLayout so it applies to every page automatically
export default MainLayout(MyApp);
