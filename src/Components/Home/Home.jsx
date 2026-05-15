import classNames from "classnames";
import HomeCSS from "./Home.module.css";
import { Link, useLocation } from "react-router";
import { useEffect } from "react";
import { posts } from "../../data/Posts";

const HomePosts = posts.slice(0, 3);

import { Latest } from "../../data/Latest";

export default function Home() {
  const { pathname } = useLocation();

  function convertDate(date) {
    return new Date(date).toLocaleDateString("ar-eg", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <header className="pt-5 grid_bg min-vh-100">
        <div className="container pt-5 d-flex flex-column align-items-center justify-content-center">
          <p
            className={classNames(
              `my-bg-primary-light rounded-pill pe-5 ps-3 py-2 text-white my-bg-orange-dark text-border-primary position-relative dot`,
            )}
          >
            مرحباً بك في عدسة
          </p>
          <div className="col-md-5 text-center">
            <h3 className="fw-bold text-white display-3">
              اكتشف <span className="my-text-accent">فن</span> التصوير
              الفوتوغرافي
            </h3>
            <p className="fw-bold lead mt-5 my-text-border-light">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>
          </div>
          <div className="d-flex gap-3 flex-column flex-lg-row ">
            <Link
              className="text-decoration-none btn my-bg-primary text-white rounded-pill py-3 px-5 fw-bold"
              to="/blog"
            >
              استكشف المقالات
              <span>
                <i className="fa-solid fa-arrow-left"></i>
              </span>
            </Link>
            <Link
              className="text-decoration-none btn my-bg-primary text-white rounded-pill py-3 px-5 fw-bold"
              to="/about"
            >
              اعرف المزيد
            </Link>
          </div>
          <div className="container py-5 w-75">
            <div className="row g-3">
              <div className="col-6 col-xl-3">
                <div className="inner p-3 d-flex flex-column align-items-center gap-2 rounded-5 my-bg-dark-card text-border-light">
                  <span className="my-text-primary">
                    <i className="fa-solid fa-newspaper fa-2xl"></i>
                  </span>
                  <h3 className="mb-0 fw-bold my-text-accent">50+</h3>
                  <p className="mb-0 my-text-border-light">مقالة</p>
                </div>
              </div>
              <div className="col-6 col-xl-3">
                <div className="inner p-3 d-flex flex-column align-items-center gap-2 rounded-5 my-bg-dark-card text-border-light">
                  <span className="my-text-primary">
                    <i className="fa-solid fa-users fa-2xl"></i>
                  </span>
                  <h3 className="mb-0 fw-bold my-text-accent">+ 10 ألف</h3>
                  <p className="mb-0 my-text-border-light">قارئ</p>
                </div>
              </div>
              <div className="col-6 col-xl-3">
                <div className="inner p-3 d-flex flex-column align-items-center gap-2 rounded-5 my-bg-dark-card text-border-light">
                  <span className="my-text-primary">
                    <i className="fa-solid fa-folder-open fa-2xl"></i>
                  </span>
                  <h3 className="mb-0 fw-bold my-text-accent">4</h3>
                  <p className="mb-0 my-text-border-light">تصنيفات</p>
                </div>
              </div>
              <div className="col-6 col-xl-3">
                <div className="inner p-3 d-flex flex-column align-items-center gap-2 rounded-5 my-bg-dark-card text-border-light">
                  <span className="my-text-primary">
                    <i className="fa-solid fa-pen-nib fa-2xl"></i>
                  </span>
                  <h3 className="mb-0 fw-bold my-text-accent">6</h3>
                  <p className="mb-0 my-text-border-light">كاتب</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={classNames(`pt-5 m-0 ${HomeCSS.midle_bg}`)}>
          <div className="container py-5">
            <p
              className={classNames(
                `my-bg-primary-light rounded-pill pe-5 ps-3 py-2 my-text-primary my-bg-orange-dark text-border-primary position-relative w-fit mx-auto me-lg-0 dot`,
              )}
            >
              مميزة
            </p>
            <h2 className="text-white display-3 fw-bold text-center text-lg-end">
              مقالات مختارة
            </h2>
            <div className="d-flex flex-column flex-lg-row justify-content-between">
              <p className="mb-3 mb-lg-0 my-text-border-light lead fw-bold text-center text-lg-start">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
              <Link
                className="text-decoration-none text-white btn my-bg-primary"
                to="/blog"
              >
                عرض الكل{" "}
                <span>
                  <i className="fa-solid fa-chevron-left"></i>
                </span>
              </Link>
            </div>
            {HomePosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/details/${post.slug}`}
                state={{ post }}
                className="card d-flex flex-column flex-lg-row w-100 rounded-5 overflow-hidden text-border-light mt-5 cursor-pointer text-decoration-none"
              >
                <div className="col-lg-6 overflow-hidden">
                  <img
                    src={post.image}
                    className="w-100 h-100 image"
                    alt={post.title}
                  />
                </div>
                <div className="my-bg-dark-card col-lg-6 p-4">
                  <div className="d-flex gap-4 align-items-center">
                    <p className="fw-bold my-text-primary my-bg-orange-dark rounded-pill px-3 py-2 w-fit text-border-primary">
                      {post.category}
                    </p>
                    <p className="fw-bold my-text-border-light">
                      {post.readTime}
                    </p>
                  </div>
                  <h3 className="fw-bold text-white">{post.title}</h3>
                  <p className="my-text-border-light mt-3">{post.excerpt}</p>
                  <div className="mt-5 d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3 align-items-center">
                      <div
                        className={classNames(
                          `rounded-circle text-border-light ${HomeCSS.fixed_size}`,
                        )}
                      >
                        <img
                          src={post.author.avatar}
                          className="w-100 rounded-circle"
                          alt={post.author.name}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <h3 className="text-white fw-bold fs-5">
                          {post.author.name}
                        </h3>
                        <p className="mb-0 my-text-border-light">
                          {convertDate(post.date)}
                        </p>
                      </div>
                    </div>
                    <p className="mb-0 my-text-primary">
                      اقرأ المقال{" "}
                      <span>
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="my-bg-dark-card p-5">
            <div className="container">
              <p
                className={classNames(
                  `my-bg-primary-light rounded-pill pe-5 ps-3 py-2 my-text-primary my-bg-orange-dark text-border-primary position-relative w-fit mx-auto dot`,
                )}
              >
                التصنيفات
              </p>
              <h3 className="text-center text-white fw-bold display-4">
                استكشف حسب الموضوع
              </h3>
              <p className="my-text-border-light text-center lead">
                اعثر على محتوى مصمم حسب اهتماماتك
              </p>
              <div className="row g-4 mt-5">
                <div className="col-md-6 col-xl-3">
                  <Link
                    to=""
                    className="inner my-bg-border rounded-5 text-border-light p-4 d-flex flex-column align-items-center gap-2 text-decoration-none"
                  >
                    <span className="my-bg-orange-dark my-text-primary rounded-4 text-border-primary p-3 w-fit">
                      <i className="fa-solid fa-sun fa-xl"></i>
                    </span>
                    <p className="mb-0 mt-2 fw-bold text-white">إضاءة</p>
                    <p className="mb-0 my-text-border-light">3 مقالة</p>
                  </Link>
                </div>
                <div className="col-md-6 col-xl-3">
                  <Link
                    to=""
                    className="inner my-bg-border rounded-5 text-border-light p-4 d-flex flex-column align-items-center gap-2 text-decoration-none"
                  >
                    <span className="my-bg-orange-dark my-text-primary rounded-4 text-border-primary p-3 w-fit">
                      <i className="fa-solid fa-user fa-xl"></i>
                    </span>
                    <p className="mb-0 mt-2 fw-bold text-white">بورتريه</p>
                    <p className="mb-0 my-text-border-light">3 مقالة</p>
                  </Link>
                </div>
                <div className="col-md-6 col-xl-3">
                  <Link
                    to=""
                    className="inner my-bg-border rounded-5 text-border-light p-4 d-flex flex-column align-items-center gap-2 text-decoration-none"
                  >
                    <span className="my-bg-orange-dark my-text-primary rounded-4 text-border-primary p-3 w-fit">
                      <i className="fa-solid fa-mountain-sun fa-xl"></i>
                    </span>
                    <p className="mb-0 mt-2 fw-bold text-white">مناظر طبيعية</p>
                    <p className="mb-0 my-text-border-light">2 مقالة</p>
                  </Link>
                </div>
                <div className="col-md-6 col-xl-3">
                  <Link
                    to=""
                    className="inner my-bg-border rounded-5 text-border-light p-4 d-flex flex-column align-items-center gap-2 text-decoration-none"
                  >
                    <span className="my-bg-orange-dark my-text-primary rounded-4 text-border-primary p-3 w-fit">
                      <i className="fa-solid fa-sliders fa-xl"></i>
                    </span>
                    <p className="mb-0 mt-2 fw-bold text-white">تقنيات</p>
                    <p className="mb-0 my-text-border-light">5 مقالة</p>
                  </Link>
                </div>
                <div className="col-md-6 col-xl-3">
                  <Link
                    to=""
                    className="inner my-bg-border rounded-5 text-border-light p-4 d-flex flex-column align-items-center gap-2 text-decoration-none"
                  >
                    <span className="my-bg-orange-dark my-text-primary rounded-4 text-border-primary p-3 w-fit">
                      <i className="fa-solid fa-sun fa-xl"></i>
                    </span>
                    <p className="mb-0 mt-2 fw-bold text-white">معدات</p>
                    <p className="mb-0 my-text-border-light">3 مقالة</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-5 pb-3 my-bg-dark">
          <div className="container">
            <p
              className={classNames(
                `my-bg-primary-light rounded-pill pe-5 ps-3 py-2 my-text-primary my-bg-orange-dark text-border-primary position-relative w-fit mx-auto me-lg-0 dot`,
              )}
            >
              الأحدث
            </p>
            <div className="text-center text-md-end">
              <h3 className="fw-bold text-white display-3 mt-4">
                أحدث المقالات
              </h3>
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <p className="my-text-border-light lead fw-bold">
                  محتوى جديد طازج من المطبعة
                </p>
                <Link
                  to="/blog"
                  className="text-decoration-none my-text-primary"
                >
                  عرض جميع المقالات{" "}
                  <span>
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="row g-5 my-3">
              {Latest.map((item) => (
                <div key={item.id} className="col-md-6 col-xl-4">
                  <Link
                    to={`/blog/details/${item.slug}`}
                    state={{ item }}
                    className="card bg-dark text-white text-border-light rounded-5 overflow-hidden text-decoration-none"
                  >
                    <div className="position-relative">
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt={item.title}
                      />
                      <span className="position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill small bg-dark bg-opacity-75">
                        {item.category}
                      </span>
                    </div>
                    <div className="card-body my-text-dark-card pb-5 pt-4 px-4 d-flex flex-column gap-3">
                      <div className="d-flex align-items-center gap-2 fs-6 my-text-border-light fw-bold mb-2">
                        <span>
                          <i className="fa-regular fa-clock"></i>
                        </span>
                        <span>{item.readTime}</span>
                        <span>•</span>
                        <span>{convertDate(item.date)}</span>
                      </div>
                      <h5 className="card-title fw-bold text-white">
                        {item.title}
                      </h5>
                      <p className="card-text my-text-border-light">
                        {item.excerpt}
                      </p>
                      <hr className="opacity-25" />
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={item.author.avatar}
                            className="rounded-circle"
                            width={40}
                            height={40}
                            alt={item.author.name}
                          />
                          <div className="small">
                            <div className="fw-semibold text-white">
                              {item.author.name}
                            </div>
                            <div>{item.author.role}</div>
                          </div>
                        </div>
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center my-bg-orange-dark my-text-primary"
                          style={{ width: 38, height: 38 }}
                        >
                          <i className="fa-solid fa-chevron-left" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={classNames(HomeCSS.my_bg_dark, "py-5")}>
          <div className="container">
            <div className="col-md-8 mx-auto">
              <div className="inner my-bg-dark-card text-border rounded-5 p-5 d-flex flex-column align-items-center gap-4">
                <div className="p-3 my-bg-primary rounded-4 text-white">
                  <i className="fa-regular fa-envelope  fa-2xl"></i>
                </div>
                <div>
                  <h4 className="fw-bold text-white h1 text-center mb-3">
                    اشترك في{" "}
                    <span className="fw-bold my-text-primary">
                      نشرتنا الإخبارية
                    </span>
                  </h4>
                  <p className="mb-0 lead my-text-border-light text-center">
                    احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
                    الإلكتروني
                  </p>
                </div>
                <form className="d-flex gap-4 flex-column flex-md-row">
                  <input
                    type="text"
                    className="my-bg-dark p-3 rounded-4 text-border-light text-white"
                    placeholder="أدخل البريد الالكتروني"
                  />
                  <button
                    type="submit"
                    className="my-bg-primary border-0 text-white px-5 py-3 rounded-4 fw-bold"
                  >
                    اشترك الان
                  </button>
                </form>
                <p className="mb-0 lead my-text-border-light text-center">
                  انضم لـ <span className="text-white fw-bold">+10,000</span>{" "}
                  مصور • بدون إزعاج • إلغاء الاشتراك في أي وقت
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
