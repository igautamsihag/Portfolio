import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Skill from "../components/Skill";
import Footer from "../components/Footer";

export default function Skills() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                {!menuOpen && (
            <>
                
                <Skill />
                <Footer />
            </>
            )}
    </div>
  );
}
