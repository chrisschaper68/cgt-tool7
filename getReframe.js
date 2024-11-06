export default async function handler(req, res) {
    // Haal de API-sleutel uit de Vercel-omgeving
    const apiKey = process.env.OPENAI_API_KEY;

    // Controleer of de API-sleutel beschikbaar is
    if (!apiKey) {
        return res.status(500).json({ error: 'API-sleutel niet gevonden' });
    }

    // Maak een API-aanroep naar OpenAI
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: req.body.prompt || "Hello world!",
            max_tokens: 50
        })
    });

    const data = await response.json();
    res.status(200).json(data); // Stuur het resultaat terug naar de frontend
}
