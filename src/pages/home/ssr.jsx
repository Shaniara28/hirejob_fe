import Footer from '@/components/Footer/Footer';
import NavbarHome from '@/components/Navbar/NavbarHome';
import style from '../../styles/Home.module.css';
import profil from '../../assets/image/Profil.png';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.API_BACKEND}worker`);

  return {
    props: {
      worker: res.data,
    },
  };
}

const Home = ({ worker }) => {
  return (
    <>
      <NavbarHome />

      <div className="container-fluid" style={{ backgroundColor: '#5e50a1' }}>
        <div className="container">
          {/* Top */}
          <div className={`d-flex ${style.top}`}>
            <p className="fw-semibold text-white my-auto">Top Jobs</p>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5 pb-3" style={{ backgroundColor: '#e5e5e5' }}>
        <div className="container">
          {/* Search */}
          <div className={`seacrh bg-white rounded ${style.search}`}>
            <form className="text-center d-flex align-items-center justify-content-between">
              <input className={`w-75 rounded px-4 ${style.input}`} type="text" placeholder="Search for any skill" />
              <i class={`bi bi-search mx-2 ${style.icon}`}></i>
              <div class="border-start dropdown me-2">
                <a class={`btn dropdown-toggle ${style.dropdown}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Kategori
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item pb-2" href="#">
                      Sortir berdasarkan nama
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item border-top pb-2" href="#">
                      Sortir berdasarkan skill
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item border-top pb-2" href="#">
                      Sortir berdasarkan lokasi
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item border-top pb-2" href="#">
                      Sortir berdasarkan freelance
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item border-top pb-1" href="#">
                      Sortir berdasarkan fulltime
                    </a>
                  </li>
                </ul>
              </div>
              <button className={`btn fw-bold me-2 ${style.btnPurple}`} type="button">
                Search
              </button>
            </form>
          </div>
          {/* End Search */}

          {/* Card */}
          <div className="row pt-5 pb-2">
            <div className="col-12">
              <div className="card" style={{ width: '100%' }}>
                <ul className="list-group list-group-flush">
                  {worker.map((item) => (
                    <li className="list-group-item py-3">
                      <div className="row">
                        <div className="col-sm-2 col-3 col-lg-1 d-flex align-items-center">
                          <Image className="img-thumbnail" src={profil} style={{ width: '100%', height: 'auto', borderRadius: '100%' }}></Image>
                        </div>
                        <div className={`col-lg-9 col-9 col-sm-10 ${style.body}`}>
                          <h4>{item.nama}</h4>
                          <span>{item.jabatan}</span>
                          <p>
                            <i class="bi bi-geo-alt"></i> {item.domisili}
                          </p>
                          <div className={`d-flex d-block ${style.listSkills}`}>
                            <p className={`text-wrap btn me-2 ${style.skills}`}>PHP</p>
                            <p className={`text-wrap btn me-2 ${style.skills}`}>Javascript</p>
                            <p className={`text-wrap btn me-2 ${style.skills}`}>HTML</p>
                          </div>
                        </div>
                        <div className="offset-3 offset-sm-2 offset-lg-0 col-5 col-md-2 d-grid justify-content-md-center justify-content-start align-items-center mt-lg-0 mt-2">
                          <Link href={`/profile/pekerja/${item.id}`}>
                            <button className={`btn text-wrap  btn-block ${style.seeProfil}`}>Lihat Profil</button>
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* End Card */}

          <nav aria-label="Page navigation example">
            <ul class="pagination d-flex justify-content-center mt-4">
              <li class="page-item me-1">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item mx-1">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item mx-1">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item mx-1">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item ms-1">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
