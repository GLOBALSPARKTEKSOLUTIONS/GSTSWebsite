import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/technologies") {
      console.log("ScrollToTop: Scrolling to top for pathname:", pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.log("ScrollToTop: Skipped for /technologies");
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;