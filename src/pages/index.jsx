import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import NavbarHome from '@/components/Navbar/NavbarHome';
import NavbarLogin from '@/components/Navbar/NavbarLogin';
import style from '../styles/Landing.module.css';
import img1 from '../assets/image/img1.png';
import img2 from '../assets/image/img2.png';
import img3 from '../assets/image/img3.png';
import SlideCard from '@/components/SlideCard/SlideCard';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import LayoutPage from '@/components/LayoutPage/LayoutPage';

const Landing = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <>
      <NavbarLogin />

      <div className={`container ${style.landing}`}>
        <section>
          <div className="row mx-2">
            <div className="col-md-5 d-flex justify-content-center align-items-center" data-aos="fade-right">
              <div className="description">
                <p className={`py-3 fs-1 fw-semibold ${style.PTLanding}`}>Talenta terbaik negri untuk perubahan revolusi 4.0</p>
                <p className={`pb-4 fs-6 text-secondary ${style.PLanding}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <button className={`p-3 rounded fw-semibold ${style.buttonPurple}`}>Mulai Dari Sekarang</button>
              </div>
            </div>
            <div className={`offset-1 col-6 d-md-flex justify-content-center align-items-center d-sm-none d-none py-5`} data-aos="fade-left">
              <div className={style.imgWrap}>
                <div className={style.boxGrayS1}></div>
                <Image className={`img-fluid ${style.image1}`} src={img1}></Image>
                <div className={style.boxPurpleS1}></div>
                <div className={style.boxYellowS1}></div>
              </div>
            </div>
          </div>
        </section>

        <section className={`my-5`}>
          <div className="row mx-2">
            <div className={`col-6 d-md-flex justify-content-center align-items-center d-sm-none d-none py-5`} data-aos="fade-right">
              <div className={style.imgWrap2}>
                <div className={style.boxGrayS2}></div>
                <Image className={`img-fluid ${style.image1}`} src={img2}></Image>
                <div className={style.boxPurpleS2}></div>
              </div>
            </div>
            <div className="offset-md-1 col-md-5 d-flex justify-content-center align-items-center" data-aos="fade-left">
              <div className="description">
                <p className={`py-3 fs-2 fw-semibold ${style.PTLanding}`}>Kenapa harus mencari tallent di peworld</p>
                <div className="row">
                  <div className="col-12">
                    <div>
                      <i className={`bi bi-check-circle-fill fst-normal ${style.iconPurple}`}>
                        <span className="ms-3 text-dark">Lorem ipsum dolor sit amet.</span>
                      </i>
                    </div>
                    <div className="mt-3">
                      <i className={`bi bi-check-circle-fill fst-normal ${style.iconPurple}`}>
                        <span className="ms-3 text-dark">Lorem ipsum dolor sit amet.</span>
                      </i>
                    </div>
                    <div className="mt-3">
                      <i className={`bi bi-check-circle-fill fst-normal ${style.iconPurple}`}>
                        <span className="ms-3 text-dark">Lorem ipsum dolor sit amet.</span>
                      </i>
                    </div>
                    <div className="mt-3">
                      <i className={`bi bi-check-circle-fill fst-normal ${style.iconPurple}`}>
                        <span className="ms-3 text-dark">Lorem ipsum dolor sit amet.</span>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`mb-5`}>
          <div className="row mx-2">
            <div className="col-md-5 d-flex justify-content-center align-items-center" data-aos="fade-right">
              <div className="description">
                <p className={`py-2 fs-2 fw-semibold ${style.PTLanding}`}>Skill Talent</p>
                <p className={`pb-4 fs-6 text-secondary ${style.PLanding}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <div className="row">
                  <div className="col-6">
                    <div>
                      <i className={`bi bi-check-circle-fill fst-normal ${style.iconYellow}`}>
                        <span className="ms-3 text-dark">Java</span>
                      </i>
                    </div>
                    <div className="mt-3">
                      <i className={`bi bi-check-circle-fill fst-normal ${style.iconYellow}`}>
                        <span className="ms-3 text-dark">Kotlin</span>
                      </i>
                    </div>
                    <div className="mt-3">
                      <i className={`bi bi-check-circle-fill fst-normal ${style.iconYellow}`}>
                        <span className="ms-3 text-dark">PHP</span>
                      </i>
                    </div>
                    <div className="mt-3">
                      <i className={`bi bi-check-circle-fill fst-normal ${style.iconYellow}`}>
                        <span className="ms-3 text-dark">Javacript</span>
                      </i>
                    </div>
                  </div>
                  <div className="col-6">
                    <div>
                      <i className={`bi bi-check-circle-fill fst-normal ${style.iconYellow}`}>
                        <span className="ms-3 text-dark">Golang</span>
                      </i>
                    </div>
                    <div className="mt-3">
                      <i className={`bi bi-check-circle-fill fst-normal ${style.iconYellow}`}>
                        <span className="ms-3 text-dark">C++</span>
                      </i>
                    </div>
                    <div className="mt-3">
                      <i className={`bi bi-check-circle-fill fst-normal ${style.iconYellow}`}>
                        <span className="ms-3 text-dark">Ruby</span>
                      </i>
                    </div>
                    <div className="mt-3">
                      <i className={`bi bi-check-circle-fill fst-normal ${style.iconYellow}`}>
                        <span className="ms-3 text-dark">dll</span>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-6 offset-md-1 d-md-flex justify-content-center align-items-center d-sm-none d-none py-5`} data-aos="fade-left">
              <div className={style.imgWrap2}>
                <div className={style.boxGrayS3}></div>
                <Image className={`img-fluid ${style.image1}`} src={img3}></Image>
                <div className={style.boxPurpleS3}></div>
              </div>
            </div>
          </div>
        </section>

        <section className={`my-5`}>
          <div className="wrap" data-Aos="zoom-in">
            <div className="row">
              <div className="col-12">
                <div className={style.fill}>
                  <div className="row p-5 d-flex align-items-center justify-content-between">
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                      <p className="fs-3 text-white fw-semibold">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                      <button className={`p-3 rounded fw-semibold ${style.buttonWhite}`}>Mulai Dari Sekarang</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="row my-5 mx-5">
          <h1 className="text-center fw-semibold mb-5">Their opinion about peworld</h1>
          <div className="col-lg-12 col-md-12 col-12 text-center shadow p-3 mb-5 .bg-body-secondary">
            <SlideCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
