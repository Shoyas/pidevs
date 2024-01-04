import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navigation = (
    <>
      <NavLink
        to="/"
        className={
          ("text-base font-semibold",
          ({ isActive }) => (isActive ? "text-[#0C5ADB]" : "text-[#453F41]"))
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={
          ("text-base font-semibold",
          ({ isActive }) => (isActive ? "text-[#0C5ADB]" : "text-[#453F41]"))
        }
      >
        About
      </NavLink>
      <NavLink
        to="/works"
        className={
          ("text-base font-semibold",
          ({ isActive }) => (isActive ? "text-[#0C5ADB]" : "text-[#453F41]"))
        }
      >
        Works
      </NavLink>
      <NavLink
        to="/our-team"
        className={
          ("text-base font-semibold",
          ({ isActive }) => (isActive ? "text-[#0C5ADB]" : "text-[#453F41]"))
        }
      >
        Our Team
      </NavLink>
    </>
  );
  return (
    <div className="drawer z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full flex justify-between flex-row-reverse lg:flex-row items-center bg-transparent py-6 pl-3 lg:pl-0 text-white">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link to="/">
            <div className="text-2xl font-semibold text-[#453F41]">PiDevs</div>
          </Link>
          <div className="flex-none hidden lg:block">
            <ul className="menu-horizontal flex items-center gap-5">
              {/* Navbar menu content here */}
              {navigation}
            </ul>
          </div>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-[#323232] rounded-full hover:bg-white group"
            >
              <span className="w-60 h-48 rounded rotate-[-40deg] bg-[#0C5ADB] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Contact
              </span>
            </Link>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#A8DEFE] text-white">
          {/* Sidebar content here */}
          <li>{navigation}</li>
          <div className="mx-auto my-5">
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-[#323232] rounded-full hover:bg-white group"
            >
              <span className="w-60 h-48 rounded rotate-[-40deg] bg-[#0C5ADB] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Contact
              </span>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
