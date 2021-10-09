import Header from '../components/Header';
import Footer from '../components/Footer';

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
  Wrapper.getInitialProps = Page.getInitialProps;
  return Wrapper;
};

export default MainLayout;
