import { useState } from "react";

export default function MailingListForm({
  onSuccess,
}: {
  onSuccess?: () => void;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "loading"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(error?.error || "Something went wrong.");
        return;
      }

      await res.json();
      setStatus("success");
      setMessage("Thanks for signing up!");
      setEmail("");
      localStorage.setItem("cf_signed_up", "true");
      if (onSuccess) onSuccess();
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div className="mailing-wrapper">
      <form onSubmit={handleSubmit} className="mailing-list-form">
        <input
          required
          type="email"
          name="EMAIL"
          placeholder="Enter your email"
          className="mailing-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="styled-button"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Submit"}
        </button>
      </form>
      {message && <div className={`form-status ${status}`}>{message}</div>}
    </div>
  );
}
