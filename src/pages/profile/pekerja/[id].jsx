import LayoutLoginProfile from '@/Components/LayoutPage/LayoutLoginProfil';
import SectionPage from '@/Components/Section/LandingPage/SectionPage';
import Image from 'next/image';
import style from '../../../styles/Profile.module.css';
import img from '../../../assets/image/Profil.png';
import img1 from '../../../assets/image/porto-2.png';
import foto from '../../../assets/image/foto.png';
import MainProfile from '@/Components/LayoutProfile/MainProfile';
import LeftSide from '@/Components/LayoutProfile/LeftSide';
import RightSide from '@/Components/LayoutProfile/RightSide';
import Experience from '../../../assets/image/Vector.png';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { getDetailWorker } from '../../../redux/actions/workerAction';
import { getSkillByUser } from '../../../redux/actions/skillAction';
import { getPortofolioByUser } from '../../../redux/actions/portofolioAction';
import { getExperienceByUser } from '../../../redux/actions/experienceAction';

const Profile = () => {
  // const router = useRouter();
  // const { id } = router.query;

  // const [worker, setWorker] = useState([]);
  // const [skill, setSkill] = useState([]);
  // const [pengalaman, setPengalaman] = useState([]);
  // const [portofolio, setPortfolio] = useState([]);

  // const renderWorker = async () => {
  //   await axios
  //     .get(`${process.env.API_BACKEND}worker/${id}`)
  //     .then((response) => {
  //       setWorker(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   renderWorker();
  // }, [id]);

  // console.log(worker);
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.API_BACKEND}skill/?workerId=${id}`)
  //     .then((response) => {
  //       setSkill(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.API_BACKEND}portofolio/?workerId=${id}`)
  //     .then((response) => {
  //       setPortfolio(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.API_BACKEND}pengalaman_kerja/?workerId=${id}`)
  //     .then((response) => {
  //       setPengalaman(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);

  useEffect(() => {
    setUser(localStorage.getItem('id'));
  }, []);

  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const [worker, setWorker] = useState([{}]);
  const [skill, setSkill] = useState([{}]);
  const [portofolio, setPortofolio] = useState([{}]);
  const [experience, setExperience] = useState([{}]);
  const [user, setUser] = useState('');

  useEffect(() => {
    dispatch(getDetailWorker(setWorker, id));
    dispatch(getSkillByUser(setSkill, id));
    dispatch(getPortofolioByUser(setPortofolio, id));
    dispatch(getExperienceByUser(setExperience, id));
  }, [dispatch, id]);

  return (
    <LayoutLoginProfile id={id}>
      <div className={`${style.strapBrand} `}>
        <p className="container"></p>
      </div>
      <SectionPage embedSection={style.sectionProfile}>
        <MainProfile>
          <LeftSide>
            <div className="profileDesc">
              <div className={` mx-auto pb-4 pt-2 ${style.picture}`}>
                <Image src={foto} className="img-thumbnail rounded-circle"></Image>
              </div>
              <h5 className="fw-bolder">{worker?.name}</h5>
              <span className={style.work}>{worker?.jobdesk}</span>
              <p className={style.address}>
                <i class="bi bi-geo-alt" style={{ marginRight: '10px' }}></i>
                {worker?.address}
              </p>
              <span className={style.worker}>Freelance</span>
              <p className={style.bio}>{worker?.description}</p>
              <div className="hireButton d-grid">
                {user === id ? (
                  <Link href={`/edit-profile/pekerja/${user}`}>
                    <button className={` w-100 btn ${style.btn}`}> Edit Profile </button>
                  </Link>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="skills pt-5">
              <h5 className="fw-bolder">Skills</h5>
              <div className="listSkills">
                {skill?.map((item) => (
                  <>
                    <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>{item.name}</p>
                    {/* <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>C++</p>
                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Python</p>
                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Golang</p>
                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Java</p>
                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Kotlin</p>
                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>HTML</p>
                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>CSS</p>
                <p className={`text-wrap btn me-2 mb-2 ${style.skills}`}>Laravel</p> */}
                  </>
                ))}
              </div>
            </div>
            <div className="contact">
              <h5 className="fw-bolder pt-5 pb-2">Contact</h5>
              <p>
                <i class="bi bi-envelope pe-2"></i> {worker?.email}
              </p>
              <p>
                <i class="bi bi-instagram pe-2"></i> @Shaniaa_ra
              </p>
              <p>
                <i class="bi bi-github pe-3"></i>Shaniara28
              </p>
              <p>
                <i class="bi bi-linkedin pe-2"></i> Shania Risky Agustin
              </p>
            </div>
          </LeftSide>

          <RightSide>
            <ul className="nav nav-pills mb-3 justify-content-start" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="navpills-home active pe-3 fw-semibold" id="pills-Customer-tab" data-bs-toggle="pill" data-bs-target="#pills-Customer" type="button" role="tab" aria-controls="pills-Customer" aria-selected="true">
                  Portofolio
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="navpills-home fw-semibold" id="pills-Seller-tab" data-bs-toggle="pill" data-bs-target="#pills-Seller" type="button" role="tab" aria-controls="pills-Seller" aria-selected="false">
                  Pengalaman Kerja
                </a>
              </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-Customer" role="tabpanel" aria-labelledby="pills-Customer-tab" tabindex="0">
                <div class="row g-2">
                  {portofolio?.map((porto) => (
                    <div class="col-12 col-md-6 col-lg-4 text-center">
                      <div class="p-3 border bg-light">
                        <Image src={porto.photo} width={100} height={150} className={style.img} />
                        <p>{porto.name}</p>
                      </div>
                    </div>
                  ))}
                  {/* <div class="col-12 col-md-6 col-lg-4 text-center">
                    <div class="p-3 border bg-light">
                      <Image src={img1} className={style.img} />
                      <p>Project management web</p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4 text-center">
                    <div class="p-3 border bg-light">
                      <Image src={img1} className={style.img} />
                      <p>Project management web</p>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="tab-pane fade" id="pills-Seller" role="tabpanel" aria-labelledby="pills-Seller-tab" tabindex="0">
                <div class="row jusitfy-content-center">
                  <div class="col-12 text-center">
                    {experience?.map((pk) => (
                      <div className={`${style.rowExperience} row `}>
                        <div className="col-2">
                          <Image className="img-fluid" width={50} height={50} src={pk.photo}></Image>
                        </div>
                        <div className="col-9 text-start">
                          <p className="fw-bolder">{pk.job_desk}</p>
                          <p className>{pk.company_name}</p>
                          <p className="text-secondary mb-4">
                            {pk.date_start} - {pk.date_end}
                          </p>
                          <p className={style.exDescription}>{pk.description}</p>
                          <hr />
                        </div>
                      </div>
                    ))}
                    {/* <div className={`${style.rowExperience} row `}>
                      <div className="col-2">
                        <Image className="img-fluid" src={Experience}></Image>
                      </div>
                      <div className="col-9 text-start">
                        <p className="fw-bolder">Frontend Web Developer</p>
                        <p className>Blanja</p>
                        <p className="text-secondary mb-4">Febuary 2018 - January 2020</p>
                        <p className={style.exDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                        <hr />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </RightSide>
        </MainProfile>
      </SectionPage>
    </LayoutLoginProfile>
  );
};

export default Profile;
