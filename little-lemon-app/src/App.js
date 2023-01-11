import "./styling/App.css";
import Header from "./components/header";
import About from "./components/about";
import Reservation from "./components/reservation";
import Contactus from "./components/contactus";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="*" element={<div> 404 </div>} />
      </Routes>
    </main>
  );
}

export default App;
