import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import PersonCard from "../../components/PersonCard";

function Home() {
  return (
    <div className="bg-slate-400 h-screen">
      <NavBar />
      
      <body>
        <PersonCard />
      </body>
    </div>
  );
}

export default Home;
