import styles from '../styles/Banner.module.css';
import Image from 'next/image';
import Vector41 from '../assets/image/Vector 41.png';
import Vector42 from '../assets/image/Vector 42.png';
import LogoWhite from '../assets/image/Logo_White.png';

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className="d-flex flex-row justify-content-between h-100 w-100">
        {/* <div className={styles.vector2}>
          <Image src={Vector41} fill style={{ objectFit: 'contain' }} alt="vector41" />
        </div> */}
        <div className={styles.logo}>
          <Image src={LogoWhite} height={20} width={70} alt="logo peworld" />
        </div>
        <div className={styles.text}>Temukan developer berbakat & terbaik di berbagai bidang keahlian</div>
        {/* <div className={styles.vector1}>
          <Image src={Vector42} fill style={{ objectFit: 'contain' }} alt="vector42" />
        </div> */}
      </div>
    </div>
  );
};
export default Banner;
