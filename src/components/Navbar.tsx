import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function getTimeRemaining(targetDate: Date) {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

function Navbar() {
  const targetDate = new Date("2025-09-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <header className="navbar-header">
      <div className="countdown-bar">
        <div className="countdown-text">
          <div className="countdown-label">Kickstarter coming soon</div>
          {/* <div className="countdown-digits">
            <div>
              <span>{timeLeft.days.toString().padStart(2, "0")}</span>
              <small>days</small>
            </div>
            <div className="colon">:</div>
            <div>
              <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
              <small>hours</small>
            </div>
            <div className="colon">:</div>
            <div>
              <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
              <small>minutes</small>
            </div>
            <div className="colon">:</div>
            <div>
              <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
              <small>seconds</small>
            </div>
          </div> */}
        </div>

        {/* <a
          href="https://www.kickstarter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="learn-more-button"
        >
          Learn More
        </a> */}
      </div>

      <div className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Critical Fix Logo" className="logo-image" />
          </Link>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </button>

          <nav className="nav-links">
            <Link to="/" state={{ scrollTo: "news" }}>News</Link>
            <Link to="/" state={{ scrollTo: "community" }}>Community</Link>
            <Link to="/" state={{ scrollTo: "about" }}>About Us</Link>
            <Link to="/" state={{ scrollTo: "contact" }}>Contact</Link>
            <Link to="/Play">Play!</Link>
            <Link to="#shop" className="styled-button">
              Shop
              <br />
              <span className="coming-soon">(Coming Soon)</span>
            </Link>
          </nav>
        </div>

        {menuOpen && (
          <div className="mobile-nav">
            <Link to="/" state={{ scrollTo: "news" }} onClick={() => setMenuOpen(false)}>News</Link>
            <Link to="/" state={{ scrollTo: "community" }} onClick={() => setMenuOpen(false)}>Community</Link>
            <Link to="/" state={{ scrollTo: "about" }} onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/" state={{ scrollTo: "contact" }} onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/Play" onClick={() => setMenuOpen(false)}>Play!</Link>
            <Link
              to="/shop"
              className="styled-button"
              onClick={() => setMenuOpen(false)}
            >
              Shop
              <br />
              <span className="coming-soon">(Coming Soon)</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
