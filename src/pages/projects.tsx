import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                {!menuOpen && (
            <>
                
                <Portfolio />
                <Footer />
            </>
            )}
    </div>
  );
}
