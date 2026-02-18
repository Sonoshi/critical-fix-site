import { Link } from "react-router-dom";
import "./CFHeader.css";
import logo from "../assets/logo_v2.png";

function CFHeader() {
  return (
    <header className="cf-header">
      <div className="cf-header-inner">
        {/* Logo */}
        <Link to="/" className="cf-logo-link">
          <img src={logo} alt="Critical Fix Logo" className="cf-logo-image" />
        </Link>

        {/* Centered Announcement */}
        <div className="cf-announcement">Kickstarter coming Fall 2026</div>
      </div>
    </header>
  );
}

export default CFHeader;
