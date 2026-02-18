import "./Footer.css"; // optional, for any footer-specific styles
import MailingListForm from "./MailingListForm";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* About Us */}
        <div className="footer-section" id="about">
          <h2 className="footer-title">About Us</h2>
          <p className="footer-text">
            We're 3 data center techs who turned our daily chaos into a card
            game. <strong>Critical Fix</strong> is our love letter to tech
            culture. What started as a breakroom joke quickly grew into a fully
            playable card game that captures the absurd reality of solving
            tickets, scrambling for parts, and dealing with a bit of friendly
            competition.
          </p>
          <p>
            Now, instead of being stuck in a server room, you can experience it
            all from the comfort of your kitchen table.
          </p>
        </div>

        <div className="footer-section">
          {/* Mailing List */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              <h2 className="footer-title">
                Don't get lost in the backlog. Join to get notified!
              </h2>
              <MailingListForm />
            </div>
            {/* Discord */}
            <p style={{ alignSelf: "end", margin: 0 }}>
              <a
                href="https://discord.gg/tkVWV5CBzh"
                target="_blank"
                rel="noopener noreferrer"
                className="discord-button"
              >
                Join our Discord
              </a>
            </p>
          </div>
          <div id="contact">
            <h2 className="footer-title">Contact Us</h2>
            <p className="footer-text">
              Want to collaborate, review the game, or ask questions?
              <br />
              Email us at:{" "}
              <a href="mailto:hello@critical-fix.com">hello@critical-fix.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Critical Fix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
