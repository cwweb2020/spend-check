import React from 'react';
import house from '../assets/icons/house.svg';
import { useNavigate } from 'react-router-dom';
import person from '../assets/icons/person-svgrepo-com.svg';
import LanguageSelector from './material-icons/LanguageSelector';
import { useGetScreenWidth } from '../hooks/useGetScreenWidth';

const Header = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/');
  };
  //
  const screenWidth = useGetScreenWidth();

  const langTitle = screenWidth < 900 ? 'Lang' : 'Language';

  //

  return (
    <>
      <section style={screenWidth < 900 ? mobileStyleForHeader : {}} className="total-header">
        <div className="header-wrapper">
          <div onClick={redirectToHome} className="home">
            <img src={house} alt="" />
          </div>
          <div className="person">
            <LanguageSelector langTitle={langTitle} screenWidth={screenWidth} />
            <img
              //  style={{ width: "40px", height: "40px" }}
              src={person}
              alt=""
            />
            <h3>claudio</h3>/
            <h4 onClick={() => navigate('/')} style={exit}>
              Salir
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

const exit = {
  color: '#ff0000',
  cursor: 'pointer',
  fontSize: '1.06em',
};

var mobileStyleForHeader = {
  position: 'fixed',
  width: '100%',
  bottom: '0',
  background: 'lightblue',
  fontSize: '13px',
  zIndex: '100',
};

export default Header;
