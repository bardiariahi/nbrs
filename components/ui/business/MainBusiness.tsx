import BodyContainer from "@/components/BodyContainer";
import Image from "next/image";
import uiUx from "../../../public/styles/images/ui-ux.png";
import ux from "../../../public/styles/images/ux.jpg";
import businessMan from "../../../public/styles/images/businessman.jpg";
import Link from "next/link";

const MainBusiness = () => {
  return (
    <BodyContainer>
      <div className="w-8/12 mx-auto pt-5">
        <div className="pb-3">
          <b>طراحی سایت برای کسب و کار ها</b>
        </div>
        <div>
          <p>
            طراحی سایت برای کسب و کار ها امری بسیار مهم است. یک وبسایت حرفه ای و
            جذاب می‌تواند به کسب و کار شما کمک کند تا به مشتریان بیشتری دسترسی
            پیدا کند و رشد کند. در طراحی سایت برای کسب و کار ها، چندین عامل باید
            مد نظر قرار گیرد.
          </p>
          <p>
            با طراحی سایت کسب و کار ها میتوانند بخش بیشتر از محصولات خود را به
            مشتریان نمایش دهند و محصولات خود را با کمترین زمان و بالاترین سرعت
            به بازار عرضه کنند.
          </p>

          <div className="py-10 flex justify-center items-center">
            <Image alt="ui / ux" src={businessMan} height={80} width={700} draggable={false} />
          </div>
        </div>
        <div className="py-3">
          <b className="w-full flex pb-3">
            طراحی رابط کاربری (User Interface):
          </b>
          <span>
            طراحی رابط کاربری به ایجاد یک ظاهر زیبا و کاربرپسند برای وبسایت
            می‌پردازد. این شامل طراحی منوها، دکمه‌ها، فرم‌ها و سایر عناصر تعاملی
            است.
          </span>
          <div className="py-10 flex justify-center items-center">
            <Image alt="ui / ux" src={uiUx} height={80} width={700} draggable={false} />
          </div>
        </div>
        <div className="py-3">
          <b className="w-full flex pb-3">تجربه کاربری (User Experience):</b>
          <span>
            تجربه کاربری به بهبود تجربه کاربران در استفاده از وبسایت می‌پردازد.
            این شامل سرعت بارگذاری صفحات، سازگاری با دستگاه‌های مختلف، ساختار
            منطقی و آسان برای استفاده و سایر عوامل است.
          </span>
          <div className="py-10 flex justify-center items-center">
            <Image alt="ux" src={ux} height={80} width={700} draggable={false} />
          </div>
        </div>
        <div className="py-3">
          <b className="w-full flex pb-3">بهینه سازی موتورهای جستجو (SEO):</b>
          <span>
            بهینه سازی موتورهای جستجو به بهبود رتبه وبسایت در نتایج جستجوی
            موتورهای جستجو مانند گوگل می‌پردازد. این شامل استفاده از کلمات کلیدی
            مناسب، بهینه سازی ساختار وبسایت و ایجاد محتوای با کیفیت است.
          </span>
        </div>
        <div className="py-3">
          <b className="w-full flex pb-3">امنیت و حفاظت اطلاعات:</b>
          <span>
            در طراحی سایت برای کسب و کار ها، امنیت و حفاظت اطلاعات مشتریان بسیار
            مهم است. باید از استانداردهای امنیتی مورد قبول استفاده کرده و
            اطلاعات مشتریان را محافظت کرد.
          </span>
        </div>
        <div className="py-3">
          <b className="w-full flex pb-3">سرعت بارگذاری صفحات:</b>
          <span>
            سرعت بارگذاری صفحات وبسایت نقش مهمی در تجربه کاربری دارد. باید از
            تکنیک‌های بهینه سازی مانند فشرده‌سازی تصاویر و استفاده از سرورهای
            قوی استفاده کرد تا صفحات به سرعت بارگذاری شوند.
          </span>
        </div>
        <div className="py-3">
          <b className="w-full flex pb-3">
            قابلیت پاسخگویی به دستگاه‌های مختلف:
          </b>
          <span>
            با توجه به استفاده گسترده از تلفن همراه و دستگاه‌های هوشمند، وبسایت
            باید قابلیت نمایش و بهینه سازی برای این دستگاه‌ها را داشته باشد.
          </span>
        </div>
        <div className="py-3">
          <b className="w-full flex pb-3">محتوا:</b>
          <span>
            محتوای وبسایت باید جذاب و مفید باشد. باید اطلاعات کافی درباره کسب و
            کار و محصولات یا خدمات ارائه شده در دسترس باشد.
          </span>
        </div>
        <div className="py-3">
          <b className="w-full flex pb-3">طراحی وبسایت ریسپانسیو:</b>
          <span>
            طراحی وبسایت ریسپانسیو به معنای طراحی وبسایتی است که به طور خودکار
            با توجه به اندازه صفحه نمایش دستگاه، ظاهر و ساختار خود را تغییر
            می‌دهد. این باعث می‌شود که وبسایت بر روی تمامی دستگاه‌ها به خوبی
            نمایش داده شود.
          </span>
        </div>
        <div className="pt-3 pb-20">
          <p>
            با توجه به اهمیت طراحی سایت برای کسب و کار ها، توصیه می‌شود با یک
            تیم حرفه‌ای طراحی و توسعه وبسایت همکاری کنید تا بهترین نتیجه را بدست
            آورید.
          </p>
          <p>
            برای مشاوره و یا دریافت قیمت محصولات می توانید با ما از طریق
            <Link href="/contact-us">ارتباط با ما</Link>
            در تماس باشید.
          </p>
        </div>
      </div>
    </BodyContainer>
  );
};

export default MainBusiness;
