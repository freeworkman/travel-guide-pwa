export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const lat = url.searchParams.get("lat");
  const lon = url.searchParams.get("lon");
  const API_KEY = env.OPENWEATHER_API_KEY;

  if (!API_KEY) return new Response(JSON.stringify({ error: "No API Key" }), { status: 500 });
  if (!lat || !lon) return new Response(JSON.stringify({ error: "Missing coords" }), { status: 400 });

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=zh_tw&appid=${API_KEY}`);
    const data = await response.json();
    return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Fetch failed" }), { status: 500 });
  }
}
