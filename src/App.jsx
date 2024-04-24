import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Repositories from './components/Repositories'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <section>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Repositories" element={<Repositories/>} />
        </Routes>
      </section>
    </>
  );
}

export default App;
