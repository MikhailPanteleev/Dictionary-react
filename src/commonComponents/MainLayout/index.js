import Header from '../Header';
import Footer from '../Footer';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);

export default MainLayout;
