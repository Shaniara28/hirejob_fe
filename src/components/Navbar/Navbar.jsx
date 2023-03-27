import Image from 'next/image';
import Logo_Purple from '../../assets/image/Logo_Purple.png';
import style from '../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container py-2">
          <a className="navbar-brand" href="#">
            <Image src={Logo_Purple} alt="Logo" width="127" height="35" className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center px-md-50px" id="navbarNav">
            <button className={`btn me-4 ms-auto fw-bold ${style.btnWhite}`} type="button">
              Masuk
            </button>
            <button className={`btn fw-bold ${style.btnPurple}`} type="button">
              Daftar
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
