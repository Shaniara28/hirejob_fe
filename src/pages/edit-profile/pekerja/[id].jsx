import LayoutLoginProfile from '../../../components/LayoutPage/LayoutLoginProfil';
import SectionPage from '../../../components/Section/LandingPage/SectionPage';
import style from '../../../styles/EditProfile.module.css';
import React from 'react';
import Image from 'next/image';
import img from '../../../assets/image/Profil.png';
import foto from '../../../assets/image/foto.png';
import InputFormEdit from '../../../components/Form/InputFormEdit/index';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { getDetailWorker } from '../../../redux/actions/workerAction';
import { useDispatch } from 'react-redux';
import { updateWorker } from '../../../redux/actions/workerAction';
import { createSkill } from '../../../redux/actions//skillAction';
import { ToastContainer, toast } from 'react-toastify';

const EditProfile = () => {
  // const [isShow, setIsShow] = useState(false)
  const router = useRouter();
  const { id } = router.query;
  // console.log(id);

  const dispatch = useDispatch();
  const [worker, setWorker] = useState([]);
  const [skill, setSkill] = useState([]);
  const [portofolio, setPortofolio] = useState({
    name: '',
    repository: '',
    type: '',
    photo: '',
  });
  const [experience, setExperience] = useState({
    job_desk: '',
    company_name: '',
    date_start: '',
    date_end: '',
    description: '',
    photo: '',
  });
  console.log(experience);

  useEffect(() => {
    dispatch(getDetailWorker(setWorker, id));
  }, [dispatch, id]);

  const handleChange = (e) => {
    setWorker({
      ...worker,
      [e.target.name]: e.target.value,
    });
  };

  // const handleChangeSkill = (e) => {
  //     setSkill({
  //         ...worker,
  //         [e.target.name]: e.target.value,
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(worker);
    dispatch(updateWorker(worker, id));
  };

  const handleSkill = async (e) => {
    e.preventDefault();
    dispatch(createSkill(skill, id));
  };

  // useEffect(() => {
  //     axios
  //         .get(`http://localhost:3020/worker/${id}`)
  //         .then((response) => {
  //             setData(response.data);
  //         })
  //         .catch((error) => {
  //             console.log(error);
  //         });
  // }, [id]);

  const changeExperience = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const changePhotoExpe = (e) => {
    setExperience((prev) => {
      return {
        ...prev,
        photo: e.target.files[0],
      };
    });
  };

  const changePortofolio = (e) => {
    setPortofolio({
      ...portofolio,
      [e.target.name]: e.target.value,
    });
  };

  const changePhotoPorto = (e) => {
    setPortofolio((prev) => {
      return {
        ...prev,
        photo: e.target.files[0],
      };
    });
  };

  const handlePortofolio = async (e) => {
    e.preventDefault();
    // console.log(portfolio);

    if (!portofolio) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please input your portofolio!',
      });
    } else {
      const formData = new FormData();

      for (let attr in portofolio) {
        formData.append(attr, portofolio[attr]);
      }
      const result = await axios
        .post(`${process.env.API_BACKEND}portofolio/add/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
        });
      // console.log(result);
    }
  };

  // const handleSkill = async e => {
  //     e.preventDefault();

  //     if (!skill) {
  //         toast.warn('Please input your data!', {
  //             position: "top-center",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //             });
  //     } else {
  //         // console.log(skill);
  //         const result = await axios.post(`http://localhost:4000/skills/addskills/${id}`, {name: skill})
  //             .then(res => {
  //                 console.log(res.data)
  //                 toast.success('Your data has been updated!', {
  //                     position: "top-center",
  //                     autoClose: 2000,
  //                     hideProgressBar: false,
  //                     closeOnClick: true,
  //                     pauseOnHover: true,
  //                     draggable: true,
  //                     progress: undefined,
  //                     theme: "light",
  //                     });

  //                     return res.data
  //             })
  //         // console.log(result);
  //     }
  // };

  const handleExperience = async (e) => {
    e.preventDefault();

    if (!experience) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please input your experience!',
      });
    } else {
      const formData = new FormData();

      for (let attr in experience) {
        formData.append(attr, experience[attr]);
      }
      const result = await axios
        .post(`${process.env.API_BACKEND}experience/add/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          // console.log(res.data)
          Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
        });
      // console.log(result);
    }
  };

  return (
    <LayoutLoginProfile>
      <ToastContainer />
      <div className={`${style.strapBrand} `}>
        <p className="container"></p>
      </div>
      <SectionPage embedSection={style.sectionProfile}>
        <div className="row justify-content-between">
          <div className={`col-10 col-md-3 ${style.left} sticky-md-top`}>
            <div className={`row`}>
              <div className={`col-12 ${style.rowOneLeft}`}>
                <div className="profileDesc">
                  <div className={` mx-auto pb-4 pt-2 ${style.picture}`}>
                    <Image src={foto} className="img-thumbnail rounded-circle"></Image>
                  </div>
                  <h5 className="fw-bolder">{worker?.name}</h5>
                  <span className={style.work}>{worker?.jobdesk}</span>
                  <p className={style.address}>
                    <i class="bi bi-geo-alt" style={{ marginRight: '10px' }}></i> {worker?.address}
                  </p>
                  <span className={style.worker}>Freelancer</span>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className={`d-grid col-12 ${style.rowTwoLeft}`}>
                <button className={`btn fw-semibold mb-2 ${style.btn}`} onClick={handleSubmit}>
                  Simpan
                </button>
                <button className={`btn fw-semibold ${style.btn}`}>Batal</button>
              </div>
            </div>
          </div>
          <div className={`col-8 col-md-8 ${style.right}`}>
            <div className="row">
              <div className={`col-12`}>
                <div className={`row inputEdit justify-content-center mb-5 ${style.themeRow} ${style.rowOneRight}`}>
                  <div className="col-11">
                    <h3 className="pt-4">Data Diri</h3>
                    <hr className={style.hr} />
                    <InputFormEdit type={'text'} title={'Nama Lengkap'} name={'name'} placeholder={'Masukan nama lengkap'} value={worker?.name} onchange={handleChange} />
                    <InputFormEdit type={'text'} title={'Job Desk'} name={'jobdesk'} placeholder={'Masukan nama lengkap'} value={worker?.jobdesk} onchange={handleChange} />
                    <InputFormEdit type={'text'} title={'Domisili'} name={'address'} placeholder={'Masukan nama lengkap'} value={worker?.address} onchange={handleChange} />
                    <InputFormEdit type={'text'} title={'Tempat Kerja'} name={'workplace'} placeholder={'Masukan nama lengkap'} value={worker?.workplace} onchange={handleChange} />
                    <InputFormEdit type={'textarea'} title={'Deskripsi'} name={'description'} placeholder={'Masukan nama lengkap'} value={worker?.description} onchange={handleChange} />
                  </div>
                </div>
                <div className={`row inputEdit justify-content-center mb-5 ${style.themeRow} ${style.rowOneRight}`}>
                  <div className="col-11">
                    <h3 className="pt-4">Skill</h3>
                    <hr className={style.hr} />
                    <div className="row">
                      <div className="col-9 col-md-10">
                        <InputFormEdit type={'no-title'} name={'skill'} placeholder={'Ex: Java'} onchange={(e) => setSkill(e.target.value)} />
                      </div>
                      <div className="col-3 col-md-2 d-grid align-items-center">
                        <button className="btn btn-warning fw-semibold text-white" style={{ height: '50px' }} onClick={handleSkill}>
                          Simpan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`row inputEdit justify-content-center mb-5 ${style.themeRow} ${style.rowOneRight}`}>
                  <div className="col-11 mb-5">
                    <h3 className="pt-4">Pengalaman Kerja</h3>
                    <hr className={style.hr} />
                    <form onSubmit={handleExperience}>
                      <InputFormEdit type={'text'} title={'Posisi'} name={'job_desk'} placeholder={'Masukan posisi'} value={experience.job_desk} onchange={changeExperience} />
                      <InputFormEdit type={'text'} title={'Nama Perusahaan'} name={'company_name'} placeholder={'Masukan nama perusahaan'} value={experience.company_name} onchange={changeExperience} />
                      <div className="row" style={{ marginTop: '-20px', marginBottom: '-20px' }}>
                        <div className="col">
                          <InputFormEdit type={'text'} title={'tanggal Masuk'} name={'date_start'} placeholder={'Masukan tanggal masuk'} value={experience.date_start} onchange={changeExperience} />
                        </div>
                        <div className="col">
                          <InputFormEdit type={'text'} title={'tanggal Keluar'} name={'date_end'} placeholder={'Masukan tanggal keluar'} value={experience.date_end} onchange={changeExperience} />
                        </div>
                      </div>
                      <InputFormEdit type={'file'} title={'Photo'} name={'photo'} placeholder={'Masukan photo'} onchange={changePhotoExpe} />
                      <InputFormEdit type={'textarea'} title={'Deskripsi'} name={'description'} placeholder={'Masukan deskripsi'} value={experience.description} onchange={changeExperience} />
                      <hr />
                      <div className="button d-grid">
                        <button className="btn btn-white btn-outline-warning d-grid fw-bolder" type="submit" style={{ height: '50px', lineHeight: '36px' }}>
                          Tambah Pengalaman Kerja
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className={`row inputEdit justify-content-center mb-5 ${style.themeRow} ${style.rowOneRight}`}>
                  <div className="col-11 mb-5">
                    <h3 className="pt-4">Portofolio</h3>
                    <hr className={style.hr} />
                    <form onSubmit={handlePortofolio}>
                      <InputFormEdit type={'text'} title={'Nama Aplikasi'} name={'name'} value={portofolio.name} placeholder={'Masukan nama aplikasi'} onchange={changePortofolio} />
                      <InputFormEdit type={'text'} title={'Type Aplikasi'} name={'type'} value={portofolio.type} placeholder={'Masukan type aplikasi'} onchange={changePortofolio} />
                      <InputFormEdit type={'text'} title={'Link Aplikasi'} name={'repository'} value={portofolio.repository} placeholder={'Masukan link aplikasi'} onchange={changePortofolio} />
                      <InputFormEdit type={'file'} title={'Photo'} name={'photo'} placeholder={'Masukan photo aplikasi'} onchange={changePhotoPorto} />
                      <hr />
                      <div className="button d-grid">
                        <button type="submit" className="btn btn-white btn-outline-warning d-grid fw-bolder" style={{ height: '50px', lineHeight: '36px' }}>
                          Tambah portofolio
                        </button>
                      </div>
                    </form>

                    {/* <div className={`d-flex d-block ${style.areaRadio}`}>
                      <label className={`form-check-label ${style.radioLabel} d-flex align-items-center rounded border`} for="inlineRadio1">
                        <input className={`form-check-input ${style.radioInput}`} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <span>Aplikasi Mobile</span>
                      </label>
                      <label className={`form-check-label ${style.radioLabel} d-flex align-items-center rounded border`} for="inlineRadio2">
                        <input className={`form-check-input ${style.radioInput}`} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <span>Web Browser</span>
                      </label>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionPage>
    </LayoutLoginProfile>
  );
};

export default EditProfile;
