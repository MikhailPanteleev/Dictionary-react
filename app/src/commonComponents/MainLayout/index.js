import Header from '../Header';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);

export default MainLayout;
