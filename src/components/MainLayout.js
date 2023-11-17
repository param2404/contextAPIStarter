import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navigation';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '100px' }}>
        {children || <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;