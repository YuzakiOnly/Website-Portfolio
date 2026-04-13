import { NextResponse } from "next/server";

export async function GET() {
    // Return mock data
    const mockRepos = [
        {
            id: 1,
            name: "Website-Portfolio",
            description: "Personal portfolio website built with Next.js",
            html_url: "https://github.com/YuzakiOnly/Website-Portfolio",
            stargazers_count: 5,
            forks_count: 2,
            language: "TypeScript",
            fork: false,
            archived: false,
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
        },
        {
            id: 2,
            name: "Jaga-Modal",
            description: "Financial management application",
            html_url: "https://github.com/YuzakiOnly/Jaga-Modal",
            stargazers_count: 3,
            forks_count: 1,
            language: "JavaScript",
            fork: false,
            archived: false,
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
        }
    ];

    try {
        const res = await fetch("https://api.github.com/users/YuzakiOnly/repos?sort=updated&per_page=100", {
            headers: {
                "User-Agent": "Next.js-Portfolio",
            },
            next: { revalidate: 300 },
        });

        if (!res.ok) {
            return NextResponse.json(mockRepos);
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching repos:", error);
        return NextResponse.json(mockRepos);
    }
}