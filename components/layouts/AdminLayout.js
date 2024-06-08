// components/layouts/AdminLayout.js
const AdminLayout = ({ children }) => (
    <div>
      <header>Admin Header</header>
      <main>{children}</main>
      <footer>Admin Footer</footer>
    </div>
  );
  
  export default AdminLayout;
  