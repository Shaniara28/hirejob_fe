import Image from 'next/image';
import Banner from '@/components/banner';
import styles from '../../styles/Auth.module.css';
import Logo_Purple from '../../assets/image/Logo_Purple.png';

const ConfirmPassword = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="d-flex flex-row justify-content-center align-items-center h-100">
          <div className={`${styles.banner}`}>
            <Banner />
          </div>
          <div className={styles.info}>
            <Image className={styles.mobileLogo} src={Logo_Purple} height={20} width={70} alt="logo peworld" />
            <h1 className={styles.mobileHeader}>Reset Password</h1>
            <p className={`${styles.mobileHeader} ${styles.par}`}>You need to change your password to activate your account</p>
            <h1>Reset Password</h1>
            <p>You need to change your password to activate your account</p>
            <div className="mt-5" />
            <form className={styles.form}>
              <label>Kata Sandi</label>
              <input type="password" className="mb-3" placeholder="Masukan kata sandi" />
              <label>Konfirmasi Kata Sandi Baru</label>
              <input type="password" className="mb-3" placeholder="Masukan konfirmasi kata sandi" />
              <button type="submit" className={`btn btn-primary mt-2 ${styles.submit}`}>
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmPassword;
