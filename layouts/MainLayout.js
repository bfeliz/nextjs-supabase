import Header from '../components/Header';
import Footer from '../components/Footer';

// set layout for every page, eliminating the need to import common components individually
const MainLayout = (Page) => {
  function Wrapper(props) {
    return (
      <div>
        <Header />
        <main className='main-content'>
          <Page {...props} />
        </main>
        <Footer />
      </div>
    );
  }

  // getInitialProps enables server-side rendering and allows initial data population; here matching page props to MainLayout props
  Wrapper.getInitialProps = Page.getInitialProps;
  return Wrapper;
};

export default MainLayout;
