import { useContext } from "react";
import { todoListContext } from "../../context/context";
import bgMobileLight from "../../assets/images/bg-mobile-light.jpg";
import bgDesktopLight from "../../assets/images/bg-desktop-light.jpg";
import bgMobileDark from "../../assets/images/bg-mobile-dark.jpg";
import bgDesktopDark from "../../assets/images/bg-desktop-dark.jpg";

export default function Images() {
  const { isDarkMode } = useContext(todoListContext);
  console.log(isDarkMode);
  return (
    <>
      {isDarkMode ? (
        <>
          <img src={bgMobileDark} alt="" className="md:hidden " />
          <img src={bgDesktopDark} alt="" className="hidden md:flex " />
        </>
      ) : (
        <>
          <img src={bgMobileLight} alt="" className="md:hidden " />
          <img
            src={bgDesktopLight}
            alt=""
            className="hidden md:flex dark:hidden"
          />
        </>
      )}
      ;
    </>
  );
}
