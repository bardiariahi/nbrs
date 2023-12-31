"use client";
import BodyContainer from "@/components/BodyContainer";
// import Lottie from "react-lottie";
import animationData from "../../../public/styles/lotties/about.json";
import Image from "next/image";

type HTypes = {};

const HomeMain: React.FC<HTypes> = ({}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <BodyContainer>
      <div className="flex justify-center items-center">
        <div className="w-6/12 py-10">
          <div>
            <p className="text-2xl font-bold">
            به وبسابت من خوش آمدید
            </p>
            <p>
              من بردیا ریاحی هستم و در وب سایتم قصد این رو دارم شما رو با برنامه نویسی آشنا کنم.
            </p>
            <p>
              امیدوارم مطالبم کمکی به شما بکنه  .
            </p>
          </div>
          <div className="pt-10">
            <p>
              برنامه‌نویس یک فرد است که توانایی نوشتن و توسعه کد‌های کامپیوتری
              را دارد. برنامه‌نویسان می‌توانند در زمینه‌های مختلفی فعالیت کنند،
              از جمله توسعه نرم‌افزارها، طراحی وبسایت‌ها، تحلیل داده‌ها، ایجاد
              برنامه‌های موبایل و بسیاری از دیگر زمینه‌های مرتبط با فناوری
              اطلاعات و کامپیوتر.
            </p>
            <p>برنامه نویس ها به ۳ دسته تقسیم میشن</p>
          </div>

          <div className="flex w-full gap-4 pt-10">
            <div className="w-full">
              <b className="text-lg font-bold">&rdquo;front-end developer&rdquo;</b>
              <p className="text-lg pt-10">
                این دسته از برنامه نویس ها با تمرکز بر روی طراحی سایت و تکنولوژی
                های مربوط به آن در زمینه‌ی طراحی سایت دارند.
              </p>
            </div>
            <div className="w-full">
              <Image draggable="false" alt="front end developer image" src="/styles/images/hero1.png" height={500} width={1000} />
            </div>
          </div>

          <div className="flex w-full gap-4 pt-10">
            <div className="w-full">
            <Image draggable="false" alt="back end developer image" src="/styles/images/hero2.png" height={500} width={1000} />
            </div>
            <div className="w-full">
              <b className="text-lg font-bold">&rdquo;back-end developer&rdquo;</b>
              <p className="text-lg pt-10">
                این دسته از برنامه نویس ها با تمرکز بر روی توسعه‌ی بخش سرور و وب
                سرویس ها و ... هستند.
              </p>
            </div>
          </div>

          <div className="flex w-full gap-4 pt-10">
            <div className="w-full">
              <b className="text-lg font-bold">&rdquo;fullstack developer&rdquo;</b>
              <p className="text-lg pt-10">
                این دسته از برنامه نویس ها بر کلیات front و back آگاهی و اطلاع
                دارند و میتوانند به صورت کامل کل کارهارا تنها خودشان انجام دهند
                اما تسلط و به روز بودن در زمینه های back و front را معمولا
                ندارند.
              </p>
            </div>
            <div className="w-full">
            <Image draggable="false" alt="fullstack developer image" src="/styles/images/hero3.png" height={500} width={1000} />
            </div>
          </div>

          <div className="pt-10">
            <Image draggable="false" alt="developer image" src="/styles/images/bg-development.jpg" height={500} width={1000} />
          </div>

          <div className="pt-10">
            <p className="pb-5 font-bold text-lg">
              برنامه‌نویسان می‌توانند انواع مختلفی از کارها را انجام دهند. برخی
              از این کارها عبارتند از:
            </p>
            <div>
              <ul className="list-disc px-10 text-lg">
                <li>
                  توسعه نرم‌افزار: برنامه‌نویسان می‌توانند نرم‌افزارهای مختلفی
                  را توسعه دهند، از جمله نرم‌افزارهای دسکتاپ، نرم‌افزارهای
                  موبایل و نرم‌افزارهای وب.
                </li>
                <li>
                  طراحی وبسایت: برنامه‌نویسان می‌توانند وبسایت‌های مختلفی را
                  طراحی و توسعه دهند. آن‌ها می‌توانند در زمینه‌های مختلفی از
                  جمله طراحی رابط کاربری (UI)، توسعه جانب سمت کاربر (Front-End)
                  و توسعه جانب سمت سرور (Back-End) فعالیت کنند.
                </li>
                <li>
                  تحلیل داده‌ها: برنامه‌نویسان می‌توانند در تحلیل و پردازش
                  داده‌ها به کار گرفته شوند. آن‌ها می‌توانند الگوریتم‌ها و
                  مدل‌های مختلفی را برای تحلیل داده‌ها طراحی و پیاده‌سازی کنند.
                </li>
                <li>
                  توسعه برنامه‌های موبایل: برنامه‌نویسان می‌توانند برنامه‌های
                  موبایل را برای سیستم‌عامل‌های مختلف مانند iOS و Android توسعه
                  دهند.
                </li>
                <li>
                  توسعه بازی: برنامه‌نویسان می‌توانند بازی‌های کامپیوتری را
                  طراحی و توسعه دهند.
                </li>
                <li>
                  توسعه رباتیک: برنامه‌نویسان می‌توانند در توسعه ربات‌ها و
                  سیستم‌های هوشمند فعالیت کنند.
                </li>
              </ul>
            </div>
            <div className="pt-5">
              <p className="text-lg">
                این فقط چند نمونه از کارهایی هستند که برنامه‌نویسان می‌توانند
                انجام دهند. همچنین، برنامه‌نویسان می‌توانند در زمینه‌های مختلفی
                از جمله هوش مصنوعی، امنیت اطلاعات، اینترنت اشیا و بلاکچین فعالیت
                کنند.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BodyContainer>
  );
};

export default HomeMain;
