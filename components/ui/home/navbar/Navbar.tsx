import Link from "next/link";
import { MENU } from "@/constance/constance";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import ThemeToggle from "../../../../helpers/ThemeToggle"

type NTypes = {
 
};

const Navbar: React.FC<NTypes> = ({ 

}) => {
  const currentPath = usePathname()
 
  return (
    <nav
      className={`navbar sticky z-40 top-0 shadow-xl bg-base-300 dark:bg-neutral dark:text-neutral-content`}>
      <div className="flex w-full justify-between flex-row-reverse	">
        <div className="flex order-2 md:order-1">
          <div className="h-10 w-10 grid">
          <ThemeToggle />
          </div>
        </div>
        {/* <div className="order-2 justify-center items-center"><b className="text-3xl" >bardia riahi</b></div> */}
        <div className="hidden md:flex gap-3 pr-3 order-1 md:order-2">
          {MENU.map((link: any) => (
            <Link key={link.id} href={link.path}>
              <span 
                className={classNames({
                  "hover:text-blue-400 duration-300 text-lg" : true,
                  "font-bold text-blue-600" : currentPath === link.path
                })}
              >
                {link.title}
              </span>
            </Link>
          ))}
        </div>
        <div dir="rtl" className="mr-2 flex md:hidden order-2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {MENU.map((link: any) => (
                <Link key={link.id} href={link.path}>
                  <span 
                  className={classNames({
                    "hover:text-blue-400 duration-300 text-lg" : true,
                    "font-bold text-blue-600" : currentPath === link.path
                  })}
                  >
                    {link.title}
                  </span>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
