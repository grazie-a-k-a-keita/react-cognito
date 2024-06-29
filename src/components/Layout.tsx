import { Outlet } from 'react-router-dom';
import { Toaster } from './ui/toaster';

const Layout = () => (
  <main className='h-screen bg-muted'>
    <Outlet />
    <Toaster />
  </main>
);

export default Layout;
