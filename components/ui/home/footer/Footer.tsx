import { FaYoutube } from "react-icons/fa6";
import { TfiLinkedin } from "react-icons/tfi";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { AiOutlineGitlab } from "react-icons/ai";
import { IoLogoStackoverflow } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer p-10 pb-2 bg-gray-300 dark:bg-neutral text-black dark:text-neutral-content flex flex-col w-full">
      <div className="flex w-full justify-between ">
        <nav className="w-1/3">
          <header className="footer-title">شبکه‌ها اجتمایی</header>
          <div className="flex gap-4 items-center">
            <a className="hover:text-blue-500 duration-300" href="https://studio.youtube.com/channel/UCEsVuwKq5TWAOYPXq7Nv_Pg/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D">
              <FaYoutube className="h-5 w-5" />
            </a>
            <a className="hover:text-blue-500 duration-300" href="https://www.linkedin.com/in/bardia-riahi-9a4252153/">
              <TfiLinkedin className="h-5 w-5" />
            </a>
            <a className="hover:text-blue-500 duration-300" href="mailto:bardiariahi@gmail.com">
              <IoIosMail className="h-5 w-5" />
            </a>
            <a className="hover:text-blue-500 duration-300" href="https://github.com/bardiariahi">
              <FaGithub className="h-5 w-5" />
            </a>
            <a className="hover:text-blue-500 duration-300" href="https://gitlab.com/bardiariahi">
              <AiOutlineGitlab className="h-5 w-5" />
            </a>
            <a className="hover:text-blue-500 duration-300" href="https://stackoverflow.com/users/13192014/bardia-riahi">
              <IoLogoStackoverflow className="h-5 w-5" />
            </a>
          </div>
          <div className="flex gap-4 pt-4"></div>
        </nav>
        <nav className="flex gap-2 flex-col w-1/2">
          <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex gap-2 flex-col w-1/2">
          <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav>
      </div>
      <div className="mx-auto">
      توسعه یافته با ❤️ توسط بردیا ریاحی | ۱۴۰۲  &copy;
      </div>
    </footer>
  );
};

export default Footer;
