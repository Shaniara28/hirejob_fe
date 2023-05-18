import Image from 'next/image';
import Link from 'next/link';
import Banner from '../../../components/banner';
import styles from '../../../styles/Auth.module.css';
import Logo_Purple from '../../../assets/image/Logo_Purple.png';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

const RegisterPekerja = () => {
  const router = useRouter();
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  function checkPasswordMatch(password) {
    if (password != passwordConfirm) {
      throw Swal.fireSwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password not match!',
      });
    }

    return password;
  }

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const passwordValidated = await checkPasswordMatch(data.password);
      axios
        .post('http://localhost:4000/workers/register', { ...data, password: passwordValidated })
        .then((response) => {
          Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(response);
          router.push('/pekerja/login');
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

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
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className="mt-3">Nama</label>
            <input type="text" name="name" value={data.name} onChange={(e) => changeHandler(e)} className="mb-3" maxLength={50} placeholder="Masukan nama panjang" required />
            <label>Email</label>
            <input type="email" name="email" value={data.email} onChange={(e) => changeHandler(e)} className="mb-3" maxLength={40} placeholder="Masukan alamat email" />
            <label>No handphone</label>
            <input type="text" name="phone" value={data.phone} onChange={(e) => changeHandler(e)} className="mb-3" maxLength={14} placeholder="Masukan no handphone" />
            <label>Kata Sandi</label>
            <input type="password" name="password" value={data.password} onChange={(e) => changeHandler(e)} className="mb-3" placeholder="Masukan kata sandi" />
            <label>Konfirmasi Kata Sandi</label>
            <input type="password" name="confirmPassword" onChange={(e) => setPasswordConfirm(e.target.value)} className="mb-3" placeholder="Masukan konfirmasi kata sandi" />
            <button type="submit" className={`btn btn-primary mt-4 ${styles.submit}`}>
              Daftar
            </button>
            <p className="text-center mt-3">
              Anda sudah punya akun?{' '}
              <Link className={styles.register} href="/pekerja/login">
                Masuk disini
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPekerja;
