import React from 'react';
import Image from 'next/image';
import Logo_Purple from '../../assets/image/Logo_Purple.png';
import Profile from '../../assets/image/foto.png';
import style from '../../styles/Navbar.module.css';
import Link from 'next/link';

const NavbarHome = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image src={Logo_Purple} alt="Logo" width="127" height="35" className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex flex-row justify-content-center">
              <li className="nav-item ms-5 my-auto">
                <i className={`bi bi-bell ${style.icon}`}></i>
              </li>
              <li className="nav-item ms-5 my-auto">
                <i className={`bi bi-envelope ${style.icon}`}></i>
              </li>
              <li className="nav-item ms-5 my-auto">
                <Link className="nav-link" href="/profile">
                  <Image src={Profile} alt="Logo" width="40" height="40" className="rounded-circle" />
                </Link>
              </li>
            </ul>
            <button className={`btn ms-5 fw-bold my-md-2 ${style.btnPurple}`} type="button">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarHome;
