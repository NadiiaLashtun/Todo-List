import { Outlet } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div className='flex flex-col justify-between align-center min-h-screen'>
      <Header />
      <main className='flex-1 p-20 h-full'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
