import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/cf-Landing"; // matches your `export default function Home()`
import "./App.css";
import Footer from "./components/Footer";
import PlayPage from "./pages/playPage";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Play" element={<PlayPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
