import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    try {
        const apiKey = process.env.NEWS_API_KEY;

        const response = await axios.get("https://newsapi.org/v2/everything", {
            params: {
                q: "tesla",
                from: "2025-07-05",
                sortBy: "publishedAt",
                apiKey,
            },
        });

        return NextResponse.json(response.data);
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error("News API error:", error.message);
        } else {
            console.error("Unexpected error", error);
        }

        return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
    }
}
