import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CFHeader from "./components/CFHeader";
import Home from "./pages/cf-Landing"; // matches your `export default function Home()`
import "./App.css";
import Footer from "./components/Footer";
import PlayPage from "./pages/playPage";

function App() {
  return (
    <div className="app-container">
      <Router>
        <CFHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<PlayPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
