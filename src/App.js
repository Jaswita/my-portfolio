import React, { useState } from "react";
import './style.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import CursorFx from './components/CursorFx';

function App() {
  const [activePage, setActivePage] = useState("about");

  return (
    <main>
      <CursorFx />
      <Sidebar />
      <div className="main-content">
        <Navbar setActivePage={setActivePage} activePage={activePage} />
        {activePage === "about" && <About />}
        {activePage === "resume" && <Resume />}
        {activePage === "portfolio" && <Portfolio />}
        {activePage === "contact" && <Contact />}
      </div>
    </main>
  );
}

export default App;