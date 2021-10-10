// apply stylesheets globally
import 'bulma/css/bulma.min.css';
import '../styles/globals.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import MainLayout from '../layouts/MainLayout';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
};

// wrap MyApp in MainLayout so it applies to every page automatically
export default MainLayout(MyApp);
