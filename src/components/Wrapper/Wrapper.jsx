import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className=" flex  wrapper relative max-h-screen  w-full min-h-screen flex-col">
      <Outlet />
    </div>
  );
};

export default Wrapper;
