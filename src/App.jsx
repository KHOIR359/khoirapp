import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from "./pages/Main";
import './assets/css/components/navbar.css';
import Tabungan from "./pages/Tabungan";
import Music from "./pages/Music";

const setActive=(e)=>{
  console.log(e)
  const lists = e.target.parentNode.parentNode.querySelectorAll("li");
  Array.from(lists).forEach((e,i)=>{
    e.classList.remove("active");
  })
  e.target.parentNode.classList.add("active");
}

function App() {
  return (
    <div className="App"> 
      <Router>
        <div>
          <nav id="mainNavbar">
            <ul>
              <li className={document.location.href.split("/")[3] === "" ? "active":""}>
                <Link onClick={setActive} to="/">Home</Link>
              </li>
              <li className={document.location.href.split("/")[3] === "tabungan"? "active":""}>
                <Link onClick={setActive} to="/tabungan">Tabungan</Link>
              </li>
              <li className={document.location.href.split("/")[3] === "musics"? "active":""}>
                <Link onClick={setActive} to="/musics">Musics</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/tabungan" element={<Tabungan />} />
            <Route path="/musics" element={<Music />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
