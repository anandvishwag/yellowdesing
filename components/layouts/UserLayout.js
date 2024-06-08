// components/layouts/UserLayout.js
const UserLayout = ({ children }) => (
    <div>
      <header>User Header</header>
      <main>{children}</main>
      <footer>User Footer</footer>
    </div>
  );
  
  export default UserLayout;
  