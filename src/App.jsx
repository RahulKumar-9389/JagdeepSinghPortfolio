import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Cursor from "./components/cursor/Cursor";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import TransactionEffect from "./components/TransactionEffect";
import { AnimatePresence } from "framer-motion";


const App = () => {

  return <>
    <Cursor />

    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  </>
};

export default App;