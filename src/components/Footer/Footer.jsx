import style from '../../styles/Footer.module.css';
import Image from 'next/image';
import Logo_White from '../../assets/image/Logo_White.png';

const Footer = () => {
  return (
    <>
      <div className={`container-fluid pb-2 ${style.footer}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div className={style.topFooter}>
                <Image src={Logo_White} alt="Logo" width="178" height="50" class="" />
                <p className={`py-3 ${style.PFooter}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
              </div>
            </div>
          </div>
          <div className={style.hr}></div>
          <div className={style.bottomFooter}>
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-md-6">
                <p className={`${style.PFooter}`}>2020 Pewworld. All right reserved</p>
              </div>
              <div className="col-lg-1 col-md-1 offset-lg-5 offset-md-1">
                <p className={`${style.PFooter}`}>Telepon</p>
              </div>
              <div className="col-lg-1 col-md-1 offset-lg-1 offset-md-1">
                <p className={`${style.PFooter}`}>Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
