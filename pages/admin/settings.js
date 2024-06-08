// pages/user/dashboard.js
import withAuth from '../../utils/withAuth';
import AdminLayout from '../../components/layouts/AdminLayout';

const AdminSettings= ({ user }) => {
  return <div>Welcome, {user.name} to User Dashboard</div>;
};

export default withAuth(AdminSettings, 'user', AdminLayout);
