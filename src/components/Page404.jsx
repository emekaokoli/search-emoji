import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => (
  <>
    <h3>page not found</h3>
    <Link to='/emoji' style={{ textDecoration: 'none', color: 'black' }}>
      go back.
    </Link>
  </>
);
export default Page404;
