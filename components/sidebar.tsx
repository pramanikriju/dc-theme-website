import {
  BsPlus,
  BsFillLightningFill,
  BsSunFill,
  BsFillMoonFill,
} from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { useTheme } from "next-themes";

const SideBar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className=" top-0 left-0 h-screen w-20 flex flex-col
                    shadow-lg dark:bg-gray-800  bg-blue-50 gap-y-2
                     "
    >
      <div className="text-center text-lg uppercase"></div>

      <div
        className="mt-auto mb-3"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <SideBarIcon
          icon={
            theme === "dark" ? (
              <BsSunFill size="22" />
            ) : (
              <BsFillMoonFill size="22" />
            )
          }
          text={`Toggle ${theme} mode`}
        />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "Info 💡", ...props }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100 normal-case">
        {text}
      </span>
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
