import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/cf-Landing' // matches your `export default function Home()`
import './App.css'

function Placeholder({ title }: { title: string }) {
  return <div className="placeholder">{title} Page Coming Soon</div>;
}

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Placeholder title="Cards" />} />
          <Route path="/learn" element={<Placeholder title="Learn" />} />
          <Route path="/lore" element={<Placeholder title="Lore" />} />
          <Route path="/events" element={<Placeholder title="Events" />} />
          <Route path="/about" element={<Placeholder title="About" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />
          <Route path="/shop" element={<Placeholder title="Shop" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



