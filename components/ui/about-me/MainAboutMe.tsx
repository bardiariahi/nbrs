import BodyContainer from "@/components/BodyContainer";
import CustomTitles from "@/components/CustomTitles";
import LeftTopReverseWhitePortfolioBox from "@/components/LeftTopReverseWhitePortfolioBox";
import LeftTopWhitePortfolioBox from "@/components/LeftTopWhitePortfolioBox";
import RightBottomWhitePortfolioBox from "@/components/RightBottomWhitePortfolioBox";
import RightBottomReverseWhitePortfolioBox from "@/components/RightBottomReverseWhitePortfolioBox";

const MainAboutMe = () => {
  return (
    <BodyContainer>
      <div className="flex gap-1 flex-col">
        <CustomTitles englishTitle="about me" persianTitle="درباره من" />
        <div className="flex flex-row pt-10">
          <RightBottomWhitePortfolioBox>
            <span className="text-justify flex">
              من
              <h1>بردیا ریاحی</h1>
              هستم از دوران کودکی علاقه‌ی خاصی به کامپیوتر داشتم و در نوجوانی هم
              در این زمینه موفقیت هایی هم داشتم دانشگاه نیز به دنبال تحصیل در
              زمینه فناوری اطلاعات رفتم که شروع کردم به کلاس رفتن چون دانشگاه با
              زبان C آشنا شده بودم و مدارک asp .net و C# را داشتم تصمیم گرفتم
              android رو با زبان java یادبگیرم و مدارک فوق رو دریافت کردم و چند
              وقت بعد مشغول به کار شدم پس از مدتی تصمیم به فعالیت در زمینه‌ی
              برنامه نویسی گرفتم سپس وارد فیلد فرانت اند و طراحی سایت شدم و از
              این کار خوشم اومد.
            </span>
          </RightBottomWhitePortfolioBox>
        </div>
        <div className="flex flex-row-reverse">
          <LeftTopWhitePortfolioBox dir="ltr">
            <span className="text-justify">
              My name is Bardia Riahi. I had a special interest in computers
              since I was a child and I had success in this field as a teenager.
              I had .net and C# certificates and I decided to learn android with
              java language and received the above certificates and after some
              time I started working and After some time I decided to work in
              the field of programming. I liked this work.
            </span>
          </LeftTopWhitePortfolioBox>
        </div>
        <CustomTitles englishTitle="my skills" persianTitle="تجربیا من" />
        <div className="flex flex-row-reverse pt-10">
          <RightBottomReverseWhitePortfolioBox dir="ltr">
            <span className="text-justify">
              Basic experiences with c++ and c# and after that basic experiences
              with java for android and then after entering the world of front
              end familiarity with html5 to a normal extent and a little more,
              then familiarity with CSS3, sass and less and after that
              familiarity with javascript (3~4 years) at the normal level and a
              little more than usual, then familiarity with jquery, then
              bootstrap 3, bootstrap 4, bootstrap 5, and react js (3 years) at
              the normal level and a little more, then with redux, redux
              toolkit, and tanstack query, axios, graphql, typescript (1 year),
              react nativ (basic), next js (1~2 years), tanstack table, etc.
            </span>
          </RightBottomReverseWhitePortfolioBox>
        </div>
        <div className="flex flex-row pb-24">
          <LeftTopReverseWhitePortfolioBox>
            <span className="text-justify">
              تجربیات ابتدایی با c++ و c# و بعد از آن تجربیا ابتدایی با java
              برای android و سپس بعد از ورود به دنیای front end آشنایی با html5
              درحد معمولی و کمی بیشتر و سپس آشنایی با CSS3 و sass و less و بعد
              از این ها آشنایی با javascript(3~4 years) در حد معمولی و کمی بیشتر
              از معمولی و سپس آشنایی با jquery و سپس bootstrap 3 و bootstrap 4 و
              bootstrap 5 و react js(3 years) در حد معمولی و کمی بیشتر سپس با
              redux و redux toolkit و tanstack query و axios و graphql و
              typescript(1 year) و react nativ (basic) و next js(1~2 years) و
              tanstack table و غیره .
            </span>
          </LeftTopReverseWhitePortfolioBox>
        </div>
      </div>
    </BodyContainer>
  );
};

export default MainAboutMe;
