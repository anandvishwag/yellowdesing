// utils/withGuest.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';

const withGuest = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = jwt.decode(token);
        if (decodedToken.role === 'admin') {
          router.push('/admin/dashboard');
        } else {
          router.push('/user/dashboard');
        }
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withGuest;
