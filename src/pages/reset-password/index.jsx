import Image from 'next/image';
import Banner from '@/components/banner';
import styles from '../../styles/Auth.module.css';
import Logo_Purple from '../../assets/image/Logo_Purple.png';

const ResetPassword = () => {
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
            <p className={`${styles.mobileHeader} ${styles.par}`}>Enter your user accounts verified email address and we will send you a password reset link.</p>
            <h1>Reset Password</h1>
            <p>Enter your user accounts verified email address and we will send you a password reset link.</p>
            <div className="mt-5" />
            <form className={styles.form}>
              <label>Email</label>
              <input type="email" className="mb-3" placeholder="Masukan alamat email" required />
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

export default ResetPassword;
