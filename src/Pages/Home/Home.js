import React from "react";
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import LoginDropdown from "../../Components/Navbar/components/LoginDropdown";

function Home() {
  return (
    <div>
      <Navbar />
      <LoginDropdown className="login-sub-nav" />
      <Header />
    </div>
  );
}

export default Home;
