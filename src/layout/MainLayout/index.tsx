import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
import "./MainLayout.scss";
import { Footer } from "../Footer";

export const MainLayout = () => {
  return (
    <div className="layout">
      <div className="content">
        <Navbar />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
