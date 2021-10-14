import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthProvider } from '../utils/auth/authContext';

// set layout for every page, eliminating the need to import common components individually
// layout includes header, footer, and access auth context
const MainLayout = (Page) => {
  function Wrapper(props) {
    return (
      <div>
        <AuthProvider>
          <Header />
          <main className='main-content'>
            <Page {...props} />
          </main>
          <Footer />
        </AuthProvider>
      </div>
    );
  }

  // getInitialProps enables server-side rendering and allows initial data population; here matching page props to MainLayout props
  Wrapper.getInitialProps = Page.getInitialProps;
  return Wrapper;
};

export default MainLayout;
