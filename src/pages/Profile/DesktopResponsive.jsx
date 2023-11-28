/* eslint-disable no-unused-vars */
import Feed from "../../components/Profile/Feed";
import LeftSidebar from "../../components/Home/LeftSidebar";
import RightSidebar from "../../components/Home/RightSidebar";

function DesktopResponsive() {
  return (
    <div className="flex h-screen w-[70%] ml-auto mr-auto">
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  );
}

export default DesktopResponsive;
