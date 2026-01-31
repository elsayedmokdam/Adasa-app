import classNames from "classnames"
import NotFoundCSS from "./NotFound.module.css"
import { Link } from "react-router"

export default function NotFound() {
  return (
    <>
      <div className={classNames("grid_bg d-flex flex-column align-items-center justify-content-center min-vh-100 mt-5")}>
          <h3 className={classNames(NotFoundCSS.number_style, "fw-bold mb-5")}>4 0 4</h3>
        <div className={`text-center`}>
          <div className={classNames("my-text-primary display-3 position-relative py-5 rounded-circle", NotFoundCSS.after, NotFoundCSS.before)}>
            <i className="fa-regular fa-face-frown fa-2xl"></i>
          </div>
        </div>
        <div className="container col-md-4 text-center">
            <p className={classNames("fw-bold lead text-white fs-3 mt-5")}>عفواً! الصفحة غير موجودة</p>
            <p className={classNames("fw-bold lead mt-3 my-text-border-light")}>الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.</p>
        </div>
        <div className="buttons d-flex gap-3 flex-column flex-lg-row ">
            <Link className="text-decoration-none btn btn-warning text-white rounded-pill py-3 px-5 fw-bold" to="/home">الذهاب للرئيسية</Link>
            <Link className="text-decoration-none btn btn-warning text-white rounded-pill py-3 px-5 fw-bold" to="/blog">تصفح المقالات</Link>
        </div>
      </div>
    </>
  )
}
