function UserDashboard({ user }) {
  return (
    <div>
      <h1>User Dashboard</h1>
      {user && <p>Welcome</p>}
    </div>
  );
}
UserDashboard.layout = 'Main'
export default UserDashboard;
