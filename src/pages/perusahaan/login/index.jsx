import Image from 'next/image';
import Link from 'next/link';
import Banner from '@/components/banner';
import styles from '../../styles/auth.module.css';
import Logo_Purple from '../../assets/image/Logo_Purple.png';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await axios.post('http://localhost:3020/login', { email, password});

  //   localStorage.setItem('user', 'user');

  //   if (localStorage.getItem('user')) {

  //       alert('success')
  //       router.push('/')
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`http://localhost:4000/workers/login`, { email, password });
    // console.log(response);
    // console.log(response.data.data.token);

    try {
      if (response.data.status === 'success') {
        Swal.fire({
          title: response.data.message,
          icon: 'success',
        });
        const token = response.data.data.token;
        const id = response.data.data.id_worker;
        const role = response.data.data.role;
        // const image = response.data.data.image;

        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        localStorage.setItem('role', role);
        // localStorage.setItem('image', image);

        router.push('/');
      } else {
        Swal.fire({
          title: response.data.message,
          icon: 'error',
        });
      }
    } catch (error) {
      Swal.fire({
        title: error,
        icon: 'error',
      });
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className="d-flex flex-row justify-content-center align-items-center h-100">
          <div className={`${styles.banner}`}>
            <Banner />
          </div>
          <div className={styles.info}>
            <Image className={styles.mobileLogo} src={Logo_Purple} height={20} width={70} alt="logo peworld" />
            <h1 className={styles.mobileHeader}>Login</h1>
            <p className={`${styles.mobileHeader} ${styles.par}`}>Lorom ipsum dolor si amet uegas anet.</p>
            <h1>Halo, Pewpeople</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            <div className="mt-5" />
            <form className={styles.form} onSubmit={handleSubmit}>
              <label>Email</label>
              <input type="email" className="mb-3" placeholder="Masukan alamat email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label>Kata Sandi</label>
              <input type="password" className="mb-3" placeholder="Masukan kata sandi" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <Link href={'/reset-password'} className={styles.forgot}>
                Lupa kata sandi?
              </Link>
              <button type="submit" className={`btn btn-primary mt-2 ${styles.submit}`}>
                Masuk
              </button>
              <p className="text-center mt-4">
                Anda belum punya akun?{' '}
                <Link className={styles.register} href="/register">
                  Daftar disini
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
