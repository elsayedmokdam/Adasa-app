import classNames from "classnames";
import HomeCSS from "./Home.module.css";
import { Link, useLocation } from "react-router";
import { useEffect } from "react";

const posts = [
  {
    id: 1,
    slug: "mastering-golden-hour-photography",
    title: "إتقان تصوير الساعة الذهبية: دليل شامل",
    excerpt:
      "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",
    content:
      "الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.\n\n## لماذا الساعة الذهبية؟\n\nالضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.\n\n## التحضير المسبق\n\nخطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية.\n\n## إعدادات الكاميرا\n\nاستخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11 للمناظر الطبيعية الحادة.\n\n## التكوين الفني\n\nضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر. أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.\n\n## الخلاصة\n\nالساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تُنسى تتميز بجمالها الطبيعي.",
    category: "إضاءة",
    author: {
      name: "سالم أحمد",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      role: "مصور محترف",
    },
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",
    date: "2026-01-15",
    readTime: "8 دقائق للقراءة",
    featured: true,
    tags: ["إضاءة", "الساعة الذهبية", "تصوير خارجي"],
  },
  {
    id: 2,
    slug: "portrait-photography-secrets",
    title: "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
    excerpt:
      "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",
    content:
      "تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس مجرد توثيق الملامح، بل كشف القصة خلف العيون.\n\n## التواصل مع الموضوع\n\nقبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة. الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع.\n\n## اختيار العدسة المناسبة\n\nعدسات 85mm و 50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة.\n\n## الإضاءة الطبيعية\n\nالنافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد رائعة.\n\n## التركيز على العيون\n\nالعيون هي نافذة الروح. تأكد دائماً من أن العيون حادة ومركزة. استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.\n\n## الخلفية والتكوين\n\nاختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع العيون في النقاط القوية.\n\n## الخلاصة\n\nالبورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل الإنساني، تخلق صوراً خالدة.",
    category: "بورتريه",
    author: {
      name: "محمد علي",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      role: "مصور بورتريه",
    },
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    date: "2026-01-12",
    readTime: "6 دقائق للقراءة",
    featured: true,
    tags: ["بورتريه", "تصوير أشخاص", "إضاءة طبيعية"],
  },
  {
    id: 3,
    slug: "landscape-photography-guide",
    title: "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
    excerpt:
      "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",
    content:
      "تصوير المناظر الطبيعية هو رحلة إلى قلب الطبيعة. إنه فن يتطلب الصبر والتخطيط والعين الفنية لرؤية الجمال في كل مكان.\n\n## المعدات الأساسية\n\nحامل ثلاثي قوي ضروري للحصول على صور حادة. عدسة واسعة الزاوية (16-35mm) مثالية لالتقاط المشاهد الواسعة. فلاتر ND و Polarizer ستفتح لك آفاقاً إبداعية جديدة.\n\n## توقيت التصوير\n\nالساعة الزرقاء والساعة الذهبية هي أفضل الأوقات. الضوء يكون ناعماً والألوان غنية. لا تخف من التصوير في الطقس الدرامي - الغيوم والعواصف تضيف شخصية للصورة.\n\n## التكوين الفني\n\nابحث عن عناصر المقدمة المثيرة للاهتمام. صخرة، زهرة، أو مسار يقود العين نحو الخلفية. استخدم خطوط التوجيه لخلق عمق في الصورة.\n\n## إعدادات الكاميرا\n\nفتحة f/8-f/16 للحصول على حدة من المقدمة للخلفية. ISO منخفض قدر الإمكان. استخدم وضع Live View والتكبير للتركيز اليدوي الدقيق.\n\n## المعالجة اللاحقة\n\nصور بصيغة RAW لأقصى مرونة في التعديل. تعديل الإضاءة والألوان بلطف يبرز جمال المشهد دون إفراط.\n\n## الخلاصة\n\nتصوير المناظر الطبيعية يعلمك التأمل والصبر. كل صورة هي ذكرى من رحلة لا تُنسى.",
    category: "مناظر طبيعية",
    author: {
      name: "إبراهيم حسن",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      role: "مصور طبيعة",
    },
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    date: "2026-01-10",
    readTime: "10 دقائق للقراءة",
    featured: true,
    tags: ["مناظر طبيعية", "تصوير خارجي", "طبيعة"],
  },
];

const Latest = [
  {
    id: 4,
    slug: "camera-settings-basics",
    title: "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",
    excerpt:
      "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.",
    content:
      "مثلث التعريض الضوئي هو أساس كل صورة ناجحة. فهم هذه العناصر الثلاثة يحررك من الوضع التلقائي ويمنحك السيطرة الإبداعية الكاملة.\n\n## فتحة العدسة (Aperture)\n\nفتحة العدسة تتحكم في كمية الضوء وعمق الميدان. الأرقام الصغيرة (f/1.4, f/2.8) تعني فتحة أكبر، ضوء أكثر، وخلفية ضبابية. الأرقام الكبيرة (f/11, f/16) تعني حدة أكبر في كل الصورة.\n\n## سرعة الغالق (Shutter Speed)\n\nسرعة الغالق تتحكم في تجميد الحركة. 1/500 ثانية تجمد الرياضيين، 1/60 مناسبة للمواضيع الثابتة، والسرعات البطيئة تخلق تأثيرات ضبابية إبداعية.\n\n## حساسية ISO\n\nISO هو حساسية المستشعر للضوء. ISO 100-400 للإضاءة الجيدة، أعلى من ذلك للإضاءة المنخفضة. كلما زاد ISO، زادت الضوضاء في الصورة.\n\n## التوازن بين الثلاثة\n\nهذه العناصر مترابطة. إذا زدت واحداً، يجب تعديل الآخرين للحفاظ على التعريض الصحيح. تدرب على الوضع اليدوي حتى تصبح هذه العلاقة طبيعية.\n\n## نصائح عملية\n\nابدأ بوضع أولوية فتحة العدسة (Av/A) للتحكم في عمق الميدان، أو أولوية الغالق (Tv/S) للتحكم في الحركة.\n\n## الخلاصة\n\nإتقان مثلث التعريض يفتح لك عالماً من الإبداع. تدرب يومياً وستصبح هذه الإعدادات طبيعة ثانية.",
    category: "تقنيات",
    author: {
      name: "داود خالد",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      role: "مدرب تصوير",
    },
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop",
    date: "2026-01-08",
    readTime: "7 دقائق للقراءة",
    featured: false,
    tags: ["إعدادات الكاميرا", "مبتدئين", "تقنيات"],
  },
  {
    id: 5,
    slug: "photo-composition-rules",
    title: "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
    excerpt:
      "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",
    content:
      "التكوين هو الفرق بين صورة عادية وصورة استثنائية. إنه كيفية ترتيب العناصر داخل الإطار لتوجيه عين المشاهد وإيصال رسالتك.\n\n## قاعدة الأثلاث\n\nقسّم الإطار إلى تسعة أجزاء متساوية بخطين أفقيين وعموديين. ضع العناصر المهمة على هذه الخطوط أو تقاطعاتها للحصول على توازن بصري جذاب.\n\n## الخطوط التوجيهية\n\nاستخدم الخطوط الطبيعية في المشهد - طريق، نهر، سور - لقيادة عين المشاهد نحو الموضوع الرئيسي.\n\n## الإطار داخل الإطار\n\nاستخدم عناصر في المقدمة كإطار طبيعي: باب، نافذة، أغصان شجرة. هذا يضيف عمقاً ويركز الانتباه.\n\n## التماثل والأنماط\n\nالتماثل يخلق شعوراً بالهدوء والتوازن. الأنماط المتكررة تجذب العين. كسر النمط يخلق نقطة اهتمام قوية.\n\n## المساحة السلبية\n\nلا تخف من الفراغ. المساحة الفارغة حول الموضوع يمكن أن تكون قوية بنفس قوة الموضوع نفسه.\n\n## كسر القواعد\n\nاعرف القواعد جيداً، ثم اكسرها بوعي. أحياناً الصورة غير التقليدية هي الأقوى تأثيراً.\n\n## الخلاصة\n\nالتكوين مهارة تتطور مع الممارسة. صوّر كثيراً، ادرس أعمال المصورين العظماء، وطور عينك الفنية.",
    category: "تقنيات",
    author: {
      name: "ليث محمود",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      role: "فنان بصري",
    },
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop",
    date: "2026-01-05",
    readTime: "9 دقائق للقراءة",
    featured: false,
    tags: ["تكوين", "قواعد التصوير", "فن"],
  },
  {
    id: 6,
    slug: "mobile-photography-tips",
    title: "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",
    excerpt:
      "اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",
    content:
      "أفضل كاميرا هي التي معك دائماً. هاتفك الذكي يمكن أن يلتقط صوراً مذهلة إذا عرفت كيف تستخدمه بشكل صحيح.\n\n## نظّف العدسة\n\nأبسط نصيحة وأهمها. العدسة المتسخة تسبب ضبابية وفقدان للتباين. امسحها بقطعة قماش ناعمة قبل كل جلسة تصوير.\n\n## استخدم الإضاءة الطبيعية\n\nكاميرات الهواتف تتألق في الإضاءة الجيدة. صوّر بالقرب من النوافذ أو في الخارج. تجنب الإضاءة القاسية المباشرة.\n\n## ثبّت يدك\n\nالاهتزاز عدو الصورة الحادة. أمسك الهاتف بكلتا يديك، اسند مرفقيك على جسمك، أو استخدم حاملاً ثلاثياً صغيراً.\n\n## تجنب التكبير الرقمي\n\nالتكبير الرقمي يفقد الجودة. بدلاً من ذلك، اقترب من موضوعك أو قص الصورة لاحقاً.\n\n## جرب تطبيقات التصوير\n\nتطبيقات مثل Lightroom Mobile و VSCO توفر تحكماً يدوياً وأدوات تحرير قوية. صوّر بصيغة RAW إذا كان هاتفك يدعمها.\n\n## التكوين مهم\n\nفعّل شبكة الأثلاث في إعدادات الكاميرا. طبق قواعد التكوين نفسها التي تستخدمها مع الكاميرا الاحترافية.\n\n## الخلاصة\n\nهاتفك أداة إبداعية قوية. المهارة والعين الفنية أهم من المعدات. صوّر كل يوم وشاهد تطورك.",
    category: "معدات",
    author: {
      name: "جمال عبدالله",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
      role: "مصور ومراجع تقني",
    },
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    date: "2026-01-03",
    readTime: "8 دقائق للقراءة",
    featured: false,
    tags: ["تصوير الهاتف", "نصائح", "مبتدئين"],
  },
];

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
            {posts.map((post) => (
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
