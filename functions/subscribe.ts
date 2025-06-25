// functions/subscribe.ts
export async function onRequestPost({ request }: { request: Request }) {
    const data = await request.json();
    const email = data.email;

    if (!email || !email.includes("@")) {
        return new Response("Invalid email", { status: 400 });
    }

    // 🔐 Replace with your real Mailchimp endpoint and API key
    const MAILCHIMP_LIST_ID = "YOUR_LIST_ID";
    const API_KEY = "YOUR_API_KEY";
    const DATACENTER = "usX"; // e.g., us6, us21 — from your API key
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `apikey ${API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email_address: email,
            status: "subscribed",
        }),
    });

    if (!response.ok) {
        const err = await response.json();
        return new Response(JSON.stringify(err), { status: 500 });
    }

    return new Response("Signed up successfully!", { status: 200 });
}
