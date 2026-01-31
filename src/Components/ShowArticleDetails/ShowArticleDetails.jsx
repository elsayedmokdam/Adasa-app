import classNames from "classnames";
import ShowArticleDetailsCSS from "./ShowArticleDetails.module.css";
import { Link, useLocation, useParams } from "react-router";
import { useEffect } from "react";

export default function ShowArticleDetails() {
  const { state, pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const { slug } = useParams();
  console.log(state.post);
  console.log(slug);

  const content = state.post.content.split("\n\n##");

  function convertDate(date) {
    return new Date(date).toLocaleDateString("ar-eg", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <>
      <header
        className={classNames(
          ShowArticleDetailsCSS.image_layer,
          "min-vh-100 position-relative",
        )}
      >
        <img src={state.post.image} className="w-100 h-100" alt="" />
        <div
          className={classNames(
            "container d-flex flex-column gap-4 position-absolute w-100",
            ShowArticleDetailsCSS.content,
          )}
        >
          <div
            className={`rounded-pill my-bg-border text-border-light text-white opacity-75 py-2 px-3 d-flex gap-2 w-fit ${ShowArticleDetailsCSS.navigate} `}
          >
            <Link to="/home" className="text-decoration-none text-white">
              <i className="fa-solid fa-home"></i>
            </Link>
            <span>
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <Link to="/blog" className="text-decoration-none text-white">
              المدونة
            </Link>
            <span>
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <span className="my-text-primary">{state.post.tags[0]}</span>
          </div>
          <div
            className={classNames(
              ShowArticleDetailsCSS.time_date,
              "d-flex gap-4 align-items-center",
            )}
          >
            <div className="my-bg-primary text-white py-2 px-3 w-fit rounded-pill">
              {state.post.tags[0]}
            </div>
            <div>
              <span className="text-white">
                <i className="fa-regular fa-calendar"></i>
              </span>
              <span className="text-white">
                {" "}
                {convertDate(state.post.date)}
              </span>
            </div>
            <div>
              <span className="text-white">
                <i className="fa-regular fa-clock"></i>
              </span>
              <span className="text-white"> {state.post.readTime}</span>
            </div>
          </div>
          <div className={classNames(ShowArticleDetailsCSS.title)}>
            <h1 className="fw-bold text-white display-2">{state.post.title}</h1>
          </div>
          <div
            className={classNames(
              ShowArticleDetailsCSS.image_name,
              "d-flex gap-3 align-items-center my-bg-dark-card text-border-light rounded-4 p-5 mt-5",
            )}
          >
            <div className="w-25 rounded-circle">
              <img
                src={state.post.author.avatar}
                className="w-100 text-border-primary rounded-circle"
                alt={state.post.author.name}
              />
            </div>
            <div className="d-flex flex-column justify-content-center">
              <h4 className="fw-bold text-white">{state.post.author.name}</h4>
              <p className="mb-0 my-text-border-light">
                {state.post.author.role}
              </p>
            </div>
          </div>
          <div
            className={classNames(
              ShowArticleDetailsCSS.hint,
              "text-white my-bg-orange-dark p-4 text-border-primary rounded-4 w-fit",
            )}
          >
            {state.post.excerpt}
          </div>
        </div>
      </header>
      <main className="my-bg-dark">
        <div className="container my-bg-dark text-white py-5">
          <div className="row gx-5">
            <main className="col-lg-9">
              <article className="mb-5">
                <p className="text-white">{content[0]}</p>
                <h2 className="fw-bold mb-4" id="section-1">
                  {content[1]}
                </h2>
                <p className="my-text-border-light">{content[2]}</p>

                <h2 className="fw-bold mt-5 mb-4" id="section-2">
                  {content[3]}
                </h2>
                <p className="my-text-border-light">{content[4]}</p>

                <h2 className="fw-bold mt-5 mb-4" id="section-3">
                  {content[5]}
                </h2>
                <p className="my-text-border-light">{content[6]}</p>

                <h2 className="fw-bold mt-5 mb-4" id="section-4">
                  {content[7]}
                </h2>
                <p className="my-text-border-light" id="section-5">
                  {content[8]}
                </p>

                <h2 className="fw-bold mt-5 mb-4" id="section-6">
                  {content[9]}
                </h2>
                <p className="my-text-border-light">{content[10]}</p>
              </article>

              <div className="mb-5">
                <h6 className="fw-bold mb-3">الوسوم</h6>
                <div className="d-flex gap-2 flex-wrap">
                  <span className="badge rounded-pill my-bg-dark-card px-3 py-2">
                    إضاءة
                  </span>
                  <span className="badge rounded-pill my-bg-dark-card px-3 py-2">
                    تصوير
                  </span>
                  <span className="badge rounded-pill my-bg-dark-card px-3 py-2">
                    الساعة الذهبية
                  </span>
                </div>
              </div>

              <div className="my-bg-dark-card rounded-4 p-4 mb-5">
                <h6 className="fw-bold mb-3">شارك المقال</h6>
                <div className="d-flex gap-3">
                  <i className="fa-brands fa-facebook fs-5"></i>
                  <i className="fa-brands fa-x-twitter fs-5"></i>
                  <i className="fa-brands fa-linkedin fs-5"></i>
                  <i className="fa-solid fa-link fs-5"></i>
                </div>
              </div>

              <div className="my-bg-dark-card rounded-4 p-4 mb-5 d-flex gap-3 align-items-center">
                <img
                  src={state.post.author.avatar}
                  className="rounded-circle"
                  width="70"
                  alt=""
                />
                <div>
                  <h6 className="fw-bold mb-1">{state.post.author.name}</h6>
                  <p className="mb-0 my-text-border-light small">
                    {state.post.author.role}
                  </p>
                </div>
              </div>
            </main>
            <aside className="col-lg-3 d-none d-lg-block">
              <div className="position-sticky" style={{ top: "100px" }}>
                <div className="my-bg-dark-card rounded-5 text-border-light p-4 mb-4">
                  <h6 className="fw-bold mb-4 my-text-border-light my-bg-border p-3 rounded-5 text-border-light text-center">
                    محتويات المقال
                  </h6>
                  <div className="list-unstyled small d-flex flex-column gap-2 p-0">
                    <p
                      href="#section-1"
                      className="text-decoration-none my-text-border-light fw-bold text-border-light p-3 rounded-5"
                    >
                      لماذا الساعة الذهبية؟
                    </p>
                    <p
                      href="#section-2"
                      className="text-decoration-none my-text-border-light fw-bold text-border-light p-3 rounded-5"
                    >
                      التحضير المسبق
                    </p>
                    <p
                      href="#section-3"
                      className="text-decoration-none my-text-border-light fw-bold text-border-light p-3 rounded-5"
                    >
                      إعدادات الكاميرا
                    </p>
                    <p
                      href="#section-4"
                      className="text-decoration-none my-text-border-light fw-bold text-border-light p-3 rounded-5"
                    >
                      التكوين الفني
                    </p>
                    <p
                      href="#section-5"
                      className="text-decoration-none my-text-border-light fw-bold text-border-light p-3 rounded-5"
                    >
                      التكوين الفني
                    </p>
                    <p
                      href="#section-6"
                      className="text-decoration-none my-text-border-light fw-bold text-border-light p-3 rounded-5"
                    >
                      الخلاصة
                    </p>
                  </div>
                </div>
              </div>
            </aside>
            <section>
              <h4 className="fw-bold mb-4">مقالات قد تعجبك</h4>
              <div className="row g-4">
                {[1, 2, 3].map((_, i) => (
                  <div className="col-md-4" key={i}>
                    <div className="card my-bg-dark-card text-white rounded-4 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400"
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                        <h6 className="fw-bold">تصوير المناظر الطبيعية</h6>
                        <p className="small my-text-border-light mb-0">
                          نصائح احترافية لالتقاط صور مذهلة للطبيعة.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
