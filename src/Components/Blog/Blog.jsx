import classNames from "classnames";
import { Link, Outlet, useLocation, useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { posts } from "../../data/Posts";

const buttons = [
  "جميع المقالات",
  "مناظر طبيعية",
  "إضاءة",
  "بورتريه",
  "تقنيات",
  "معدات",
];

export default function Blog() {
  const { pathname } = useLocation();
  const location = useLocation();
  const isDetailsPage = location.pathname.includes("/blog/details");
  const [view, setView] = useState("grid");
  const [blogs, setBlogs] = useState(posts);
  const [activeButton, setActiveButton] = useState(buttons[0]);

  const [params] = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    if (category) {
      setBlogs(posts.filter((post) => post.category === category));
    } else {
      setBlogs(posts);
    }
  }, [category]);

  function handlePosts(value) {
    if (value == "جميع المقالات") {
      setBlogs(posts);
      setActiveButton(value);
    }else {
      setBlogs(posts.filter((post) => post.category === value));
    }
  }

  function handleSearch(value) {
    setBlogs(
      posts.filter((post) =>
        post.title.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  function convertDate(date) {
    return new Date(date).toLocaleDateString("ar-eg", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <>
      {!isDetailsPage && (
        <>
          <div
            className={classNames(
              `pt-5 grid_bg min-vh-50 d-flex flex-column justify-content-center align-items-center`,
            )}
          >
            <div className="container pt-5 d-flex flex-column align-items-center justify-content-center">
              <p
                className={classNames(
                  `my-bg-primary-light rounded-pill pe-5 ps-3 py-2 text-white my-bg-orange-dark text-border-primary position-relative dot`,
                )}
              >
                مدونتنا
              </p>
              <div className="d-flex flex-column align-items-center text-center mt-4">
                <h3 className="fw-bold text-white display-3">
                  استكشف <span className="my-text-accent">مقالاتنا</span>
                </h3>
                <p className="fw-bold lead my-4 my-text-border-light pb-5">
                  اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
                </p>
              </div>
            </div>
          </div>
          <div className="my-bg-dark">
            <div className="container">
              <div className="row align-items-center justify-content-between g-5">
                <div className="col-xl-3">
                  <input
                    type="search"
                    className="p-3 w-100 rounded-3 border-0 my-bg-dark-tertiary text-border-light"
                    placeholder="ابحث في المقالات....."
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>
                <div className="col-xl-8">
                  <div className="row g-3">
                    {buttons.map((button, index) => (
                      <div key={index} className="col-xl-2">
                        <button
                          className={`text-decoration-none text-white btn w-100 h-100 ${
                            activeButton === button
                              ? "bg-transparent border border-2 my-border-primary"
                              : "my-bg-primary"
                          }`}
                          onClick={() => {
                            setActiveButton(button);
                            handlePosts(button);
                          }}
                          style={{
                            borderRadius: "10px",
                            fontSize: "14px",
                          }}
                        >
                          {button}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="my-text-border-light mt-5">
                  عرض <span className="text-white fw-bold">{blogs.length}</span>{" "}
                  من المقالات
                </p>
                <div className="text-white my-bg-primary my-bg-border w-fit px-3 py-2 rounded-3 d-flex gap-2 align-items-center text-border-light d-none d-lg-block">
                  <span
                    className={`cursor-pointer rounded-3 p-1 ${
                      view === "grid" && "my-bg-primary"
                    }`}
                    title="عرض شبكي"
                    onClick={() => setView("grid")}
                  >
                    <i className="fa-solid fa-border-all"></i>
                  </span>
                  <span
                    className={`cursor-pointer rounded-3 p-1 ${
                      view === "list" && "my-bg-primary"
                    }`}
                    title="عرض قائمة"
                    onClick={() => setView("list")}
                  >
                    <i className="fa-solid fa-bars"></i>
                  </span>
                </div>
              </div>
              <div className="row g-4 py-5">
                <Outlet />
                {blogs.map((post) => (
                  <div
                    key={post.id}
                    className={`col-lg-${view === "grid" ? 4 : 12}`}
                  >
                    <Link
                      to={`/blog/details/${post.slug}`}
                      className={`card bg-dark text-white text-border-light rounded-5 overflow-hidden text-decoration-none h-100 ${
                        view === "list" && "flex-md-row"
                      }`}
                    >
                      <div
                        className={`position-relative overflow-hidden ${
                          view === "list" && "col-md-4"
                        }`}
                      >
                        <img
                          src={post.image}
                          className={`w-100 h-100 image ${
                            view === "list" && "rounded-0"
                          }`}
                          alt={post.title}
                        />
                        <span className="position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill small bg-dark bg-opacity-75">
                          {post.category}
                        </span>
                      </div>
                      <div
                        className={`card-body my-text-dark-card pb-5 pt-4 px-4 d-flex flex-column gap-3 ${
                          view === "list" && "col-md-8"
                        } `}
                      >
                        <div className="d-flex align-items-center gap-2 fs-6 my-text-border-light fw-bold mb-2">
                          <span>
                            <i className="fa-regular fa-clock"></i>
                          </span>
                          <span>{post.readTime}</span>
                          <span>•</span>
                          <span>{convertDate(post.date)}</span>
                        </div>
                        <h5 className="card-title fw-bold text-white">
                          {post.title}
                        </h5>
                        <p className="card-text my-text-border-light">
                          {post.excerpt}
                        </p>
                        <hr className="opacity-25" />
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src={post.author.avatar}
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt={post.author.name}
                            />
                            <div className="small">
                              <div className="fw-semibold text-white">
                                {post.author.name}
                              </div>
                              <div>{post.author.role}</div>
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
          </div>
        </>
      )}
      <Outlet />
    </>
  );
}
