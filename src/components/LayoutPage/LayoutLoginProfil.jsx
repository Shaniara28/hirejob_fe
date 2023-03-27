import React from 'react';
import Footer from '../Footer/Footer';
import style from './layoutMain.module.css';
import NavbarHome from '../Navbar/NavbarHome';

const LayoutLoginProfile = ({ children }) => {
  return (
    <div className={style['main-wrapper']}>
      <NavbarHome />
      <div className={`${style['content-wrapper']}`}>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutLoginProfile;
