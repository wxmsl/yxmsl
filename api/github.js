export default async function handler(req, res) {
    const GITHUB_API = "https://api.github.com/repos/wxmsl/wxmsl/contents/baisima.json";
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // 读取 Vercel 环境变量

    if (!GITHUB_TOKEN) {
        return res.status(500).json({ error: "GitHub Token ERROR" });
    }

    const response = await fetch(GITHUB_API, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            "User-Agent": "Vercel-Proxy"
        }
    });

    if (!response.ok) {
        return res.status(response.status).json({ error: "GitHub API ERROR" });
    }

    const data = await response.json();
    return res.status(200).json(data);
}
