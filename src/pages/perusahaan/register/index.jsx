import Image from 'next/image';
import Link from 'next/link';
import Banner from '@/components/banner';
import styles from '../../../styles/Auth.module.css';
import Logo_Purple from '../../../assets/image/Logo_Purple.png';

const Register = () => {
  return (
    <div className={`${styles.containerRegister}`}>
      <div className="d-flex flex-row justify-content-center h-100">
        <div className={`${styles.banner}`}>
          <Banner />
        </div>
        <div className={styles.info}>
          <Image className={styles.mobileLogo} src={Logo_Purple} height={20} width={70} alt="logo peworld" />
          <h1 className={styles.mobileHeader}>Signup</h1>
          <p className={styles.mobileHeader}>Lorom ipsum dolor si amet uegas anet.</p>
          <h1 className="mt-4">Halo, Pewpeople</h1>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
          <form className={styles.form}>
            <label className="mt-3">Nama</label>
            <input type="text" className="mb-3" maxLength={50} placeholder="Masukan nama panjang" required />
            <label>Email</label>
            <input type="email" className="mb-3" maxLength={40} placeholder="Masukan alamat email" />
            <label>Perusahaan</label>
            <input type="text" className="mb-3" maxLength={50} placeholder="Masukan nama perusahaan" />
            <label>Jabatan</label>
            <input type="text" className="mb-3" maxLength={40} placeholder="Posisi di perusahaan Anda" />
            <label>No handphone</label>
            <input type="text" className="mb-3" maxLength={14} placeholder="Masukan no handphone" />
            <label>Kata Sandi</label>
            <input type="password" className="mb-3" placeholder="Masukan kata sandi" />
            <label>Konfirmasi Kata Sandi</label>
            <input type="password" className="mb-3" placeholder="Masukan konfirmasi kata sandi" />
            <button type="submit" className={`btn btn-primary mt-4 ${styles.submit}`}>
              Daftar
            </button>
            <p className="text-center mt-3">
              Anda sudah punya akun?{' '}
              <Link className={styles.register} href="/login">
                Masuk disini
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
