import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import NavbarLogin from '../Navbar/NavbarLogin';
import style from './layoutMain.module.css';

const LayoutPage = ({ children }) => {
  if (localStorage.getItem('worker')) {
    return (
      <div className={style['main-wrapper']}>
        <NavbarLogin />
        <div className={`${style['content-wrapper']}`}>{children}</div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className={style['main-wrapper']}>
        <Navbar />
        <div className={`${style['content-wrapper']}`}>{children}</div>
        <Footer />
      </div>
    );
  }
};

export default LayoutPage;
