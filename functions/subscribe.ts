import type { PagesFunction } from "@cloudflare/workers-types";

interface Env {
    MAILCHIMP_API_KEY: string;
    MAILCHIMP_LIST_ID: string;
    MAILCHIMP_SERVER_PREFIX: string;
}

interface MailchimpResponse {
    status?: number;
    title?: string;
    detail?: string;
    [key: string]: unknown;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
    try {
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
                Authorization: `Bearer ${env.MAILCHIMP_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email_address: email,
                status: "subscribed",
            }),
        });

        const result = await mcRes.json().catch(() => ({})) as MailchimpResponse;

        if (mcRes.ok) {
            return new Response(JSON.stringify({ success: true }), {
                headers: { "Content-Type": "application/json" },
            });
        } else {
            const safeStatus = typeof result.status === "number" && result.status >= 200 && result.status <= 599
                ? result.status
                : 500;
            return new Response(JSON.stringify({
                success: false,
                error: result.detail || result.title || "Mailchimp error",
                debug: result,
            }), {
                status: safeStatus,
                headers: { "Content-Type": "application/json" },
            });
        }
    } catch (err) {
        return new Response(JSON.stringify({
            success: false,
            error: "Worker runtime crash",
            debug: (err instanceof Error ? err.message : String(err)),
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};
