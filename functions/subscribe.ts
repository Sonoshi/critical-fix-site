import type { PagesFunction } from "@cloudflare/workers-types";
interface Env {
    MAILCHIMP_API_KEY: string;
    MAILCHIMP_LIST_ID: string;
    MAILCHIMP_SERVER_PREFIX: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
    const body = await request.json().catch(() => ({}));
    const email = (body as { email?: string }).email;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return new Response(JSON.stringify({ success: false, error: "Invalid email" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }
    const url = `https://${env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${env.MAILCHIMP_LIST_ID}/members`;

    const mcRes = await fetch(url, {
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
    interface MailchimpResponse {
        status?: number;
        title?: string;
        detail?: string;
        [key: string]: unknown;
    }

    const result = await mcRes.json().catch(() => ({})) as MailchimpResponse;
    if (mcRes.ok && !result.status) {
        // Success with no error in body
        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" },
        });
    } else {
        // Fail or warning
        return new Response(JSON.stringify({
            success: false,
            error: result.detail || result.title || "Mailchimp error",
            debug: result
        }), {
            status: result.status || 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};
