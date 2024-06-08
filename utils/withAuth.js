// utils/withAuth.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';

const withAuth = (WrappedComponent, requiredRole) => {
  return (props) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      } else {
        const user = jwt.decode(token);
        if (user.role !== requiredRole) {
          router.push('/user/dashboard');
        } else {
          setUser(user);
        }
      }
    }, []);

    if (!user) {
      return null; // Optionally, render a loading spinner or placeholder here
    }

    return <WrappedComponent user={user} {...props} />;
  };
};

export default withAuth;
