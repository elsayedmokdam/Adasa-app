import classNames from "classnames";
import ShowArticleDetailsCSS from "./ShowArticleDetails.module.css";
import { Link, useLocation, useParams } from "react-router";
import { useEffect } from "react";
import { posts } from "../../data/Posts";

export default function ShowArticleDetails() {
  const { pathname } = useLocation();
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const post = posts.find((p) => p.slug === slug);

  const content =
    post?.content
      ?.split(/\n\s*\n##\s*/)
      .map((section) => section.trim())
      .filter(Boolean) || [];

  function convertDate(date) {
    if (!date) return "";

    return new Date(date).toLocaleDateString("ar-EG", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  if (!post) {
    return (
      <main
        className={classNames(
          "my-bg-dark min-vh-100 d-flex align-items-center justify-content-center",
          ShowArticleDetailsCSS.notFound,
        )}
      >
        <div className="text-center text-white">
          <i className="fa-solid fa-file-circle-xmark fs-1 mb-4"></i>

          <h1 className="fw-bold mb-3">المقال غير موجود</h1>

          <p className="my-text-border-light mb-4">
            عذرًا، لم نتمكن من العثور على المقال المطلوب.
          </p>

          <Link
            to="/blog"
            className="btn my-bg-primary text-white rounded-pill px-4 py-2"
          >
            العودة إلى المدونة
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
    {/* Header */}
      <header
        className={classNames(
          ShowArticleDetailsCSS.image_layer,
          "position-relative",
        )}
      >
        <img src={post.image} className="w-100 h-100" alt={post.title} />

        <div
          className={classNames(
            "container d-flex flex-column gap-4 position-absolute w-100",
            ShowArticleDetailsCSS.content,
          )}
        >
          {/* Breadcrumb */}
          <div
            className={classNames(
              "rounded-pill py-2 px-3 d-flex gap-2 align-items-center",
              ShowArticleDetailsCSS.navigate,
            )}
          >
            <Link
              to="/home"
              className="text-decoration-none text-white"
              aria-label="الرئيسية"
            >
              <i className="fa-solid fa-house"></i>
            </Link>
            <span className="text-white opacity-75">
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <Link to="/blog" className="text-decoration-none text-white">
              المدونة
            </Link>
            <span className="text-white opacity-75">
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <span className="my-text-primary">{post.tags?.[0]}</span>
          </div>
          {/* Category / Date / Read Time */}
          <div
            className={classNames(
              ShowArticleDetailsCSS.time_date,
              "d-flex gap-4 align-items-center flex-wrap",
            )}
          >
            <div className="my-bg-primary text-white py-2 px-3 rounded-pill">
              {post.tags?.[0]}
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="fa-regular fa-calendar text-white"></i>
              <span className="text-white">{convertDate(post.date)}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="fa-regular fa-clock text-white"></i>
              <span className="text-white">{post.readTime}</span>
            </div>
          </div>
          {/* Title */}
          <div className={ShowArticleDetailsCSS.title}>
            <h1 className="fw-bold text-white display-2 mb-0">{post.title}</h1>
          </div>
          {/* Author */}
          <div
            className={classNames(
              ShowArticleDetailsCSS.image_name,
              "d-flex gap-3 align-items-center rounded-4 p-4 mt-3",
            )}
          >
            <div className={ShowArticleDetailsCSS.authorImage}>
              <img
                src={post.author?.avatar}
                className="w-100 h-100 rounded-circle"
                alt={post.author?.name}
              />
            </div>
            <div className="d-flex flex-column justify-content-center">
              <h5 className="fw-bold text-white mb-1">{post.author?.name}</h5>
              <p className="mb-0 my-text-border-light">{post.author?.role}</p>
            </div>
          </div>
          {/* Excerpt */}
          <div
            className={classNames(
              ShowArticleDetailsCSS.hint,
              "text-white p-4 rounded-4",
            )}
          >
            <div className="d-flex gap-3 align-items-start">
              <i className="fa-solid fa-quote-right mt-1"></i>

              <p className="mb-0">{post.excerpt}</p>
            </div>
          </div>
        </div>
      </header>
      {/* Article */}
      <main
        className={classNames(
          ShowArticleDetailsCSS.articleWrapper,
          "my-bg-dark",
        )}
      >
        <div className="container text-white py-5">
          <div className="row gx-5">
            <main className="col-lg-9">
              <article className={ShowArticleDetailsCSS.article}>
                {content.map((section, index) => {
                  /*
                    First element = introduction
                    Other elements:
                    heading
                    paragraph
                  */
                  if (index === 0) {
                    return (
                      <p
                        key={index}
                        className={classNames(
                          ShowArticleDetailsCSS.introduction,
                          "my-text-border-light",
                        )}
                      >
                        {section}
                      </p>
                    );
                  }
                  const parts = section
                    .split(/\n\s*\n/)
                    .map((item) => item.trim())
                    .filter(Boolean);
                  const heading = parts[0];
                  const paragraphs = parts.slice(1);
                  return (
                    <section
                      key={index}
                      id={`section-${index}`}
                      className={ShowArticleDetailsCSS.articleSection}
                    >
                      <h2>{heading}</h2>
                      {paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ))}
                    </section>
                  );
                })}
              </article>
              {/* Tags */}
              <div className={ShowArticleDetailsCSS.tagsSection}>
                <h6 className="fw-bold mb-3">الوسوم</h6>
                <div className="d-flex gap-2 flex-wrap">
                  {post.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="badge rounded-pill my-bg-dark-card px-3 py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={classNames(
                  ShowArticleDetailsCSS.shareBox,
                  "my-bg-dark-card rounded-4 p-4 mb-5",
                )}
              >
                <h6 className="fw-bold mb-3">شارك المقال</h6>
                <div className="d-flex gap-3">
                  <button
                    type="button"
                    className={ShowArticleDetailsCSS.shareButton}
                    aria-label="مشاركة على فيسبوك"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </button>
                  <button
                    type="button"
                    className={ShowArticleDetailsCSS.shareButton}
                    aria-label="مشاركة على X"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </button>
                  <button
                    type="button"
                    className={ShowArticleDetailsCSS.shareButton}
                    aria-label="مشاركة على لينكدإن"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </button>
                  <button
                    type="button"
                    className={ShowArticleDetailsCSS.shareButton}
                    aria-label="نسخ رابط المقال"
                  >
                    <i className="fa-solid fa-link"></i>
                  </button>
                </div>
              </div>
              <div
                className={classNames(
                  ShowArticleDetailsCSS.authorCard,
                  "my-bg-dark-card rounded-4 p-4 mb-5 d-flex gap-3 align-items-center",
                )}
              >
                <img
                  src={post.author?.avatar}
                  className="rounded-circle"
                  width="75"
                  height="75"
                  alt={post.author?.name}
                />
                <div>
                  <span
                    className={classNames(
                      ShowArticleDetailsCSS.authorLabel,
                      "small",
                    )}
                  >
                    كاتب المقال
                  </span>
                  <h6 className="fw-bold mb-1 mt-1">{post.author?.name}</h6>
                  <p className="mb-0 my-text-border-light small">
                    {post.author?.role}
                  </p>
                </div>
              </div>
            </main>
            {/* Sidebar */}
            <aside className="col-lg-3 d-none d-lg-block">
              <div className="position-sticky" style={{ top: "100px" }}>
                <div
                  className={classNames(
                    ShowArticleDetailsCSS.toc,
                    "my-bg-dark-card rounded-5 p-4 mb-4",
                  )}
                >
                  <h6
                    className={classNames(
                      ShowArticleDetailsCSS.tocTitle,
                      "fw-bold p-3 rounded-5 text-center mb-4",
                    )}
                  >
                    محتويات المقال
                  </h6>
                  <nav>
                    <div className="d-flex flex-column gap-2">
                      {content.slice(1).map((section, index) => {
                        const parts = section
                          .split(/\n\s*\n/)
                          .map((item) => item.trim())
                          .filter(Boolean);

                        const heading = parts[0];
                        return (
                          <a
                            key={index}
                            href={`#section-${index + 1}`}
                            className={ShowArticleDetailsCSS.tocLink}
                          >
                            <span>{heading}</span>

                            <i className="fa-solid fa-chevron-left"></i>
                          </a>
                        );
                      })}
                    </div>
                  </nav>
                </div>
              </div>
            </aside>
            {/* Related Articles */}
            <section className="mt-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h4 className="fw-bold mb-0">مقالات قد تعجبك</h4>
                <Link
                  to="/blog"
                  className="text-decoration-none my-text-primary"
                >
                  عرض الكل
                  <i className="fa-solid fa-arrow-left me-2"></i>
                </Link>
              </div>
              <div className="row g-4">
                {[1, 2, 3].map((_, index) => (
                  <div className="col-md-4" key={index}>
                    <div
                      className={classNames(
                        ShowArticleDetailsCSS.relatedCard,
                        "card text-white rounded-4 overflow-hidden border-0 h-100",
                      )}
                    >
                      <div className={ShowArticleDetailsCSS.relatedImage}>
                        <img
                          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600"
                          className="card-img-top w-100 h-100"
                          alt="تصوير المناظر الطبيعية"
                        />
                        <span className={ShowArticleDetailsCSS.relatedCategory}>
                          تصوير
                        </span>
                      </div>
                      <div className="card-body p-4">
                        <h6 className="fw-bold mb-2">تصوير المناظر الطبيعية</h6>
                        <p className="small my-text-border-light mb-3">
                          نصائح احترافية لالتقاط صور مذهلة للطبيعة.
                        </p>
                        <Link
                          to="/blog"
                          className="text-decoration-none my-text-primary small fw-bold"
                        >
                          اقرأ المزيد
                          <i className="fa-solid fa-arrow-left me-2"></i>
                        </Link>
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
