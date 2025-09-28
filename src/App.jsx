import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from './pages/About'
import Menu from './pages/Menu'
import Footer from './components/Footer'
export default function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
      <Footer />
    </div>
  );
}
