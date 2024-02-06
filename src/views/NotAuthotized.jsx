import React from 'react';
import notAuthorized from '../assets/img/401.jpg';

const NotFound = () => {
  return (
    <>
      <div className="total-notfount">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="wrapper-notfound">
          <img style={{ width: '85%' }} src={notAuthorized} alt="" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
