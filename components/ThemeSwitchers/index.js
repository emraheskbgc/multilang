import React,{useState} from 'react'
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";


function ThemeSwitchers() {
    const [isSun, setIsSun] = useState(false);
    const { theme, setTheme } = useTheme();
    const handleThemeToggle = () => {
        setIsSun(!isSun);
        if (theme === "light") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };
  return (
   <>{isSun ? (
    <FiSun
      className="w-5 h-5 cursor-pointer hover:text-purple-900 dark:text-white text-purple-500"
      onClick={handleThemeToggle}
    />
  ) : (
    <FaMoon
      className="w-5 h-5 cursor-pointer hover:text-purple-500"
      onClick={handleThemeToggle}
    />
  )}
   </>
  )
}

export default ThemeSwitchers