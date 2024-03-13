import { Routes, Route } from "react-router-dom";
import Navber from "./components/Navber";

import Home from "./page/Home";
import About from "./page/About";
import About_index from "./page/About_index";
import About_page from "./page/About_page";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "./assets/scss/all.scss";

function App() {
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <Navber />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}>
          <Route index element={<About_index />}></Route>
          <Route path="about_index" element={<About_index />}></Route>
          <Route path="about_page" element={<About_page />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
