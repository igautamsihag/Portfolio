import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Education from "../components/Education"
import Footer from "../components/Footer"

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                {!menuOpen && (
            <>
                <Education />
                <Footer />
            </>
            )}
    </div>
  );
}
