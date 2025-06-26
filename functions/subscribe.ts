import type { PagesFunction } from "@cloudflare/workers-types";
interface Env {
    MAILCHIMP_API_KEY: string;
    MAILCHIMP_LIST_ID: string;
    MAILCHIMP_SERVER_PREFIX: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
    const { email } = await request.json().catch(() => ({}));
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return new Response(JSON.stringify({ success: false, error: "Invalid email" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }
    const url = `https://${env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${env.MAILCHIMP_LIST_ID}/members`;

    const mcRes = await fetch("https://critical-fix.us13.list-manage.com/subscribe/post", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${env.MAILCHIMP_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email_address: email,
            status: "subscribed",
        }),
    });
    const text = await mcRes.json();


    if (mcRes.ok) {
        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" },
        });
    } else {
        return new Response(JSON.stringify({ success: false, error: result.detail || "Mailchimp error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};
