export default async function handler(req, res) {
    const response = await fetch("https://api.github.com/repos/wxmsl/wxmsl/contents/baisima.json", {
        headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
            "User-Agent": "Vercel-Proxy"
        }
    });

    if (!response.ok) {
        return res.status(response.status).json({ error: "GitHub API 请求失败" });
    }

    const data = await response.json();
    return res.status(200).json(data);
}
