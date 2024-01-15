import Image from "next/image";
import nFImg from "../public/styles/images/NoutFound.png";
import BodyContainer from "@/components/BodyContainer";
import Link from "next/link";

const notFound = () => {
  return (
    <BodyContainer>
      <div className="flex justify-center items-center pt-20">
        <Image
          alt="404"
          height={100}
          width={700}
          src={nFImg}
          draggable={false}
        />
      </div>
      <div className="text-center py-20">
        <div>
          <span className="text-7xl font-bold">صفحه مورد نظر شما یافت نشد</span>
        </div>
        <div className="pt-5">
          <Link className="btn hover:text-blue-600 duration-300" href="/">
            خانه
          </Link>
        </div>
      </div>
    </BodyContainer>
  );
};

export default notFound;
