import React, { useEffect } from 'react';
//import { Container } from 'reactstrap';
const Welcome = ({ history }) => {
  let token = localStorage.getItem('authUser');
  let baseDomain = localStorage.getItem('baseDomain');
  useEffect(() => {
    if (token) {
      history.push(`${baseDomain}/admin/orders`);
    } else {
      history.push('/login');
    }
  }, [token, baseDomain]);
  return (
    <div className='page-content'>
			Yow
    </div>
  );
};

export default Welcome;
