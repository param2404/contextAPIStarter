import { Outlet } from 'react-router-dom';
import DashboardNavigation from './DashboardNavigation';
import Footer from './Footer';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <DashboardNavigation />
      <div style={{ marginTop: '100px' }}>
        {children || <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;