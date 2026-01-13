import React,{ useState } from "react";
import Navbar from "../components/Navbar"
import Homepage from "../components/Homepage"

export default function Home(){
  const [menuOpen, setMenuOpen] = useState(false);
  return(
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {!menuOpen && <Homepage />}
    </div>
  )
}