import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { NavbarComponent } from "../Components/Navbar";


const MainLayout = () => {
    return (
      <div>
        <NavbarComponent></NavbarComponent>
        <div className="min-h-40 my-6">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;