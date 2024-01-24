import React from 'react';
import notFound from '../assets/img/404.svg';

const NotFound = () => {
  return (
    <>
      <div className="total-notfount">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="wrapper-notfound">
          <img style={{ width: '40%' }} src={notFound} alt="" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
