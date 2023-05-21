import Image from 'next/image';
import Banner from '@/components/banner';
import styles from '../../styles/Auth.module.css';
import Logo_Purple from '../../assets/image/Logo_Purple.png';

const ConfirmPasswordLogin = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="d-flex flex-row justify-content-center align-items-center h-100">
          <div className={`${styles.banner}`}>
            <Banner />
          </div>
          <div className={styles.info}>
            <Image className={styles.mobileLogo} src={Logo_Purple} height={20} width={70} alt="logo peworld" />
            <h1 className={styles.mobileHeader}>Please login with your account</h1>
            <p className={`${styles.mobileHeader} ${styles.par}`}>We have an an email containing a password reset instruction toyour email. please check your email.</p>
            <h1>Please login with your account</h1>
            <p>We have an an email containing a password reset instruction toyour email. please check your email.</p>
            <div className="mt-5" />
            <form className={styles.form}>
              <label>Email</label>
              <input type="email" className="mb-3" placeholder="Masukan email" />
              <label>Kata Sandi</label>
              <input type="password" className="mb-3" placeholder="Masukan kata sandi" />
              <button type="submit" className={`btn btn-primary mt-2 ${styles.submit}`}>
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmPasswordLogin;
