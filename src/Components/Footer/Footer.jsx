import { Link } from "react-router";
import classNames from "classnames";
import FooterCSS from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer
        className={classNames(FooterCSS.footerLayer, FooterCSS.my_border_top)}
      >
        <div className="container p-4">
          <div className="row g-5 m-0">
            <div className="col-md-6 col-xl-3">
              <div className="inner d-flex flex-column gap-4">
                <div className="d-flex gap-3 align-items-center">
                  <span className="fw-bold text-white my-bg-primary px-3 py-2 rounded-4">
                    ع
                  </span>
                  <h3 className="text-white fw-bold mb-0">عدسة</h3>
                </div>
                <p className="mb-0 my-text-border-light lead fs-6">
                  مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                  المحترفين ونصائح عملية لتطوير مهاراتكم.
                </p>
                <div className="d-flex gap-4">
                  <a
                    href="https://www.github.com"
                    className="text-decoration-none my-bg-primary p-2 rounded-3 d-flex align-items-center justify-content-center"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github text-white fs-4"></i>
                  </a>
                  <a
                    href="https://www.twitter.com"
                    className="text-decoration-none my-bg-primary p-2 rounded-3 d-flex align-items-center justify-content-center"
                    target="_blank"
                  >
                    <i className="fa-brands fa-x-twitter text-white fs-4"></i>
                  </a>
                  <a
                    href="https://www.youtube.com"
                    className="text-decoration-none my-bg-primary p-2 rounded-3 d-flex align-items-center justify-content-center"
                    target="_blank"
                  >
                    <i className="fa-brands fa-youtube text-white fs-4"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    className="text-decoration-none my-bg-primary p-2 rounded-3 d-flex align-items-center justify-content-center"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin text-white fs-4"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="inner d-flex flex-column gap-4">
                <h3
                  className={`text-white fw-bold mb-0 me-3 ${FooterCSS.before}`}
                >
                  استكشف
                </h3>
                <Link
                  to="/home"
                  className={`text-decoration-none my-text-border-light lead fs-6 ${FooterCSS.text_hover_primary}`}
                >
                  <span className={`my-text-primary ${FooterCSS.arrow}`}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </span>{" "}
                  الرئيسية
                </Link>
                <Link
                  to="/blog"
                  className={`text-decoration-none my-text-border-light lead fs-6 ${FooterCSS.text_hover_primary}`}
                >
                  <span className={`my-text-primary ${FooterCSS.arrow}`}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </span>{" "}
                  المدونة
                </Link>
                <Link
                  to="/about"
                  className={`text-decoration-none my-text-border-light lead fs-6 ${FooterCSS.text_hover_primary}`}
                >
                  <span className={`my-text-primary ${FooterCSS.arrow}`}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </span>{" "}
                  من نحن
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="inner d-flex flex-column gap-4">
                <h3
                  className={`text-white fw-bold mb-0 me-3 ${FooterCSS.before}`}
                >
                  التصنيفات
                </h3>
                <p
                  className={`mb-0 cursor-pointer text-decoration-none my-text-border-light lead fs-6 ${FooterCSS.text_hover_primary}`}
                >
                  <span className={`my-text-primary ${FooterCSS.arrow}`}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </span>{" "}
                  إضاءة
                </p>
                <p
                  className={`mb-0 cursor-pointer text-decoration-none my-text-border-light lead fs-6 ${FooterCSS.text_hover_primary}`}
                >
                  <span className={`my-text-primary ${FooterCSS.arrow}`}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </span>{" "}
                  بورتريه
                </p>
                <p
                  className={`mb-0 cursor-pointer text-decoration-none my-text-border-light lead fs-6 ${FooterCSS.text_hover_primary}`}
                >
                  <span className={`my-text-primary ${FooterCSS.arrow}`}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </span>{" "}
                  منتظر طبيعية
                </p>
                <p
                  className={`mb-0 cursor-pointer text-decoration-none my-text-border-light lead fs-6 ${FooterCSS.text_hover_primary}`}
                >
                  <span className={`my-text-primary ${FooterCSS.arrow}`}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </span>{" "}
                  تقنيات
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="inner d-flex flex-column gap-4">
                <h3
                  className={`text-white fw-bold mb-0 me-3 ${FooterCSS.before}`}
                >
                  ابقى على اطلاع
                </h3>
                <p className="mb-0 my-text-border-light lead fs-6">
                  اشترك للحصول على أحدث المقالات والتحديثات.
                </p>
                <form className="d-flex gap-2 flex-column" action="post">
                  <input
                    type="text"
                    className="my-bg-dark-tertiary p-3 rounded-4 text-border-light text-white"
                    placeholder="أدخل البريد الالكتروني"
                  />
                  <button
                    type="submit"
                    className="my-bg-primary border-0 text-white p-3 rounded-pill fw-bold"
                  >
                    اشترك
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
