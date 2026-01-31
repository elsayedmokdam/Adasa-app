import { Link, NavLink } from "react-router";
import image from "../../assets/favicon.png";
import NavbarCSS from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark my-bg-dark-tertiary  fixed-top z-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <div className="d-flex align-items-center gap-3">
              <div className={NavbarCSS.logo}>
                <img src={image} className="w-100" alt="عدسة" />
              </div>
              <div>
                <h1 className="h4 fw-bold text-white mb-0">عدسة</h1>
                <p className="mb-0 fs-6 my-text-primary d-none d-lg-block">
                  عالم التصوير الفوتوغرافي
                </p>
              </div>
            </div>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse mt-3 mt-lg-0"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav mx-auto px-2 py-2 mb-2 mb-lg-0 text-center my-bg-border rounded-4 text-border-light">
              <li className="nav-item">
                <NavLink className="nav-link text-white rounded-pill" to="home">
                  الرئيسية
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white rounded-pill" to="blog">
                  المدونة
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white rounded-pill"
                  to="about"
                >
                  من نحن
                </NavLink>
              </li>
            </ul>
            <div className="d-flex justify-content-center me-xl-5 my-3 my-lg-0 d-flex align-items-center gap-4 my-text-border-light">
              <span className="d-none d-lg-block cursor-pointer">
                <i className="fa-solid fa-search"></i>
              </span>
              <Link
                className="btn my-bg-primary text-white fw-bold px-4 py-2 rounded-pill w-100 w-lg-auto"
                to="/blog"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
