import { Outlet } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Header />
      <main className='flex-1 flex items-center p-20'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
