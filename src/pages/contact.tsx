import React,{ useState } from "react";
import Navbar from "../components/Navbar"
import Form from "../components/Form"
import Footer from "../components/Footer"

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          {!menuOpen && (
        <>
          <div className="flex items-center justify-center min-h-screen dot-pattern">
          <Form />
          </div>
        <Footer />
        </>
          )}
    </div>
  );
}
