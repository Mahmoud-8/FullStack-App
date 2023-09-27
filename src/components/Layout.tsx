import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header title="WEBROAD" />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
