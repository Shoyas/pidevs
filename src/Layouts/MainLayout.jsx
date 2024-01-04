import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedComponents/Navbar/Navbar";
import Footer from "../Components/SharedComponents/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-3">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
