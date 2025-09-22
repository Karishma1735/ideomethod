import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer"; 


const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#000002]">

      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer at the bottom */}
      <Footer/>
    </div>
  );
};

export default Layout;
