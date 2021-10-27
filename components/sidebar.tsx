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
  const { theme } = useTheme();

  return (
    <div
      className=" top-0 left-0 h-screen w-20 flex flex-col
                    shadow-lg dark:bg-gray-800  bg-blue-50 gap-y-2
                     "
    >
      <div className="text-center text-lg uppercase"></div>
      <SideBarIcon icon={<AiFillHome size="28" />} text="Home" />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      <Divider />
      <div className="mt-auto">
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
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="sidebar-icon group"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100 normal-case">
        {text}
      </span>
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
