import LayoutLoginProfile from '../../../components/LayoutPage/LayoutLoginProfil';
import SectionPage from '../../../components/Section/LandingPage/SectionPage';
import React from 'react';
import style from '../../../styles/company.module.css';
import Image from 'next/image';
import logo from '../../../assets/image/logo_perusahaan.png';
import Link from 'next/link';

const CompanyProfile = () => {
  return (
    <LayoutLoginProfile>
      <SectionPage sty={{ marginBottom: '100px' }}>
        <div className={`box mb-5 ${style.box}`}>
          <div className="row justify-content-center">
            <div className={`col-11 ${style.colRow}`}>
              <div className={`${style['box-imgBackground']} d-flex justify-content-end align-items-end`} style={{ backgroundColor: '#ffffff' }}>
                <Image src={logo} className={`img-fluid ${style.img}`}></Image>
                <Link href={`/edit-profile/perusahaan`} className="pe-4 pb-2">
                  Edit Profile
                </Link>
              </div>
              <div className="box-content text-center">
                <h2>PT. Martabat Jaya Abadi</h2>
                <p>Financial</p>
                <p className="text-secondary">
                  <i class="bi bi-geo-alt"></i> Purwokerto, Jawa Tengah
                </p>
                <p className="px-5">PT. Martabat Jaya Abadi adalah PT yang bergerak pada bidang usaha periklanan yang profesional.</p>
                <div className="row justify-content-center text-start ">
                  <div className="col-6 col-md-3 d-grid text-center mb-4">
                    <div className="button d-grid">
                      <button className="btn btn-primary" style={{ height: '50px', backgroundColor: '#5E50A1', borderColor: '#5E50A1' }}>
                        Edit Profile
                      </button>
                    </div>
                  </div>
                  <div className="col-12 d-grid justify-content-center mb-5">
                    <p>
                      <i class="bi bi-envelope"></i> Martabat_JA@gmail.com
                    </p>
                    <p>
                      <i class="bi bi-instagram"></i> @Martabat_JA
                    </p>
                    <p>
                      <i class="bi bi-telephone"></i> 085945582441
                    </p>
                    <p>
                      <i class="bi bi-linkedin"></i> PT Martabat Jaya Abadi
                    </p>
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

export default CompanyProfile;
