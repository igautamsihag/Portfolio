import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Education from "../components/Education"
import Footer from "../components/Footer"
import Experience from "../components/Experience";
import Volunteer from "../components/Volunteer";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                {!menuOpen && (
            <>
                <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
                  <div className="snap-start">
                    <Education />
                  </div>
                  <div className="snap-start">
                    <Experience />
                  </div>
                  <div className="snap-start">
                    <Volunteer />
                  </div>
                </div>
                <Footer />
            </>
            )}
    </div>
  );
}
