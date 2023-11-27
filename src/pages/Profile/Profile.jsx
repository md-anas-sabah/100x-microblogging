import { useState, useEffect } from "react";
import MobileResponsive from "./MobileResponsive";
import DesktopResponsive from "./DesktopResponsive";

const Profile = () => {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setDesktop(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return <div>{desktop ? <DesktopResponsive /> : <MobileResponsive />}</div>;
};

export default Profile;
