import React from 'react';
import Image from 'next/image';
import Logo_Purple from '../../assets/image/Logo_Purple.png';
import style from '../../styles/Navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const NavbarLogin = () => {
  const router = useRouter();

  const clearLocal = () => {
    localStorage.clear();
  };

  // const [item, setItem] = useState(['']);

  // useEffect(() => {
  //     const localLength = localStorage.getItem('user');
  //     setItem(localLength);

  // }, []);

  const [login, setLogin] = useState('');
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    setLogin(localStorage.getItem('token'));
    setProfile(localStorage.getItem('id'));
  });

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container py-2">
        <a className="navbar-brand" href="#">
          <Image src={Logo_Purple} alt="Logo" width="127" height="35" className="d-inline-block align-text-top" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center px-md-5" id="navbarNav">
          <Link className={`nav-link ms-lg-5 fw-semibold active fs-5 ${style.home}`} href="/home/csr">
            Home
          </Link>
          <button className={`btn fw-bold ms-auto ${style.btnPurple}`} type="button">
            Profile
          </button>
          <Link href={'/pekerja/login'} onClick={clearLocal}>
            <button className={`btn ms-4 fw-bold ${style.btnWhite}`} type="button">
              Logout
            </button>{' '}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLogin;
