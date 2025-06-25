import { useState } from "react";

export default function MailingListForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Allow time for native submit to fire before clearing. Kind of jank.
    setTimeout(() => {
      setEmail("");
    }, 100);
  };

  return (
    <form
      action="https://critical-fix.us13.list-manage.com/subscribe/post?u=340b27d5ec3b9c1de316684b2&amp;id=35d9d69a10&amp;f_id=0048e1e5f0"
      method="POST"
      className="mailing-list-form"
      target="_blank"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        required
        type="email"
        name="EMAIL"
        placeholder="Enter your email"
        className="mailing-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="styled-button">
        Submit
      </button>
    </form>
  );
}
