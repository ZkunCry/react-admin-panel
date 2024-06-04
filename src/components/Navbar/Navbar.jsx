import SurguLogo from "../../assets/logo.png";

import { useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/user/userSlice";
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";
const Navbar = () => {
  const user = useSelector(getCurrentUser);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule={"evenodd"}
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link to={"/"} className="flex ms-2 md:me-24">
              <img
                className="max-h-[45px]"
                src={SurguLogo}
                alt="SurguLogo"
              ></img>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div className="flex gap-2 items-center">
                <Avatar imgClass="h-[40px] w-[40px]" user={user} />
                <span className="font-semibold">{user.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
