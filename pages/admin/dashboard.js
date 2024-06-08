function AdminDashboard({ user }) {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      {user && <p>Welcome</p>}
    </div>
  );
}
AdminDashboard.layout = 'Main'
export default AdminDashboard;
