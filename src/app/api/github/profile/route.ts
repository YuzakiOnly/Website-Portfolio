import { NextResponse } from "next/server";

export async function GET() {
    // Return mock data jika API gagal
    const mockProfile = {
        name: "YuzakiOnly",
        bio: "Full-stack developer passionate about building web applications",
        avatar_url: "https://github.com/YuzakiOnly.png",
        public_repos: 15,
        followers: 10,
        following: 5,
        html_url: "https://github.com/YuzakiOnly"
    };

    try {
        const res = await fetch("https://api.github.com/users/YuzakiOnly", {
            headers: {
                "User-Agent": "Next.js-Portfolio",
            },
            next: { revalidate: 300 },
        });

        if (!res.ok) {
            return NextResponse.json(mockProfile);
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching profile:", error);
        return NextResponse.json(mockProfile);
    }
}