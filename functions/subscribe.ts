import type { PagesFunction } from "@cloudflare/workers-types";


export const onRequestPost: PagesFunction = async ({ request }) => {
    const { email } = await request.json().catch(() => ({}));
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return new Response(JSON.stringify({ success: false, error: "Invalid email" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    // Forward to Mailchimp
    const formData = new URLSearchParams({
        EMAIL: email,
        u: "340b27d5ec3b9c1de316684b2",
        id: "35d9d69a10",
        // f_id: "0048e1e5f0", 
    });

    const mcRes = await fetch("https://critical-fix.us13.list-manage.com/subscribe/post", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
        redirect: "manual"
    });
    const text = await mcRes.text();
    // log or return the body so you can debug
    console.log("Mailchimp response:", text);


    // Mailchimp always redirects, so we treat it as success no matter what
    return new Response(JSON.stringify({ success: true, debug: text }), {
        headers: { "Content-Type": "application/json" },
    });
};
