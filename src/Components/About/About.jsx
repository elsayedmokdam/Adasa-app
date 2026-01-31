import classNames from "classnames";
import AboutCSS from "./About.module.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const authersData = [
  {
    name: "سالم أحمد",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    role: "مصور محترف",
  },
  {
    name: "محمد علي",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    role: "مصور بورتريه",
  },
  {
    name: "إبراهيم حسن",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    role: "مصور طبيعة",
  },
  {
    name: "داود خالد",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    role: "مدرب تصوير",
  },
  {
    name: "ليث محمود",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    role: "فنان بصري",
  },
  {
    name: "جمال عبدالله",
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
    role: "مصور ومراجع تقني",
  },
  {
    name: "خالد الفيصل",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
    role: "مصور فلكي",
  },
  {
    name: "نادر سعيد",
    avatar:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face",
    role: "مصور شوارع",
  },
  {
    name: "هاني الشمري",
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face",
    role: "مصور طعام",
  },
  {
    name: "عمر الراشد",
    avatar:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
    role: "مصور حياة برية",
  },
  {
    name: "فارس العلي",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",
    role: "فنان فوتوغرافي",
  },
  {
    name: "سامي الحربي",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face",
    role: "خبير تعديل صور",
  },
  {
    name: "رامي الخطيب",
    avatar:
      "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face",
    role: "مصور ماكرو",
  },
  {
    name: "باسم المصري",
    avatar:
      "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face",
    role: "مصور فني",
  },
  {
    name: "منصور الزهراني",
    avatar:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face",
    role: "مصور زفاف",
  },
  {
    name: "فيصل الدوسري",
    avatar:
      "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop&crop=face",
    role: "مصور جوي",
  },
  {
    name: "لؤي الصالح",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
    role: "مصور تجاري",
  },
  {
    name: "طارق النعيمي",
    avatar:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face",
    role: "مصور معماري",
  },
  {
    name: "أحمد الشهري",
    avatar:
      "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face",
    role: "مصور رياضي",
  },
  {
    name: "ماجد القحطاني",
    avatar:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face",
    role: "مصور استوديو",
  },
  {
    name: "ياسر العتيبي",
    avatar:
      "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=100&h=100&fit=crop&crop=face",
    role: "مصور رحالة",
  },
  {
    name: "دحام الحسيني",
    avatar:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face",
    role: "فنان بصري",
  },
  {
    name: "نايف المطيري",
    avatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
    role: "مصور مواليد",
  },
  {
    name: "عبدالله الغامدي",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
    role: "مصور عقارات",
  },
  {
    name: "كريم الفهد",
    avatar:
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face",
    role: "خبير تقني",
  },
  {
    name: "سلطان الراجحي",
    avatar:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face",
    role: "فنان تصوير",
  },
  {
    name: "فهد السبيعي",
    avatar:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=100&h=100&fit=crop&crop=face",
    role: "مراجع معدات",
  },
  {
    name: "راشد الجاسر",
    avatar:
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=100&h=100&fit=crop&crop=face",
    role: "فنان بصري",
  },
];

export default function About() {

  const { pathname } = useLocation();

  const [authers, setAuthers] = useState([]);
  useEffect(() => {
    setAuthers(authersData);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <div
        className={classNames(
          `pt-5 grid_bg min-vh-100 d-flex flex-column justify-content-center align-items-center`,
        )}
        
      >
        <div className="container pt-5 d-flex flex-column align-items-center justify-content-center">
          <p
            className={classNames(
              `my-bg-primary-light rounded-pill pe-5 ps-3 py-2 text-white my-bg-orange-dark text-border-primary position-relative dot`,
            )}
          >
            من نحن
          </p>
          <div className="d-flex flex-column align-items-center text-center mt-4">
            <h3 className="fw-bold text-white display-3">
              مهمتنا هي{" "}
              <span className="my-text-accent">الإعلام والإلهام </span>
            </h3>
            <p className="col-lg-6 fw-bold lead my-4 my-text-border-light">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>
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
      </div>
      <div className={`my-bg-dark-card py-5 ${AboutCSS.my_border_top}`}>
        <div className="container pt-5 d-flex flex-column align-items-center">
          <h3
            className={classNames(
              `mb-0 fw-bold text-white h2 position-relative ${AboutCSS.before} ${AboutCSS.after}`,
            )}
          >
            قيمنا
          </h3>
          <div className="mb-0 mt-4 fw-bold my-text-border-light lead">
            المبادئ التي توجه كل ما نقوم بإنشائه
          </div>
        </div>
        <div className="container pb-5">
          <div className="row g-4 mt-5">
            <div className="col-md-6 col-xl-3">
              <div
                className={classNames(
                  "inner my-bg-border rounded-5 text-border-light p-4 d-flex flex-column align-items-center gap-2 text-decoration-none",
                  AboutCSS.bg_hover,
                )}
              >
                <span className="my-bg-orange-dark my-text-primary rounded-4 text-border-primary p-3 w-fit">
                  <i className="fa-solid fa-bullseye fa-xl"></i>
                </span>
                <h4 className="mb-0 mt-2 fw-bold text-white">الجودة أولاً</h4>
                <p className="mb-0 my-text-border-light">
                  محتوى مدروس ومكتوب بخبرة
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div
                className={classNames(
                  "inner my-bg-border rounded-5 text-border-light p-4 d-flex flex-column align-items-center gap-2 text-decoration-none",
                  AboutCSS.bg_hover,
                )}
              >
                <span className="my-bg-orange-dark my-text-primary rounded-4 text-border-primary p-3 w-fit">
                  <i className="fa-solid fa-bolt fa-xl"></i>
                </span>
                <h4 className="mb-0 mt-2 fw-bold text-white">تركيز عملي</h4>
                <p className="mb-0 my-text-border-light">
                  أمثلة واقعية يمكنك تطبيقها اليوم
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div
                className={classNames(
                  "inner my-bg-border rounded-5 text-border-light p-4 d-flex flex-column align-items-center gap-2 text-decoration-none",
                  AboutCSS.bg_hover,
                )}
              >
                <span className="my-bg-orange-dark my-text-primary rounded-4 text-border-primary p-3 w-fit">
                  <i className="fa-solid fa-handshake fa-xl"></i>
                </span>
                <h4 className="mb-0 mt-2 fw-bold text-white">المجتمع</h4>
                <p className="mb-0 my-text-border-light">
                  تعلم مع آلاف المصورين
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div
                className={classNames(
                  "inner my-bg-border rounded-5 text-border-light p-4 d-flex flex-column align-items-center gap-2 text-decoration-none",
                  AboutCSS.bg_hover,
                )}
              >
                <span className="my-bg-orange-dark my-text-primary rounded-4 text-border-primary p-3 w-fit">
                  <i className="fa-solid fa-arrows-rotate fa-xl"></i>
                </span>
                <h4 className="mb-0 mt-2 fw-bold text-white">دائماً محدث</h4>
                <p className="mb-0 my-text-border-light">
                  أحدث الاتجاهات وأفضل الممارسات
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`my-bg-dark-secondary py-5`}>
        <div className="container">
          <article>
            <p
              className={classNames(
                `my-bg-primary-light rounded-pill pe-5 ps-3 py-2 text-white my-bg-orange-dark text-border-primary position-relative dot w-fit fw-bold mx-auto`,
              )}
            >
              فريقنا
            </p>
            <h3 className="fw-bold text-white text-center h1 mt-4">
              تعرف على كتابنا
            </h3>
            <p className="text-center fw-bold lead mb-0 mt-4 my-text-border-light">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </article>
          <div className="row g-5 mt-5">
            {authers.map((auther) => (
              <div key={auther.name} className="col-md-6 col-xl-4">
                <div className="inner d-flex flex-column align-items-center gap-2 my-bg-dark-card rounded-5 py-4 text-border-light">
                  <div className="w-25">
                    <img
                      src={auther.avatar}
                      className="w-100 rounded-circle text-border-primary"
                      alt=""
                    />
                  </div>
                  <h4 className="mb-0 mt-2 fw-bold text-white">
                    {auther.name}
                  </h4>
                  <p className="my-text-primary">{auther.role}</p>
                  <div className="links d-flex gap-3">
                    <a
                      className="text-decoration-none my-text-border-light my-bg-border p-3 rounded-4 text-border-light"
                      href="#"
                    >
                      <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                    <a
                      className="text-decoration-none my-text-border-light my-bg-border p-3 rounded-4 text-border-light"
                      href="#"
                    >
                      <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                    <a
                      className="text-decoration-none my-text-border-light my-bg-border p-3 rounded-4 text-border-light"
                      href="#"
                    >
                      <i className="fa-brands fa-x-twitter fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
